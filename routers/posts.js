const express = require('express')
const router = express.Router();
const posts = require ('../data/posts')

// index
router.get('/', (req, res) => {
    res.send('Hai richiesto tutti i posts');
    res.json(posts);
})

// show
router.get('/:id', function (req, res) {
    res.send(`Hai richiesto di visualizzare il post con id: ${req.params.id}`);
});
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
router.delete('/:id', function (req, res) {
    res.send(`Hai richiesto l'eliminazione del post con id: ${req.params.id}`);
});




module.exports = router;