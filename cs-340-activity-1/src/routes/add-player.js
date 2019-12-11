const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for displaying the form used to add a new player to a team.
 */
router.get('/add-player/:team_id', (req, res) => {
    res.render('player-add', createViewContext({ message: 'Add New Player' }));
});

/**
 * Logic for actually adding a new part player using data from a form submission.
 */
 router.post('/add-player/:team_id', (req, res, next) => {
     let context = createViewContext();
     var team = req.params.team_id;
     // Make sure a player with the provided player_id doesn't already exist
     req.db.query('SELECT * FROM Players WHERE player_id = ?', [req.body.player_id], (err, results) => {
         if (err) return next(err);

         if (results.length) {
             // Already exists
             context.message = `Can't create player with ID ${req.body.player_id} because it already exists`;
             res.render('player-add', context);
         } else {
             // Doesn't exist, create it
             req.db.query(
                 'INSERT INTO Players (player_id, name, year, team_id) VALUES (?,?,?, ' + team + ')',
                 [req.body.player_id, req.body.name, req.body.year],
                 err => {
                     if (err) return next(err);

                     context.message = 'Record added successfully';
                     res.render('player-add', context);
                 }
             );
         }
     });
 });

module.exports = router;
