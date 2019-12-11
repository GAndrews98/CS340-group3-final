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
    var teamName;
    req.db.query(
        `
        SELECT G.score, G.location, G.time, T.schoolname as Team1, T1.schoolname as Team2, T2.schoolname as Team3, T3.schoolname as Team4 FROM Games G INNER JOIN Teams T on T.team_id = G.team1 INNER JOIN Teams T1 on T1.team_id = G.team2 INNER JOIN Teams T2 on T2.team_id = G.team3 INNER JOIN Teams T3 on T3.team_id = G.team4
        WHERE G.team1 =` + team + `
            OR G.team2 =` + team + `
            OR G.team3 =` + team + `
            OR G.team4 =` + team
        ,
        (err, results) => {
            if (err) return next(err);
            req.db.query('SELECT schoolname FROM Teams T WHERE T.team_id = ' + team, (err, resultsT) => {
                teamName = resultsT[0].schoolname;
                res.render(
                    'games',
                    createViewContext({
                        pageName: teamName + "'s",
                        rows: results
                    })
                );
            });
        }
    );
});

router.get('/games', (req, res, next) => {

    var query = 'SELECT G.score, G.location, G.time, T.schoolname as Team1, T1.schoolname as Team2, T2.schoolname as Team3, T3.schoolname as Team4 FROM Games G INNER JOIN Teams T on T.team_id = G.team1 INNER JOIN Teams T1 on T1.team_id = G.team2 INNER JOIN Teams T2 on T2.team_id = G.team3 INNER JOIN Teams T3 on T3.team_id = G.team4'
    req.db.query(
        query,
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
