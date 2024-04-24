import { insertData } from "../lib/databaseConnection"

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
  const titles = [
    'HTML and CSS: Creating a Custom Checkbox',
    'Agile Methodologies in Software Projects: A Practical Guide',
    'C#: Understanding Variables and Primitive Types',
    'Python: Using Lambda Expressions',
    'React Native: Category navigation',
    'Node.js: Understanding the Event Loop',
    'Axios - a Full Stack HTTP Client',
    'Sublab & Azaleah - Cosmica',
    'How many Apple 2s were sold?',
    'Who invested in Apple at the beginning?',
    'How many games does the Commodore 64 have?',
    'What year was the Nintendo 64 released?',
    'How much did a Nintendo 64 cost in Brazil?',
    'What is a Super Nintendo?',
    'What is the history of Tetris?',
    'What does the game Tetris stimulate?',
    'What will be in version 1.2.0 of Minecraft?',
    'What is the point of Terraria?',
    'What do you need to run Terraria on PC?',
    'How many New Super Mario Bros are there?',
    'What will be the next Mario game?',
  ]
  const tags = [
    'RPG',
    'GAMES',
    'HARDWARE',
    'CPU',
    'ASM',
    'CLOCK',
    'WEB',
    'NINTENDO',
  ]
  const description = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  ]
  const timestamps = [
    1219037659, 1419014444, 1194177826, 1094155408, 1601142712, 1847476750,
    1504452528, 1146120465, 1383518271, 1570997671,
  ]
  const posts = []

  let title_id = 0
  for (let i = 0; i < 60; i++) {
    if (title_id > titles.length - 1) title_id = 0
    const currentTags = new Set<string>()
    for (let j = 0; j < 5; j++) {
      currentTags.add(tags[Math.floor(Math.random() * tags.length)])
    }

    const post: IPost = {
      title: titles[title_id],
      description: description[Math.floor(Math.random() * description.length)],
      publicationDate:
        timestamps[Math.floor(Math.random() * timestamps.length)],
      tags: Array.from(currentTags),
      recent: false,
      path_id: titles[title_id]
        .toLowerCase()
        .replace(/[:\s?]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/, ''),
      id: '',
    }

    posts.push(post)
    title_id += 1
    await insertData(post)
  }

  // console.log(posts)

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      THIS PATH IS USED FOR POPULATE THE TABLE WITH PLACEHOLDERS
    </main>
  )
}
