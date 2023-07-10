const path = require('path')
const multer = require('multer')

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolver(__dirname, "uploads")

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER
  })
}