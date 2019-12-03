const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing the catalog of parts.
 *
 * This serves as an example of joining tables to produce more complex queries. You do not need to modify anything
 * in this file.
 */
router.get('/', (req, res, next) => {
    req.db.query(
        `
        SELECT * FROM Schools
        `,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'schools',
                createViewContext({
                    pageName: 'Schools',
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
