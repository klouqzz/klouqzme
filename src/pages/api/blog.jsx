import db from "croxydb"

export default function Blog(req, res) {

  return res.status(200).json(db.all())
  
}