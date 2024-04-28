import React from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getPosts = async () => {
    const grid_posts = await prisma.grid_posts.findMany()
    return grid_posts
}


const Prismatic: React.FC = async () => {
    let grid_posts;
    try {
        grid_posts = await getPosts()
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
    
    console.log(new Date())
    console.log(grid_posts)

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
            Using Prisma
        </main>
    )
}

export default Prismatic
