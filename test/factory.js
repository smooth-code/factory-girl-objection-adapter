import { factory } from 'factory-girl'
import ObjectionAdapter from '../lib/index'
import User from './User'

factory.setAdapter(new ObjectionAdapter())

factory.define('user', User, {
  name: factory.chance('name'),
  email: factory.chance('email'),
})

export default factory
