const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all movie genres
router.get('/', (req, res) => {
  console.log("in server edit router-GET");
   const queryText = `SELECT * FROM "genres" ORDER BY "name" ASC`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log('error getting genres', error);
          res.sendStatus(500);
      });
});


router.put('/:id', (req, res) => {
  console.log('IN PUT on Server Side:', req.body, req.params);
  console.log('testing req.body title: ', req.body.change.edits.title, "req params id test :", req.params.id);
  const queryText = `UPDATE "movies" SET "title" =$1, "description" =$2 WHERE id=$3;`;
   const queryValues = [req.body.change.edits.title, req.body.change.edits.description, req.params.id]
  pool.query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log("Error editing from server", err);
      res.sendStatus(500);
    });
})

  module.exports = router;