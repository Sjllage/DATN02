const express = require('express');
const router = express.Router();
const lichkhamControllers = require('../lichkham/lichkhamControllers');

// http://localhost:3000/api/APIlichkham/get-all
// api get all lichkhams
router.get('/get-all', async(req, res,next) => {
    try{
        const lichkhams = await lichkhamControllers.getAlllichkhams();
        return res.status(200).json({result: true, lichkham: lichkhams});
    }catch(error){
        console.log("Get all error: " , error);
        return res.status(500).json({result: false, lichkham: null});
    }
});

// http://localhost:3000/api/APIlichkham/get-by-id
// api get by id
router.get('/get-by-id', async (req,res,next) => {
    try{
        const {id} = req.query;
        const lichkham = await lichkhamControllers.getlichkhamById(id);
        return res.status(200).json({result: true, lichkham: lichkham});
    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, lichkham: null});
    }

});

// http://localhost:3000/api/lichkham/search-by-name?name=
// api search by name
router.get('/search-by-name', async (req,res,next) => {
    try{
        const {name} = req.query;
        const lichkhams = await lichkhamControllers.searchedlichkhamByName(name);
        return res.status(200).json({result: true, lichkham: lichkhams});
    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, lichkhams: null});
    }
});

// http://localhost:3000/api/Doctor/new
router.post('/new-lich', async (req, res, next) => {
    try{
        const {ngay, tg_kham, name} = req.body;
        const lichkhams = await lichkhamControllers.addNewlichkham(ngay, tg_kham, name);
        return res.status(200).json({result: true, lichkham: lichkhams});
    }catch(error){
        console.log("New Doctor error: ", error);
        return res.status(500).json({result: false, lichkham: null});
    }
});     
// http://localhost:3000/product/1/delete
router.post("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await lichkhamControllers.deletelichkhamById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

module.exports = router; 