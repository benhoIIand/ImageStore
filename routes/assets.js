var Assets = require('../models/asset');

module.exports = {

    get: function(req, res) {
        var ids = req.params.id.split(',');

        Assets.find({
            _id: {
                $in: ids
            }
        })
            .exec(function(err, results) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(results);
                }
            });
    },

    getAll: function(req, res) {
        var q = req.query,
            sort = q.sort ? q.sort.toLowerCase() : 'date',
            order = q.order ? q.order.toLowerCase() : '-1',
            limit = q.limit ? (q.limit === 0 ? null : q.limit) : 100,
            fields = q.fields ? q.fields.toLowerCase() : '';

        order = order === 'asc' ? 1 : (order === 'desc' ? -1 : order);

        var sortObj = {};
        sortObj[sort] = order;

        var query = {};

        if (q.date_start || q.date_end) {
            query['date'] = {};
        }

        if (q.date_start) query['date']['$gte'] = formatDate(q.date_start);
        if (q.date_end) query['date']['$lte'] = formatDate(q.date_end);

        fields = fields.replace(/,/g, ' ');

        Assets.find()
            .where(query)
            .sort(sortObj)
            .limit(limit)
            .select(fields)
            .exec(function(err, results) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(results);
                }
            });
    },

    create: function(req, res) {
        var data = req.body instanceof Array ? req.body : [req.body];

        try {
            data.forEach(function(obj) {
                new Assets(obj).save(function() {
                    res.json('success');
                }, function(e) {
                    res.json(e);
                });
            });
        } catch (e) {
            throw Error('Create category:', e);
        }
    },

    update: function(req, res) {
        var ids = req.params.id.split(',');

        if (ids.length === 0 || ids[0] === 'undefined') {
            res.json(400, 'No id provided');
            return false;
        }

        Assets.update({
            _id: {
                $in: ids
            }
        }, req.body, {}, function() {
            res.json('updated');
        }, function(e) {
            res.json(e);
        });
    },

    delete: function(req, res) {
        var ids = req.params.id.split(',');

        if (ids.length === 0 || ids[0] === 'undefined') {
            res.json(400, 'No id provided');
            return false;
        }

        Assets.remove({
            _id: {
                $in: ids
            }
        }, function() {
            res.json('deleted');
        }, function(e) {
            res.json(e);
        });
    }

};
