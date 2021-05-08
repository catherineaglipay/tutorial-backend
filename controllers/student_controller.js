var studentModel   = require('../models/student_model')

exports.getStudentListCtrl = async function (req, res, next) {
    const qryRes = await studentModel.getStudentListModel()
    
    res.json({
        statusCode: 200,
        devMessage: qryRes
    })
}

exports.saveStudentCtrl = async function (req, res, next) {
    const qryRes = await studentModel.saveStudentModel(req)
    
    res.json({
        statusCode: 200,
        devMessage: qryRes
    })
}