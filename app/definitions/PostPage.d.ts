export interface IPostData {
    banner: {
      url: string
      author: string
      original_url: string
      provider_name: string
      provider_url: string
      icon_url: string
    }
    heading: {
      title: string
      publicationDate: number
      tags: string[]
    }
    content: {
      type: string
      text?: string
      image?: {
        image_url: string
        image_alt: string
        image_author: string
        image_original_url: string
        provider_name: string
        provider_url: string
      }
      content?: {
        type: string
        text?: string
        href?: string
      }[]
      list?: string[]
    }[]
  }
  