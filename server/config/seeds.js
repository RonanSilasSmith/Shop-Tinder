const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Pants' },
    { name: 'Hats' },
    { name: 'Shoes' },
    { name: 'Sunglasses' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Shirt 1',
      description:
        'Black T-Shirt',
      image: 'black_t_shirt.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Shirt 2',
      description:
        'Striped T-Shirt',
      image: 'striped_t_shirt.jpg',
      category: categories[0]._id,
      price: 16.99,
      quantity: 500
    },
    {
      name: 'Pants 1',
      category: categories[1]._id,
      description:
        'Blue Jeans',
      image: 'blue_jeans.jpg',
      price: 29.99,
      quantity: 300
    },
    {
      name: 'Pants 2',
      category: categories[1]._id,
      description:
        'Black Pants',
      image: 'black_pants.jpg',
      price: 29.99,
      quantity: 400
    },
    {
      name: 'Pants 3',
      category: categories[1]._id,
      description:
        'Khaki Pants',
      image: 'khaki_pants.jpg',
      price: 24.99,
      quantity: 250
    },
    {
      name: 'Hats 1',
      category: categories[2]._id,
      description:
        'Baseball Cap',
      image: 'baseball_cap.jpg',
      price: 45.99,
      quantity: 20
    },
    {
      name: 'Hats 2',
      category: categories[2]._id,
      description:
        'Fedora',
      image: 'fedora.jpg',
      price: 19.99,
      quantity: 40
    },
    {
      name: 'Shoes 1',
      category: categories[3]._id,
      description:
        'Tennis Sneakers',
      image: 'tennis_sneakers.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Shoes 2',
      category: categories[3]._id,
      description: 'High Heels',
      image: 'high_heels.jpg',
      price: 69.99,
      quantity: 50
    },
    {
      name: 'Shoes 3',
      category: categories[3]._id,
      description:
        'Dress Shoes',
      image: 'dress_shoes.jpg',
      price: 49.99,
      quantity: 70
    },
    {
      name: 'Sunglasses 1',
      category: categories[4]._id,
      description:
        'Black Sunglasses',
      image: 'black_sunglasses.jpg',
      price: 119.99,
      quantity: 40
    },
    {
      name: 'Sunglasses 2',
      category: categories[4]._id,
      description:
        'Pinhole Sunglasses',
      image: 'pinghole_sunglasess.jpg',
      price: 99.99,
      quantity: 45
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
