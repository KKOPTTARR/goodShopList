let mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/goodlist");

let db=mongoose.connection;

db.on('err',console.error.bind(console,'connection errror:'));
db.once("open",function(){
    console.log("we are connected!");
});

let goods = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true }
});

let Good=mongoose.model("goodshops",goods,"goodshop");//不加默认加s
module.exports=Good;
