interface IPost {
  title: string
  description: string
  publicationDate: number
  tags: string[]
  recent: boolean
  path_id: string
  id: string
}

export const gridPosts: IPost[] = [
  {
    title: 'The relation between wall clocks and processors',
    description:
      'The concept of states in React is fundamental for the development of interactive and dynamic applications.',
    publicationDate: 1713750085236, // need to be formated!
    tags: ['JavaScript', 'React', 'Web Development'],
    recent: true,
    path_id: 'the-relation-between-wall-clocks-and-processors',
    id: '',
  },
  {
    title: "What's Wrong With Assembly Language",
    description:
      'Assembly language has a pretty bad reputation. The common impression about assembly language programmers today is that they are all hackers or misguided individuals who need enlightenment',
    publicationDate: 0,
    tags: ['Hardware', 'ASM', 'Apple II', 'PC', 'CPU'],
    recent: false,
    path_id: 'whats-wrong-with-assembly-language',
    id: '',
  },
  {
    title: 'The Binary Numbering System',
    description:
      'Most modern computer systems (including the IBM PC) operate using binary logic. The computer represents values using two voltage levels (usually 0v and +5v).',
    id: '',
    path_id: 'the-binary-numbering-system',
    publicationDate: 0,
    recent: false,
    tags: ['Math', 'Binary', 'ASM', 'CPU', 'PC'],
  },
]
