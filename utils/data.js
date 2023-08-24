// user name data

const userData = [
  {
    username: 'lernantino',
    email: 'lerantino@gmail.com'
  },
  {
    username: 'amiko',
    email: 'amiko@gmail.com'
  },
  {
    username: 'jordan77',
    email: 'jordan77@gmail.com'
  },
  {
    username: 'david',
    email: 'david@gmail.com'
  },
];

module.exports = userData;


// thoughts data

const thoughtsData = [
  {
    thoughtText: 'I love to code!',
    username: 'lernantino',
    createdAt: new Date(),
    reactions: [
      {
        reactionBody: 'I love to code too!',
      },
      {
        reactionBody: 'I love to code too!',
      },
    ],
  },
  {
    thoughtText: 'Coding is hard!',
    username: 'amiko',
    createdAt: new Date(),
    reactions: [
      {
        reactionBody: 'You just need to study!',
      },
      {
        reactionBody: 'You got this!',
      },
    ],
  },
  {
    thoughtText: 'UCF is a great bootcamp!',
    username: 'jordan77',
    createdAt: new Date(),
    reactions: [
      {
        reactionBody: 'Sure is!',
      },
      {
        reactionBody: 'yes sir!',
      },
    ],
  },
  {
    thoughtText: 'when does the money start?',
    username: 'david',
    createdAt: new Date(),
    reactions: [
      {
        reactionBody: 'Start applying now!',
      },
      {
        reactionBody: 'When you graduate',
      },
    ],
  },
];

module.exports = thoughtsData;
