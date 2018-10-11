const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected');
    const db = client.db('TodoApp');
    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) =>{
        console.log(err);
    });
    client.close();
});