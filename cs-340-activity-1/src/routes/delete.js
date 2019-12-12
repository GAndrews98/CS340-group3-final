const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for displaying the form used to add a new player to a team.
 */
// router.get('/delete/:player_id', (req, res) => {
//     res.render('delete', createViewContext({ message: 'Player Delete Page' }));
// });

/**
 * Logic for actually adding a new part player using data from a form submission.
 */
 router.get('/delete/:player_id', (req, res, next) => {
     let context = createViewContext();
     var player = req.params.player_id;
     // Make sure a player with the provided player_id exists
     req.db.query('SELECT * FROM Players WHERE player_id = ?', [player], (err, results) => {
         if (err) return next(err);
         if (results.length) {
             req.db.query(
                 'DELETE FROM Players WHERE player_id = ?', [player],
                 err => {
                     if (err) return next(err);
                     context.message = 'Record deleted successfully';
                     res.render('delete', context);
                 }
             );
         } else {
             context.message = `Can't delete player with ID ${player} because it doesn't exist`;
             res.render('delete', context);
         }
     });
 });


module.exports = router;
