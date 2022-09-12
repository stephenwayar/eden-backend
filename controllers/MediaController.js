const User = require("../models/User")
const logger = require('../utils/logger')
const uploadUserAvatar = require('../helpers/uploadUserAvatar')
const deletedImg = require('../helpers/deleteImage')

exports.upload_avatar = async function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const fileStr = req.body.avatarStr
  const email = req.body.email
  const user = await User.findOne({ email })

  if(user.avatar){
    try{
      await deletedImg(user.avatar)

      const img = await uploadUserAvatar(fileStr)

      user.avatar = {
        public_id: img.public_id,
        url: img.url
      }

      const savedUser = await user.save()

      res.status(200).json(savedUser)
    }catch(error){
      logger.error('Failed to upload avatar', error)

      res.status(400).json({
        success: false,
        message: 'Failed to upload avatar'
      })
    }
  }else{
    try{
      const img = await uploadUserAvatar(fileStr)

      user.avatar = {
        public_id: img.public_id,
        url: img.url
      }

      const savedUser = await user.save()

      res.status(200).json(savedUser)
    }catch(error){
      logger.error('Failed to upload avatar', error)

      res.status(400).json({
        success: false,
        message: 'Failed to upload avatar'
      })
    }
  }
}

exports.delete_avatar = async function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const email = req.body.email
  const user = await User.findOne({ email })

  if(!user){
    logger.info('Unexpected, the user was not found')
    return res.status(404).json({
      error: 'Snap! there was a problem somewhere'
    })
  }

  try{
    await deletedImg(user.avatar)

    user.avatar = {
      public_id: null,
      url: null
    }

    const savedUser = await user.save()

    res.status(200).json(savedUser)
  }catch(error){
    logger.error('Failed to delete avatar', error)

    res.status(400).json({
      success: false,
      message: 'Failed to delete avatar'
    })
  }
}