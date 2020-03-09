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

// movies_genres get route to db
router.get('/:movie_id/genres', (req, res) => {
    console.log("in server/:movie_id/genres GET", req.params.movie_id);
    const queryText = `select * from "genres"
  join "movies_genres" on "genres"."id" = "movies_genres"."genres_id"
  where "movies_genres"."movies_id" =${req.params.movies.id};`;
   pool.query(queryText)
    .then(result => {
          res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting query', error);
      res.sendStatus(500);
    });

})

module.exports = router;
