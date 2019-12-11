const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/players/:team', (req, res, next) => {
    var team = req.params.team;
    req.db.query(
        `SELECT * FROM Players P WHERE P.team_id=`+ team
        ,
        (err, results) => {
            if (err) return next(err);
            req.db.query('SELECT schoolname FROM Teams T WHERE T.team_id = ' + team, (err, resultsT) => {
                teamName = resultsT[0].schoolname;
                res.render(
                    'players',
                    createViewContext({
                        pageName: teamName,
                        linkName: team,
                        rows: results
                    })
                );
            });
        }
    );
});

module.exports = router;
