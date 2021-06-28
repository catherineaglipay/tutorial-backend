var express = require('express')
var router = express.Router()

var studentController = require('../controllers/student_controller')

//working
// router.post('/get-student-list', function (req, res, next) {
//     console.log("router - get student list")
//     studentController.getStudentListCtrl(req, res, next)
// })

//experiment for get
router.get('/get-student-list', function (req, res, next) {
    console.log("ROUTER GET STUDENT")
    studentController.getStudentListCtrl(req, res, next)
})

router.post('/save-student', function (req, res, next) {
    console.log("ROUTER SAVE STUDENT")
    studentController.saveStudentCtrl(req, res, next)
})

router.post('/update-student', function (req, res, next) {
    console.log("ROUTER UPDATE STUDENT")
    studentController.updateStudentCtrl(req, res, next)
})

router.post('/delete-student', function (req, res, next) {
    console.log("ROUTER DELETE STUDENT")
    studentController.deleteStudentCtrl(req, res, next)
})

 
module.exports = router

// flow:
// routes->controller->model->controller->response