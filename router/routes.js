const express = require('express');
let router = express.Router();
const userModel = require("../models/model");
const { Mongoose } = require("mongoose");



//增加
router.post("/addGoods", (req, res) => {
    userModel.insertMany(req.body).then((data) => {
        res.send({ err: 0, msg: 'add ok', data: data
        })
    }).catch((err) => {
        res.send({ err: -1, msg: err._message, data: req.body[1]
        })
    })

});

//删除
/*router.post("/delGoods", (req, res) => {
    let id = req.body.id;
    userModel.remove({ "_id": id})
        .then((data) => {
            res.send({
                err: 0, msg: 'delete ok', data: null
            })
        })
        .catch((err) => {
            res.send({
                err: -1, msg: err._message, data: null
            })
        })
});*/

//delete
router.delete('/delGoods' +'/:id',(req,res) => {
    userModel.remove({"_id": req.params.id})
        .then((data) => {
        res.send({
            err: 0, msg: 'delete ok', data: null
        })
    }).catch((err) => {
        res.send({
            err: -1, msg: err._message, data: null
        })
    })
});


//查询信息
router.get("/getGoodsList", (req, res) => {
    userModel.find().then((data) => {
        res.send({
            err: 0, msg: 'getlist ok', data:data
        });
    }).catch((err) => {
        res.send({
            err: -1, msg: err._message, data: null
        })
    })
});


//根据id 查询一条数据
//http://127.0.0.1:3333/getGoodsById/xxxxxx
router.get('/getGoodsById/:id', (req, res) => {
    let id = req.params.id;//获取id
    console.log(userModel.findById(id))
    userModel.findById(id).then((data) => {
        res.send({
            err: 0, msg: 'select ok', data: data
        })
    }).catch((err) => {
        res.send({err: -1, msg: err._message, data: null
        })
    })
})


/*
//写法2
//http://127.0.0.1:3333/getGoodsById?id=xxxxxx
router.get('/getGoodsById', (req, res) => {
    let id = req.query.id;//获取id
    //console.log(id);
    userModel.findById(id).then((data) => {
        res.send({
            err: 0, msg: 'select by id ok', data: data
        })
    }).catch((err) => {
        res.send({
            err: -1, msg: err._message, data: null
        })
    })
});
*/


module.exports = router;

