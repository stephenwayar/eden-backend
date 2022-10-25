const { cloudinary } = require('../utils/cloudinary')
const logger = require('../utils/logger')

const uploadProductImg = async (imgArr) => {
  let images = []

  try{
    const promiseArr = await imgArr.map(async (img) => {
      const { public_id, url } = await cloudinary.uploader.upload(img, {
          upload_preset: 'eden',
          folder: 'products'
      })
      
      return { public_id, url }
    })
    
    images = await Promise.all(promiseArr)

    return images
  } catch(error) {
    logger.error('Failed to upload image: ', error)

    throw new Error(error)
  }
}

module.exports = uploadProductImg