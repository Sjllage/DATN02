const express = require('express');
const router = express.Router();
const thuocController = require('../thuoc/thuocControllers');
//const {checkTokenApp} = require('../../middle/Authen');
const uploadFile = require('../../middle/UploadFile');


// http://localhost:3000/api/thuoc/get-all
// api get all thuocs
router.get('/get-all', [], async(req, res,next) => {
    try{
        const thuocs = await thuocController.getAllthuocs();
        return res.status(200).json({result: true, thuoc: thuocs});
    }catch(error){
        console.log("Get all error: " , error);
        return res.status(500).json({result: false, thuoc: null});
    }
});

// http://localhost:3000/api/thuoc/get-by-id
// api get by id
router.get('/get-by-id', async (req,res,next) => {
    try{
        const {id} = req.query;
        const thuoc = await thuocController.getthuocById(id);
        return res.status(200).json({result: true, thuoc: thuoc});

    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, thuoc: null});
    }

});

// http://localhost:3000/api/thuoc/search-by-name?name=
// api search by name
router.get('/search-by-name', async (req,res,next) => {
    try{
        const {name} = req.query;
        const thuocs = await thuocController.searchedthuocByName(name);
        return res.status(200).json({result: true, thuoc: thuocs});
    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, thuocs: null});
    }
});

// http://localhost:3000/api/thuoc/new
router.post('/new',// [checkTokenApp, uploadFile.single('image')],
 async (req, res, next) => {
    // 192.168.1.105 ở nhà
    // 172.16.86.230 ở trường
    try{
        let {file,body} = req;
        if(file) {
            file = `http://172.16.86.230:3000/img/${file.filename}`;
            body = {...body, image: file};
        }
        const {name, price, quantity} = body;
        await thuocController.addNewthuoc(name ,price ,quantity);
        return res.status(200).json({result: true, thuoc: null});
    }catch(error){
        console.log("New thuoc error: ", error);
        return res.status(500).json({result: false, thuoc: null});
    }
});

// api upload ảnh sản phẩm 
// http://localhost:3000/api/thuoc/upload-image
router.post('/upload-image', [uploadFile.single('image')], (req, res, next) => {
    try{
        const {file} = req;
        if(file){
            const url = `http://192.168.1.105:3000/img/${file.filename}`
            return res.status(200).json({result: true, url: url});
        }
        return res.status(400).json({result: true, url: null});
     }catch(error){
        console.log("Upload image error: ", error);
        return res.status(500).json({result: false});
    }
});

// api upload nhiều ảnh 
// http://localhost:3000/api/thuoc/upload-images
router.post('/upload-images', [uploadFile.array('image')], (req, res, next) => {
    try{
        const {files} = req;
        if(files && files.length > 0){
            const urls = [];
            for(let i = 0; i < files.length; i++){
                const url = `http://192.168.1.105:3000/img/${files[i].filename}`
                urls.push(url);
            }
            return res.status(200).json({result: true, urls: urls});
        }
        return res.status(400).json({result: true, urls: null});
    }catch(error){
        console.log("Upload image error: ", error);
        return res.status(500).json({result: false});
    }
});

// http://localhost:3000/thuoc/1/delete
router.post("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await thuocController.deletethuocById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }

});
module.exports = router; 