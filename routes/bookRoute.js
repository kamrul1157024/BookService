const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/book')
const router = express.Router();




router.get('/', async (req, res) => {

    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (err) {
        res.json({ msg: err });
    }

})

router.get('/:bookName', async (req, res) => {

    const { bookName } = req.params;
    try {
        const book = await Book.find({ name: bookName });
        res.json(book);
    }
    catch (err) {
        res.json({ msg: err });
    }

})

router.post('/', async (req, res) => {
    const { bookName, author, genere } = req.body;
    try {
        const book = new Book({
            _id: mongoose.Types.ObjectId(),
            name: bookName,
            author: author,
            genere: genere
        });

        console.log(book);

        const book_from_db = await book.save();
        res.json(book_from_db);
    }
    catch (err) {
        res.status(400).json({ msg: err });
    }

})

router.patch('/:id', async (req, res) => {

    try {
        const {id}= req.params;
        const updateBook = await Book.update(
            { _id: id },
            { $set: { ...req.body } },
        )
        res.json(updateBook);
    }
    catch (err) {
        res.json({ msg: err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id}= req.params;
        const deletedBook = await Book.deleteOne({ _id: id });
        res.json(deletedBook);
    }
    catch (err) {
        res.json({ msg: err });
    }
})

module.exports = router;