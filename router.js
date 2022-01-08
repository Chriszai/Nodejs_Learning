var express = require('express')
var Student = require('./student')

//创建一个路由容器
var router = express.Router();

router.get('/students/new', function (req, res) {

    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', {
            fruits: ['apple', 'banana'],
            students: students
        })
    })
})

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/')
    })
})

router.get('/students/delete', function (req, res) {
    Student.deleteById(id, function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})

module.exports = router;