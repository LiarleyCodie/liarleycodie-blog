import postgres from 'postgres'
import 'dotenv/config'

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
      '> ❌ [Database | select]: something goes wrong while fetching data',
    )
    console.error(err)
    throw err
  }
}

export async function getTotalPages() {
  try {
    const count = await conn`SELECT COUNT(*) FROM grid_posts`
    const totalPages = Math.ceil(Number(count[0].count) / ITEMS_PER_PAGE)
    console.log('> ✔️ [Database | getPostsCount]: amount of posts retrieved!')
    return totalPages
  } catch (err) {
    console.log(
      '> ❌ [Database | getPostsCount]: something goes wrong while amount of posts',
    )
    console.error(err)
    throw err
  }
}

export async function insertData(data: IPost) {
  try {
    await conn`
      INSERT INTO grid_posts (
        title, description, publication_date, tags, recent, path_id
      ) VALUES (
        ${data.title}, 
        ${data.description}, 
        to_timestamp(${data.publicationDate}), 
        ${data.tags}, 
        ${data.recent}, 
        ${data.path_id}
      )`
    console.log('> ✔️ [Database | insertData]: data insert!')
  } catch (err) {
    console.log(
      '> ❌ [Database | insertData]: something goes wrong while inserting data',
    )
    console.error(err)
    throw err
  }
}
