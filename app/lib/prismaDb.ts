import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 9

export const getGridPosts = async () => {
    try {
        const result = await prisma.grid_posts.findMany()
        await prisma.$disconnect()
        console.log('> ✔️ [Database | getGridPosts]: data retrieved!')
        return result
    } catch (err) {
        console.error(
            '> ❌ [Prisma | getGridPosts]: error while fetching grid posts data',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const getTotalGridPosts = async () => {
    try {
        const count = await prisma.grid_posts.count()
        await prisma.$disconnect()
        const totalPages = Math.ceil(count / ITEMS_PER_PAGE)
        console.log('> ✔️ [Database | getTotalGridPosts]: count retrieved!')
        return totalPages
    } catch (err) {
        console.error(
            '> ❌ [Prisma | getTotalGridPosts]: error while getting total count of posts',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const searchPosts = async (term: string, page: number = 1) => {
    const offset = (page - 1) * ITEMS_PER_PAGE
    const formatedTerm = term.replace(/^\w/, (c) => c.toUpperCase())

    try {
        const result = await prisma.grid_posts.findMany({
            where: {
                OR: [
                    {
                        title: { contains: term, mode: 'insensitive' },
                    },
                    {
                        description: { contains: term, mode: 'insensitive' },
                    },
                    {
                        tags: {
                            has: formatedTerm,
                        },
                    },
                ],
            },
            orderBy: {
                publication_date: 'asc',
            },
            take: ITEMS_PER_PAGE,
            skip: offset,
        })

        const totalCount = await prisma.grid_posts.count({
            where: {
                OR: [
                    {
                        title: { contains: term, mode: 'insensitive' },
                    },
                    {
                        description: { contains: term, mode: 'insensitive' },
                    },
                    { tags: { has: formatedTerm } },
                ],
            },
        })

        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)
        console.log('> 🔍 [Database | getTotalGridPosts]: count retrieved!')
        return { data: result, totalPages }
    } catch (err) {
        console.error(
            '> ❌ [Prisma | searchPosts]: error while searching posts',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const getPostTitle = async (post_path_id: string) => {
    try {
        const result = await prisma.json_posts.findUnique({
            where: {
                grid_post_path_id: post_path_id,
            },
            select: {
                post_title: true,
            },
        })
        await prisma.$disconnect()
        console.log('> ✔️ [Database | getPostTitle]: data retrieved!')
        return result ? result.post_title : null
    } catch (err) {
        console.error(
            '> ❌ [Prisma | getPostTitle]: error while fetching post title',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const getPostData = async (post_path_id: string) => {
    try {
        const result = await prisma.json_posts.findUnique({
            where: {
                grid_post_path_id: post_path_id,
            },
        })
        await prisma.$disconnect()
        console.log('> ✔️ [Database | getPostData]: data retrieved!')
        return result ? result.post_data : null
    } catch (err) {
        console.error(
            '> ❌ [Prisma | getPostData]: error while fetching post data',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const getAdminHashes = async () => {
    try {
        const result = await prisma.admin_credentials.findMany()
        await prisma.$disconnect()
        console.log('> ✔️ [Database | getAdminHashes]: data retrieved!')
        return result
    } catch (err) {
        console.error(
            '> ❌ [Prisma | getAdminHashes]: error while fetching admin hashes',
        )
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
