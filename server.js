const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// app.delete('/api/thoughts/:id', (req, res) => {
//   const { id } = req.params;
//   const { body } = req;
//   console.log(body);
//   console.log(id);
//   res.json({ message: `delete ${id}` });
// });
// app.delete('/api/thoughts/:thoughtId/reactions/:reactionId', (req, res) => {
//   const { thoughtId, reactionId } = req.params;
//   const { body } = req;
//   console.log(body);
//   console.log(thoughtId);
//   console.log(reactionId);
//   res.json({ message: `delete ${thoughtId} ${reactionId}` });
// });


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
