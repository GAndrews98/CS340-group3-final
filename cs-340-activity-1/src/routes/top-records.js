const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/top-records', (req, res, next) => {
    req.db.query(
        `
        SELECT R.category, MAX(R.value) as Record, P.name
        FROM Records R
        LEFT JOIN Players P ON P.player_id = R.player_id
        GROUP BY R.category
        `,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'top-records',
                createViewContext({
                    pageName: 'Top Records',
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
