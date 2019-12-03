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
    console.log(query);
    req.db.query(
        query,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'personal-stats',
                createViewContext({
                    pageName: player,
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
