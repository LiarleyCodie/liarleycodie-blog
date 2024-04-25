export interface IPost {
    title: string
    description: string
    publication_date: number
    tags: string[]
    recent: boolean
    path_id: string
    id: number
    bannerUrl?: string
  }