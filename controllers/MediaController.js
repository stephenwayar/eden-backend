const User = require("../models/User")
const logger = require('../utils/logger')
const uploadUserAvatar = require('../helpers/uploadUserAvatar')
const deletedImg = require('../helpers/deleteImage')

exports.upload_avatar = async function(req, res){
  const fileStr = req.body.avatar_str
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
    const img = await uploadUserAvatar(fileStr)

    user.avatar = {
      public_id: img.public_id,
      url: img.url
    }

    const savedUser = await user.save()

    res.status(200).json(savedUser)
  }
}