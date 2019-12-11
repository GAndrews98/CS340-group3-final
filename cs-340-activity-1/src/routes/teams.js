const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/schools/:school', (req, res, next) => {
    var school = req.params.school;
    var query = `SELECT * FROM Teams T WHERE T.schoolname ="` + school + `"`;
    req.db.query(
        query,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'teams',
                createViewContext({
                    pageName: school,
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
