const express = require('express')
const router = express.Router();
const posts = require ('../data/posts')
const postController = require('../controllers/postController')

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', function (req, res) {
    res.send('Hai creato un nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.send(`hai richiesto di modificare completamente il post con id: ${req.params.id}`);
});
// modify
router.patch('/:id', function (req, res) {
    res.send(`Hai richiesto di modificare parzialmente il post con id: ${req.params.id}`);
});
// destroy
router.delete('/:id', postController.destroy);




module.exports = router;