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

export async function insertData(data: IPost) {
  try {
    await conn`INSERT INTO grid_posts (data) VALUES (${JSON.stringify(data)})`
    console.log('> ✔️ [Database | insertData]: data insert!')
  } catch (err) {
    console.log(
      '> ❌ [Database | insertData]: something goes wrong while inserting data',
    )
    console.error(err)
    throw err
  }
}
