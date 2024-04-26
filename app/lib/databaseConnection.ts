import postgres from 'postgres'
import 'dotenv/config'
import { IPostData } from '../definitions/PostPage'

interface IPost {
    title: string
    description: string
    publicationDate: number
    tags: string[]
    recent: boolean
    path_id: string
    id: string
}

const { PG_USER, PG_PASSWORD, PG_HOSTNAME, PG_DATABASE } = process.env

const conn = postgres({
    host: PG_HOSTNAME,
    database: PG_DATABASE,
    username: PG_USER,
    password: PG_PASSWORD,
    port: 5432,
    //   ssl: 'require' // needed when using Neon.tech connection
})

const ITEMS_PER_PAGE = 9

export async function selectAll() {
    try {
        const users = await conn`SELECT * FROM grid_posts`
        console.log('> ✔️ [Database | selectAll]: data retrieved!')
        return users
    } catch (err) {
        console.log(
            '> ❌ [Database | selectAll]: something goes wrong while fetching data',
        )
        console.error(err)
        throw err
    }
}

export async function select(offset: number = 1) {
    try {
        const result = await conn`
      SELECT * FROM grid_posts ORDER BY publication_date DESC LIMIT 9 OFFSET (${((offset < 1 ? 1 : offset) - 1) * 9})
    `
        console.log('> ✔️ [Database | select]: data retrieved!')
        return result
    } catch (err) {
        console.log(
            '\n> ❌ [Database | select]: something goes wrong while fetching data',
        )
        console.error(err)
        throw err
    }
}

export async function getTotalPages() {
    try {
        const count = await conn`SELECT COUNT(*) FROM grid_posts`
        const totalPages = Math.ceil(Number(count[0].count) / ITEMS_PER_PAGE)
        console.log(
            '> ✔️ [Database | getTotalPages]: amount of posts retrieved!',
        )
        return totalPages
    } catch (err) {
        console.log(
            '\n> ❌ [Database | getTotalPages]: something goes wrong while amount of posts',
        )
        console.error(err)
        throw err
    }
}

export async function find(term: string, page: number = 1) {
    const offset = (page - 1) * ITEMS_PER_PAGE
    try {
        const result = await conn`
      SELECT * FROM grid_posts
      WHERE title ILIKE '%' || ${term} || '%'
      OR description ILIKE '%' || ${term} || '%'
      OR ${term} ILIKE ANY(tags)
      ORDER BY publication_date
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
        const totalCount = await conn`
      SELECT COUNT(*) FROM grid_posts
      WHERE title ILIKE '%' || ${term} || '%'
      OR description ILIKE '%' || ${term} || '%'
      OR ${term} ILIKE ANY(tags) 
    `
        const totalPages = Math.ceil(
            Number(totalCount[0].count) / ITEMS_PER_PAGE,
        )
        console.log('> 🔍 [Database | find]: data retrieved!')
        return { data: result, totalPages }
    } catch (err) {
        console.log(
            '\n> ❌ [Database | find]: something goes wrong while searching for term',
        )
        console.error(err)
        throw err
    }
}

export async function insertGridPostData(data: IPost) {
    try {
        const postId = await conn`
      INSERT INTO grid_posts (
        title, description, publication_date, tags, recent, path_id
      ) 
      VALUES (
        ${data.title}, 
        ${data.description}, 
        to_timestamp(${data.publicationDate}), 
        ${data.tags}, 
        ${data.recent}, 
        ${data.path_id}
        
      )
      RETURNING id, path_id;
      `
        console.log('> ✔️ [Database | insertGridPostData]: data insert!')
        return { postId }
    } catch (err) {
        console.log(
            '\n> ❌ [Database | insertGridPostData]: something goes wrong while inserting data',
        )
        console.error(err)
        throw err
    }
}

export async function insertJsonPostData(
    data: IPostData,
    grid_post_id: number,
    grid_post_path_id: string,
) {
    try {
        await conn`
        INSERT INTO json_posts (grid_posts_id, post_title, grid_post_path_id, post_data) 
        VALUES (
          ${grid_post_id}, ${data.heading.title}, ${grid_post_path_id}, ${JSON.stringify(data)}
        )
      `
        console.log('> ✔️ [Database | insertJsonPostData]: data insert!')
    } catch (err) {
        console.log(
            '\n> ❌ [Database | insertJsonPostData]: something goes wrong while inserting data',
        )
        console.error(err)
        throw err
    }
}

export async function getPostData(grid_post_path_id: string) {
    try {
        const result = await conn`
      SELECT * FROM json_posts WHERE grid_post_path_id = ${grid_post_path_id}
    `
        console.log('> ✔️ [Database | getPostData]: data retrieved!')
        return result
    } catch (err) {
        console.log(
            '\n> ❌ [Database | getPostData]: something goes wrong while fetching post data',
        )
        console.error(err)
        throw err
    }
}

export async function getAdminTokens() {
    try {
        const result = await conn`
      SELECT * FROM admin_credentials WHERE id = 1
    `
        console.log('> ✔️ [Database | getAdminTokens]: hashes retrieved!')
        return result
    } catch (err) {
        console.log(
            '\n> ❌ [Database | getAdminTokens]: something goes wrong while fetching admin tokens',
        )
        console.error(err)
        throw err
    }
}

export async function getPostTitle(grid_post_path_id: string) {
    try {
        const result = await conn`
      SELECT post_title FROM json_posts WHERE grid_post_path_id = ${grid_post_path_id}
    `
        console.log('> ✔️ [Database | getPostTitle]: data retrieved!')
        return result
    } catch (err) {
        console.log(
            '\n> ❌ [Database | getPostTitle]: something goes wrong while fetching post title',
        )
        console.error(err)
        throw err
    }
}
