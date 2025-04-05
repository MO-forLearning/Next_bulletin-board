import { DBquery } from '@/libs/db'

export default async function categories(req, res) {

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM categories'
    const categories = await DBquery(sql)
    res.status(200).json(categories[0])
  }

  if (req.method === 'POST') {
    const categoryName = req.body.category_name
    const sql = `INSERT INTO categories (category_name) VALUES ("${categoryName}")`
    const addCategories = await DBquery(sql)
    
    res.status(200).json(addCategories[0])
  }
}
