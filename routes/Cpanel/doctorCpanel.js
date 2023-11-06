var express = require('express');
var router = express.Router();
const doctorController = require('../doctor/DoctorControllers')
const vaitroController = require('../vaitro/VaitroControllers');
const uploadFile = require('../../middle/UploadFile');

// http://localhost:3000/cpanel/doctor
// hiển thị danh sách sản phẩm
router.get("/", async (req, res, next) => {
    const doctors = await doctorController.getAllDoctors();
    res.render('doctor/listdoctor', { doctors });
});

/** 
router.get("/lichkham", async (req, res, next) => {
    res.render('lichkham/listlichkham');
});
*/
router.get("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await doctorController.deleteDoctorById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/doctor/new
//Hiển thị form thêm mới sản phẩm
router.get('/new', async (req, res, next) => {
    try {
        const vaitros = await vaitroController.getVaitros();
        return res.render('doctor/newdoctor', { vaitros });
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/cpanel/doctor/newdoctor
//Xử lý thêm mới sản phẩm
router.post('/new', [ uploadFile.single('image'),], 
async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        let { body, file } = req;
        if (file) {
            file = `http://192.168.1.5:3000/img/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, email, sdt, password, mota, image, vaitro} = body;
        const result = await doctorController.addNewDoctor(name, email, sdt, password, mota, image, vaitro);
        if (result) {
            return res.redirect('/cpanel/doctor/new');
        } else {
            return res.redirect('/cpanel/doctor');
        }
    } catch (error) {
        next(error);
    }
});

//hiển thị trang thông tin chi tiết sản phẩm
// http://localhost:3000/cpanel/doctor/:id/edit

router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const doctor = await doctorController.getDoctorById(id);
        let vaitros = await vaitroController.getVaitros();
        vaitros = vaitros.map(item => {
            item.selected = false;
            if (item._id.toString() == doctor.vaitro.toString()) {
                item.selected = true;
            }return item;
        });
        return res.render('doctor/editdoctor', {doctor , vaitros});
    } catch (error) {
        next(error);
    }

});

router.post('/:id/edit', [ uploadFile.single('image'),], async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        // 192.168.1.105 ở nhà
    // 172.16.86.230 ở trường
        let { body, file } = req;
        let {id} = req.params;
        if (file) {
            file = `http://192.168.1.5:3000/img/doctor/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, email, sdt, password, mota, image, vaitro } = body;
        const result = await doctorController.updateDoctorById(id, name, email, sdt, password, mota, image, vaitro );
        if (result) {
            return res.redirect('/cpanel/doctor');
        } else {
            return res.redirect(`/cpanel/doctor/${id}/editdoctor`);
        }
    } catch (error) {
        next(error);
    }
});



module.exports = router;