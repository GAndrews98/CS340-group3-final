const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/games/:team', (req, res, next) => {
    var team = req.params.team;
    req.db.query(
        `
        SELECT * FROM Games G
        WHERE G.team1 =` + team + `
            OR G.team2 =` + team + `
            OR G.team3 =` + team + `
            OR G.team4 =` + team
        ,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'games',
                createViewContext({
                    pageName: team + "'s",
                    rows: results
                })
            );
        }
    );
});

router.get('/games', (req, res, next) => {
    req.db.query(
        `
        SELECT * FROM Games G
        `,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'games',
                createViewContext({
                    pageName: "All",
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
