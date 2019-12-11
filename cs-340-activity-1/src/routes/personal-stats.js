const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/statistics/:player', (req, res, next) => {
    var player = req.params.player;
    var query = `SELECT * FROM Records R WHERE R.player_id =` + player;
    req.db.query(
        query,
        (err, results) => {
            if (err) return next(err);
            req.db.query('SELECT name FROM Players P WHERE P.player_id = ' + player, (err, resultsP) => {
                playerName = resultsP[0].name;
                res.render(
                    'personal-stats',
                    createViewContext({
                        pageName: playerName,
                        rows: results
                    })
                );
            });
        }
    );
});

module.exports = router;
