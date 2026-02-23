# ESERCIZIO
- Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.

- All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

- Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

- Ad esempio: 
- Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
- Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…

- Registrare il router dentro app.js con il prefisso posts/.

# NOTE ⚠️ 

- Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.

# BONUS 🎁 
- Provare a restituire la lista dei post dalla rotta index, in formato json
- Provare a restituire un singolo post dalla rotta show, sempre in formato json

/***********************************/

# PARTE 2

# MILESTONE 1
- Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers 

- All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

- Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

- Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 

- Se tutto funziona, passiamo alla prossima milestone

# MILESTONE 2
- Per iniziare, creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller. 

- Ora passiamo ad implementare le logiche delle nostre CRUD:

- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

# BONUS
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
