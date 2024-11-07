import { useState, useCallback } from 'react'
import { useAnimate, cubicBezier } from 'framer-motion'

export const useNavigate = (pages: string[]) => {
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ scrollLock, setScrollLock ] = useState(false)
  const [ animationEnded, setAnimationEnded ] = useState(true)
  const [ scope, animate ] = useAnimate()

  const lockScroll = useCallback(() => setScrollLock(true), [])
  const unlockScroll = useCallback(() => setScrollLock(false), [])
  const startAnimation = useCallback(() => setAnimationEnded(false), [])
  const endAnimation = useCallback(() => setAnimationEnded(true), [])

  const animatePage = useCallback(
    async (pageIndex: number, direction: 'up' | 'down') => {
      startAnimation()
      const position = direction === 'up' ? '-100vh' : '0'
      const easing = cubicBezier(.8, .05, .45, .95)
      await animate(pages[pageIndex], { y: position }, { duration: .8, ease: easing })
      endAnimation()
    },
    [animate, pages]
  )

  const nextPage = useCallback(async () => {
    if (scrollLock || currentPage >= pages.length - 1) return
    setCurrentPage((prev) => prev + 1)
    lockScroll()

    await animatePage(currentPage, 'up')
    unlockScroll()
  }, [scrollLock, currentPage, pages.length, animatePage, lockScroll, unlockScroll])

  const prevPage = useCallback(async () => {
    if (scrollLock || currentPage <= 0) return
    setCurrentPage((prev) => prev - 1)
    lockScroll()

    await animatePage(currentPage - 1, 'down')
    unlockScroll()
  }, [scrollLock, currentPage, animatePage, lockScroll, unlockScroll])

  const goToPage = useCallback((pageId: string) => {
    const pageIndex = pages.findIndex((page) => page === pageId)
    const currentIndex = currentPage

    if (scrollLock || pageIndex === currentPage || pageIndex < 0 || pageIndex >= pages.length) return
    setCurrentPage(pageIndex)
    lockScroll()

    const animations = []
    for (let i = currentIndex; i !== pageIndex; i += pageIndex > currentIndex ? 1 : -1) {
      pageIndex > currentIndex
      ? animations.push(animatePage(i, 'up'))
      : animations.push(animatePage(i - 1, 'down'))
    }

    Promise.all(animations).then(() => {
      endAnimation()
      unlockScroll()
    })
  }, [scrollLock, currentPage, pages.length, animatePage, lockScroll, unlockScroll]
  )

  return { scope, currentPage, animationEnded, nextPage, prevPage, goToPage }
}
