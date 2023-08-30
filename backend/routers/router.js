const express = require('express')
const router = express.Router()
const Todo = require('../models/todos')
const  Doing = require('../models/doing')
const Done = require('../models/done')

// Todo Routes

router.post('/todo', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        date: req.body.date,
        completed: req.body.completed
    })

    try {
        const todo1 = await todo.save()
        res.json(todo1)
    } catch (err) {
        res.send('Error')
        console.log(err);
    }
})

router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/todo/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.completed = req.body.completed
    try {
        const todo1 = await todo.save()
        res.json(todo1)
    } catch (err) {
        res.send('Error')
        console.log(err);
    }
})

router.put('/todo/:id', async (req, res) => {
    try {
        await Todo.findOneAndUpdate({ _id: req.params.id }, { text: req.body.text })
        res.json({ message: 'Updated Todo' })
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/todo/:id', async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id })
        res.json({ message: 'Deleted Todo' })
    } catch (err) {
        res.send('Error')
    }
})

// Doing Routes

router.post('/doing', async (req, res) => {
    const todo = new Doing({
        text: req.body.text,
        date: req.body.date,
        completed: false
    })

    try {
        const todo1 = await todo.save()
        res.json(todo1)
    } catch (err) {
        res.send('Error')
        console.log(err);
    }
})

router.get('/doing', async (req, res) => {
    try {
        const todos = await Doing.find()
        res.json(todos)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/doing/:id', async (req, res) => {
    try {
        const todo = await Doing.findById(req.params.id)
        res.json(todo)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/doing/:id', async (req, res) => {
    const todo = await Doing.findById(req.params.id)
    todo.completed = req.body.completed
    try {
        const todo1 = await todo.save()
        res.json(todo1)
    } catch (err) {
        res.send('Error')
        console.log(err);
    }
})

router.put('/doing/:id', async (req, res) => {
    try {
        await Doing.findOneAndUpdate({ _id: req.params.id }, { text: req.body.text })
        res.json({ message: 'Updated Todo' })
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/doing/:id', async (req, res) => {
    try {
        await Doing.deleteOne({ _id: req.params.id })
        res.json({ message: 'Deleted Todo' })
    } catch (err) {
        res.send('Error')
    }
})

// Done Routes

router.post('/done', async (req, res) => {
    const todo = new Done({
        text: req.body.text,
        date: req.body.date,
        completed: false
    })

    try {
        const todo1 = await todo.save()
        res.json(todo1)
    } catch (err) {
        res.send('Error')
        console.log(err);
    }
})

router.get('/done', async (req, res) => {
    try {
        const todos = await Done.find()
        res.json(todos)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/done/:id', async (req, res) => {
    try {
        const todo = await Done.findById(req.params.id)
        res.json(todo)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/done/:id', async (req, res) => {
    try {
        await Done.updateOne({ _id: req.params.id }, { completed: req.body.completed })
        res.json({ message: 'Updated Todo' })
    } catch (err) {
        res.send('Error')
    }
})

router.put('/done/:id', async (req, res) => {
    try {
        await Done.findOneAndUpdate({ _id: req.params.id }, { text: req.body.text })
        res.json({ message: 'Updated Todo' })
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/done/:id', async (req, res) => {
    try {
        await Done.deleteOne({ _id: req.params.id })
        res.json({ message: 'Deleted Todo' })
    } catch (err) {
        res.send('Error')
    }
})

module.exports = router