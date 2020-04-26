const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
        .then((dish) => {
            console.log("\nsaving dish\n");
            console.log(dish);
            return Dishes.find({});
        })
        .then((dishes) => {
            console.log("removing dishes");
            console.log(dishes);
            return Dishes.remove({});
        })
        .then(() => {
            console.log("closing connection");
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log("Error message");
            console.log(err);
        });

});
