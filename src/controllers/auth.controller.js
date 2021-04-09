import User from '../models/User'
import Role from '../models/Role'
import jwt  from 'jsonwebtoken'
import config from '../config'

export const signup = async (req, res) => {

  const { username, password, email, roles } = req.body

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  })

  if(roles){

    const foundRoles = await Role.find({name: {$in: roles}})
    newUser.roles = foundRoles.map( role => role._id)
    
  } else {
    const role = await Role.findOne({name: 'user'})
    newUser.roles = [role._id]
  }
 
  const userSaved = await newUser.save()

  const token =  jwt.sign({id: userSaved._id}, config.SECRET , { expiresIn: '1h'})
  res.status(201).json({token})

}

export const signin = async (req, res) => {
  
  const userFound = await User.findOne({email: req.body.email}).populate('roles')

  if(!userFound) return res.status(400).json({message: 'User not found'})

  const matchPassword = await User.comparePassword(req.body.password, userFound.password)

  if(!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password'})
  
  const token = jwt.sign({id: userFound._id}, config.SECRET, { expiresIn: '1h'})
  
  res.json({token})
}