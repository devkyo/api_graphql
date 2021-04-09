import User from '../../models/User';

export const userResolvers = {
  Query: {
    Users(){
      return User.find()
    }
  }
}