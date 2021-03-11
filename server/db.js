const nedb = require('nedb');
const express = require('express');
const rest = require('express-nedb-rest');
const cors = require('cors');
// const PORT = process.env.PORT || 3000
const app = express();

var datastore = new nedb({
    filename: 'todo.db',
     autoload: true
    });

const restAPI = rest();
restAPI.addDatastore('todos', datastore);
restAPI.get('/todos');
restAPI.delete('/todos/:id');

app.use(cors());
app.use('/', restAPI);

app.listen(3000, () => {
    console.log('listen na porta 3000')
});

// app.listen(PORT, () => {
//     console.log(`Rodando na porta: ${PORT}`)
// })
// datastore.insert(newTodo, function(err){
//     if(err) return console.log(err, 'erro ao criar no DB');

//     return console.log('novo todo criado!!!')
// })