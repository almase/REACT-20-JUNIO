const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);
router.route('/pepito')
    .get((req,res)=>res.send('hola'));
    


router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

module.exports = router;


