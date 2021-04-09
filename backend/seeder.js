import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

// Adding data to the database
const importData = async () => {
  try {
    // Clear out all 3 collections completely
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Array of the newly created users
    const createdUsers = await User.insertMany(users)

    // First item of the new users is the admin user
    const adminUser = createdUsers[0]._id

    // Products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    // Add the new products
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Removing data
const destroyData = async () => {
  try {
    // Clear all data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Calling the function
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

/* 
  Note:

  This is a command line script that can import or destroy data on MongoDB directly.
  This is used in early development to work with the local data quickly

  Take a look at the package.json file scripts to be sure of these things

  npm run data:import
  npm run data:destroy 
*/
