var conn   = require('../services/mysql_service')

exports.getStudentListModel = async function(){
    var query   = "SELECT * FROM student_tbl"

    const result = await conn.getQuery(query, null).then(results => results);

    const arr    = result.map((item, index) => ({
        key         : item.id,
        fname       : item.first_name,
        mname       : item.middle_name,
        lname       : item.last_name,
    })) 
    
    return arr
}

exports.saveStudentModel = async function(req){
    // params = req.query
    params = req.body

    var query   = "INSERT INTO student_tbl (first_name, middle_name, last_name) VALUES (?,?,?)"

    const result = await conn.getQuery(query, [params.first_name, params.middle_name, params.last_name]).then(results => results);

    console.log("result test: ", result)

    // return result.insertId
    return "Successfully added a student"
}