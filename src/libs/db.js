import mysql from 'mysql2/promise'

export async function DBquery(sql) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  })
  
  try {
    const results = await connection.query(sql)
    connection.end()
    return results
  } catch (error) {
    throw Error(error.message)
    return { error }
  }
}
