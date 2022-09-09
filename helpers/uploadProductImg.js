const { cloudinary } = require('../utils/cloudinary')
const logger = require('../utils/logger')

const uploadProductImg = async (imgArr) => {
  let images = []

  await imgArr.forEach(async img => {
    try{
      const uploadedFile = await cloudinary.uploader.upload(img, {
        upload_preset: 'eden/products'
      })

      images.concat({
        public_id: uploadedFile.public_id,
        url: uploadedFile.url
      })
    }catch(error){
      logger.error('Failed to upload image')

      if(error) throw error
    }
  });

  return images
}

module.exports = uploadProductImg