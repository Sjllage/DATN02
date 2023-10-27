const express = require('express');
const router = express.Router();
const doctorControllers = require('../doctor/DoctorControllers');
//const {checkTokenApp} = require('../../middle/Authen');
const uploadFile = require('../../middle/UploadFile');


// http://localhost:3000/api/APIDoctor/get-all
// api get all Doctors
router.get('/get-all', async(req, res,next) => {
    try{
        const Doctors = await doctorControllers.getAllDoctors();
        return res.status(200).json({result: true, Doctor: Doctors});
    }catch(error){
        console.log("Get all error: " , error);
        return res.status(500).json({result: false, Doctor: null});
    }
});

// http://localhost:3000/api/APIDoctor/get-by-id
// api get by id
router.get('/get-by-id', async (req,res,next) => {
    try{
        const {id} = req.query;
        const Doctor = await doctorControllers.getDoctorById(id);
        return res.status(200).json({result: true, Doctor: Doctor});

    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, Doctor: null});
    }

});

// http://localhost:3000/api/Doctor/search-by-name?name=
// api search by name
router.get('/search-by-name', async (req,res,next) => {
    try{
        const {name} = req.query;
        const Doctors = await doctorControllers.searchedDoctorByName(name);
        return res.status(200).json({result: true, Doctor: Doctors});
    }catch(error){
        console.log("Get by id error: ", error);
        return res.status(500).json({result: false, Doctors: null});
    }
});

// http://localhost:3000/api/Doctor/new
router.post('/new', [uploadFile.single('image')], async (req, res, next) => {
    // 192.168.1.5 ở nhà
    // 172.16.86.230 ở trường
    try{
        let {file,body} = req;
        if(file) {
            file = `http://192.168.1.5:3000/img/thuoc/${file.filename}`;
            body = {...body, image: file};
        }
        const {name, email, sdt, password, mota} = body;
        await doctorControllers.addNewDoctor(name, email, sdt, password, mota);
        return res.status(200).json({result: true, Doctor: null});
    }catch(error){
        console.log("New Doctor error: ", error);
        return res.status(500).json({result: false, Doctor: null});
    }
});

// api upload ảnh sản phẩm 
// http://localhost:3000/api/doctor/upload-image-doctor
router.post('/upload-image-doctor', [uploadFile.single('image')], (req, res, next) => {
    try{
        const {file} = req;
        if(file){
            const url = `http://192.168.1.5:3000/img/thuoc/${file.filename}`
            return res.status(200).json({result: true, url: url});
        }
        return res.status(400).json({result: true, url: null});
     }catch(error){
        console.log("Upload image error: ", error);
        return res.status(500).json({result: false});
    }
});

// api upload nhiều ảnh 
// http://localhost:3000/api/Doctor/upload-images
router.post('/upload-images-doctor', [uploadFile.array('image')], (req, res, next) => {
    try{
        const {files} = req;
        if(files && files.length > 0){
            const urls = [];
            for(let i = 0; i < files.length; i++){
                const url = `http://192.168.1.5:3000/img/thuoc/${files[i].filename}`
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

// http://localhost:3000/Doctor/1/delete
router.post("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await doctorControllers.deleteDoctorById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }

});
module.exports = router; 