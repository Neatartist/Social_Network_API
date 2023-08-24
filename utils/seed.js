// seed data for mongo
const db = require('../config/connection');
const { User, Thought } = require('../models');

db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = await User.insertMany([
    { username: 'lernantino', email: '' },
    { username: 'amiko', email: '' },
    { username: 'jordan77', email: '' },
    { username: 'david', email: '' },
  ]);

  // create thoughts
  for (let i = 0; i < 100; i++) {
    const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const username = userData[Math.floor(Math.random() * userData.length)].username;

    await Thought.create({ thoughtText, username });
  }

  console.log('all done!');
  process.exit(0);
});
