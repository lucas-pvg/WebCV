import { useState, useCallback } from 'react'
import { useAnimate, cubicBezier } from 'framer-motion'

export const useNavigate = (pages: string[]) => {
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ scrollLock, setScrollLock ] = useState(false)
  const [ scope, animate ] = useAnimate()

  const lockScroll = useCallback(() => setScrollLock(true), [])
  const unlockScroll = useCallback(() => setScrollLock(false), [])

  const animatePage = useCallback(
    async (pageIndex: number, direction: 'up' | 'down') => {
      const position = direction === 'up' ? '-100vh' : '0'
      const easing = cubicBezier(.8, .05, .45, .95)
      await animate(pages[pageIndex], { y: position }, { duration: .8, ease: easing })
    },
    [animate, pages]
  )

  const nextPage = useCallback(async () => {
    if (scrollLock || currentPage >= pages.length - 1) return
    lockScroll()

    await animatePage(currentPage, 'up')
    setCurrentPage((prev) => prev + 1)
    unlockScroll()
  }, [scrollLock, currentPage, pages.length, animatePage, lockScroll, unlockScroll])

  const prevPage = useCallback(async () => {
    if (scrollLock || currentPage <= 0) return
    lockScroll()

    await animatePage(currentPage - 1, 'down')
    setCurrentPage((prev) => prev - 1)
    unlockScroll()
  }, [scrollLock, currentPage, animatePage, lockScroll, unlockScroll])

  const goToPage = useCallback((pageId: string) => {
    const pageIndex = pages.findIndex((page) => page === pageId)
    if (scrollLock || pageIndex === currentPage || pageIndex < 0 || pageIndex >= pages.length) return
    lockScroll()

    const animations = []
    for (let i = currentPage; i !== pageIndex; i += pageIndex > currentPage ? 1 : -1) {
      animations.push(animatePage(i, pageIndex > currentPage ? 'up' : 'down'))
    }

    Promise.all(animations).then(() => {
      setCurrentPage(pageIndex)
      unlockScroll()
    })
  }, [scrollLock, currentPage, pages.length, animatePage, lockScroll, unlockScroll]
  )

  return { scope, currentPage, nextPage, prevPage, goToPage }
}
