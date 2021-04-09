import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    // Hashing password with bcyrptjs
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'user2',
    email: 'user1@example.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('password', 10),
  },
]

export default users
