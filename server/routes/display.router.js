const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// returns movies with descriptions from db
router.get('/', (req, res) => {
  console.log("in server display router- GET");
  const queryText = `SELECT * FROM "movies" order by movies.id`;
//   `SELECT * FROM "movies" JOIN "movies_genres" 
//   ON "movies"."id" = "movies_genres"."movies_id" 
//   JOIN "genres" ON "genres"."id" = "movies_genres"."genres_id"
//   order by movies_genres.genres_id;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

//movies_genres get route to db
// router.get('/genres/:id', (req, res) => {
//     console.log('in /genres/id get in display router');
//     let queryString = `SELECT * FROM "movies_genres"
//     JOIN "genres" ON "genres"."id" = "movies_genres"."genres_id"
//     JOIN "movies" ON "movies"."id" = "movies_genres"."movies_id"
//     WHERE "movies"."id" = $1;`; 
//     pool.query(queryString, [req.params.id])
//     .then((results) => {
//         res.send(results.rows);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// });

module.exports = router;
