var connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }, 
    addOne: function(name, cb){
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });

    }, 
    eatOne: function(id, cb) {
        var queryString = 'UPDATE burgers SET devoured = 1 WHERE id = ?;';
        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
