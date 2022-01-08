var express = require('express')
var Student = require('./21.1.更改案例')

router.post('/students/new', function (req, res) {

    new Student(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.get('/students/edit', function (req, res) {

    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id, req.body, function (err, student) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.get('/students/delete', function (req, res) {

    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndRemove(id, function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})

module.exports = router;