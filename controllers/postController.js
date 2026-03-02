const posts = require('../data/posts')

//creo una funzione di index che restituisce tutti i post, se è presente una query tag restituisce solo i post che contengono quel tag
function index(req, res) {

    let results = posts;

    if (req.query.tags) {

        results = posts.filter(post => post.tags.includes(req.query.tags))
    }
    res.json(results);
}

//creo una funzione di showche restituisce un post in base all'id, se l'id non è un numero restituisce un errore 400, se l'id non esiste restituisce un errore 404
function show(req, res) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'User error', message: 'L\'ID deve essere un numero' })
    }
    const result = posts.find(post => post.id == id);
    if (!result) {
        return res.status(404).json({ error: 'Not found', message: `Post con id ${id} non trovato` })
    }
    return res.json(result)
}

//creo una funzione di destroy che elimina un post in base all'id, se l'id non è un numero restituisce un errore 400, se l'id non esiste restituisce un errore 404
function destroy(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "User error", message: "L'ID deve essere un numero" });
    }

    const result = posts.find(post => post.id == id);

    if (!result) {
        return res.status(404).json({ error: "Not found", message: `Post con id ${id} non trovato` });
    }
    const index = posts.indexOf(result);
    posts.splice(index, 1);
    console.log(`Post con id ${id} eliminato`);
    console.log(posts);
    return res.status(204).json();
}

// creo una funzione di store che crea un nuovo post, se il post viene creato con successo restituisce un messaggio di successo e il post creato e lo aggiunge all'array dei post
function store(req, res) {

    const newPost = {
        id: posts[posts.length - 1].id + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    posts.push(newPost);
    return res.status(201).json(newPost);
}
// update
function update(req, res) {
    res.send(`hai richiesto di modificare completamente il post con id: ${req.params.id}`);
};
// modify
function modify(req, res) {
    res.send(`Hai richiesto di modificare parzialmente il post con id: ${req.params.id}`);
};

const crudController = {
    index,
    show,
    destroy,
    store,
    update,
    modify
}
module.exports = crudController