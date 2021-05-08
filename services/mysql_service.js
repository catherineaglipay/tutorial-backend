var mysql   = require('mysql')
var conn = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'training_nodejs'
})

exports.getQuery = async function(sql, params){
    return new Promise((resolve, reject) => {
        conn.query(sql, params, function(err, results) {
            if (err) {
                console.log(err)
                throw err;
            }
            resolve(results);
        });
    })
}