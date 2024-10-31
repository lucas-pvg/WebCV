export interface SkillJSON {
  label: string
  rating: number
  category: string
}

export interface SkillInterface {
  label: string
  rating: 1 | 2 | 3 | 4 | 5 | 0
  category: 'technology' | 'tool' | 'language' | 'others'
}

export function skillMapper(data: SkillJSON): SkillInterface {
  const label = typeof data.label == 'string' ? data.label : ''
  const rating = (data.rating <= 5 && data.rating >= 1) ? data.rating as SkillInterface['rating'] : 0
  const category = ['technology', 'tool', 'language'].includes(data.category) ? data.category as SkillInterface['category'] : 'others'

  return {
    label: label,
    rating: rating,
    category: category
  }
}
