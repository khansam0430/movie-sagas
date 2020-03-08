const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all movie genres
// router.get('/', (req, res) => {
//   console.log("in server edit router-GET");
//    const queryText = `SELECT * FROM "genres" ORDER BY "name" ASC`;
//   pool.query(queryText)
//       .then( (result) => {
//           res.send(result.rows);
//       })
//       .catch( (error) => {
//           console.log('error getting genres', error);
//           res.sendStatus(500);
//       });
// });

router.put('/:id', (req, res) => {
  console.log('show server side description', req.body.description,'show sendId', req.body.sendId, 'show Movie title', req.body.title) ;
  const queryText = `UPDATE movies SET "description" = '${req.body.description}', "title" = '${req.body.title}' WHERE id='${req.body.sendId}';`;
  pool.query(queryText)
      .then(() => {
          res.sendStatus(200);
      })
      .catch(error => {
          console.log("Error editing movie description", error);
          res.sendStatus(500);
      });
})

  module.exports = router;