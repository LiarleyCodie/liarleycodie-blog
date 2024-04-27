import { IPostData } from '../definitions/PostPage'
import { insertGridPostData, insertJsonPostData } from '../lib/databaseConnection'

interface IPost {
  title: string
  description: string
  publicationDate: number
  tags: string[]
  recent: boolean
  path_id: string
  id: string
}

export default async function Seed() {
  // const titles = [
  //   'HTML and CSS: Creating a Custom Checkbox',
  //   'Agile Methodologies in Software Projects: A Practical Guide',
  //   'C#: Understanding Variables and Primitive Types',
  //   'Python: Using Lambda Expressions',
  //   'React Native: Category navigation',
  //   'Node.js: Understanding the Event Loop',
  //   'Axios - a Full Stack HTTP Client',
  //   'Sublab & Azaleah - Cosmica',
  //   'How many Apple 2s were sold?',
  //   'Who invested in Apple at the beginning?',
  //   'How many games does the Commodore 64 have?',
  //   'What year was the Nintendo 64 released?',
  //   'How much did a Nintendo 64 cost in Brazil?',
  //   'What is a Super Nintendo?',
  //   'What is the history of Tetris?',
  //   'What does the game Tetris stimulate?',
  //   'What will be in version 1.2.0 of Minecraft?',
  //   'What is the point of Terraria?',
  //   'What do you need to run Terraria on PC?',
  //   'How many New Super Mario Bros are there?',
  //   'What will be the next Mario game?',
  // ]
  // const tags = [
  //   'RPG',
  //   'GAMES',
  //   'HARDWARE',
  //   'CPU',
  //   'ASM',
  //   'CLOCK',
  //   'WEB',
  //   'NINTENDO',
  // ]
  // const description = [
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  //   'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //   'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  //   'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  //   'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  // ]
  // const timestamps = [
  //   1219037659, 1419014444, 1194177826, 1094155408, 1601142712, 1847476750,
  //   1504452528, 1146120465, 1383518271, 1570997671,
  // ]
  // const posts = []

  // let title_id = 0
  // for (let i = 0; i < 60; i++) {
  //   if (title_id > titles.length - 1) title_id = 0
  //   const currentTags = new Set<string>()
  //   for (let j = 0; j < 5; j++) {
  //     currentTags.add(tags[Math.floor(Math.random() * tags.length)])
  //   }

  //   const post: IPost = {
  //     title: titles[title_id],
  //     description: description[Math.floor(Math.random() * description.length)],
  //     publicationDate:
  //       timestamps[Math.floor(Math.random() * timestamps.length)],
  //     tags: Array.from(currentTags),
  //     recent: false,
  //     path_id: titles[title_id]
  //       .toLowerCase()
  //       .replace(/[:\s?]+/g, '-')
  //       .replace(/-+/g, '-')
  //       .replace(/-+$/, ''),
  //     id: '',
  //   }

  //   posts.push(post)
  //   title_id += 1
  //   await insertData(post)
  // }

  const postData: IPostData = {
    banner: {
      url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
      author: 'Dani Muchow',
      original_url:
        'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
      provider_name: 'Pexels',
      provider_url: 'https://www.pexels.com/',
      icon_url: '/cpu.svg',
    },
    heading: {
      title: "What's Wrong With Assembly Language",
      publicationDate: 1713750085236,
      tags: ['Hardware', 'ASM', 'Apple II', 'PC', 'CPU'],
    },
    content: [
      {
        type: 'h2',
        text: 'Assembly language has a pretty bad reputation',
      },
      {
        type: 'p',
        text: 'The common impression about assembly language programmers today is that they are all hackers or misguided individuals who need enlightenment.',
      },
      {
        type: 'p',
        text: 'Here are the reasons people give for not using assembly:',
      },
      {
        type: 'ul',
        list: [
          'Assembly is hard to learn.',
          'Assembly is hard to read and understand.',
          'Assembly is hard to debug.',
          'Assembly is hard to maintain.',
          'Assembly is hard to write.',
          'Assembly language programming is time consuming.',
          'Improved compiler technology has eliminated the need for assembly language.',
          'Today, machines are so fast that we no longer need to use assembly.',
          'If you need more speed, you should use a better algorithm rather than switch to assembly language.',
          'Machines have so much memory today, saving space using assembly is not important.',
          'Assembly language is not portable.',
        ],
      },
      {
        type: 'p_a_strong_em',
        content: [
          { type: 'text', text: 'An ' },
          { type: 'em', text: 'old joke' },
          { type: 'strong', text: ' goes ' },
          { type: 'link', text: 'something', href: '/' },
          { type: 'text', text: ' like this' },
        ],
      },
      {
        type: 'p_a_strong_em',
        content: [
          { type: 'text', text: 'An ' },
          { type: 'em', text: 'old joke' },
          { type: 'strong', text: ' goes ' },
          { type: 'link', text: 'something', href: '/' },
          { type: 'text', text: ' like this' },
        ],
      },
    ],
  }

  const post: IPost = {
    title: 'How to bake a cake',
    description:
      'Cake is a flour-based food, usually sweet and baked in the oven. Cakes are one of the main components of parties, such as birthdays and weddings, sometimes artistically decorated and occupying the central place on the table.',
    id: '',
    path_id: 'How to bake a cake'
      .toLowerCase()
      .replace(/[:\s?]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$/, ''),
      publicationDate: Math.floor(Date.now() / 1000),
      recent: false,
      tags: ['Cake', 'Kitchen', 'Bakery', 'Sweet']
  }

  // const { id, path_id } = await (await insertGridPostData(post)).postId[0]
  // await insertJsonPostData(postData, id, path_id)

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      THIS PATH IS USED FOR POPULATE THE TABLE WITH PLACEHOLDERS
    </main>
  )
}
