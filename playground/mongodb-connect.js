const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne( {
        text: 'Something todo',
        completed: true
    }, (err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    // db.collection('Users').insertOne( {
    //     name: 'Fehmi',
    //     age: 40,
    //     location: 'TR'
    // }, (err, result) => {
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    client.close();
});