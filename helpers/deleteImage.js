const { cloudinary } = require('../utils/cloudinary')
const logger = require('../utils/logger')

const deleteImage = async (img) => {
  try{
    const deletedImg = await cloudinary.uploader.destroy(img.public_id)

    return deletedImg
  }catch(error){
    logger.error('Failed to delete image', error)

    throw new Error(error)
  }
}

module.exports = deleteImage