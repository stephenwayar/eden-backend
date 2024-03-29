const { cloudinary } = require('../utils/cloudinary')
const logger = require('../utils/logger')

const uploadUserAvatar = async (file) => {
  try{
    const uploadedImg = await cloudinary.uploader.upload(file, {
      upload_preset: 'eden',
      folder: 'avatars'
    })
    return {
      public_id: uploadedImg.public_id,
      url: uploadedImg.url
    }
  }catch(error){
    logger.error('Failed to update avatar', error)

    throw new Error(error)
  }
}

module.exports = uploadUserAvatar