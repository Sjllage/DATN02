var express = require('express');
var router = express.Router();
const lichkhamController = require('../lichkham/lichkhamControllers')
const doctorController = require('../doctor/DoctorControllers')
const vaitroController = require('../vaitro/VaitroControllers')

router.get("/", async (req, res, next) => {
    const lichkhams = await lichkhamController.getAlllichkhams();
    res.render('lichkham/listlichkham', { lichkhams });
});

router.get("/doctor", async (req, res, next) => {
    const lichkhams = await lichkhamController.getAlllichkhams();
    res.render('lichkham/listdoctor', { lichkhams });
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await lichkhamController.deletelichkhamById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/lichkham/new
//Hiển thị form thêm mới sản phẩm
router.get('/new', async (req, res, next) => {
    try {
        const doctors = await doctorController.getdoctors();
        return res.render('lichkham/newlichkham', { doctors });
    } catch (error) {
        next(error);
    } 
});

// http://localhost:3000/cpanel/lichkham/new
//Xử lý thêm mới sản phẩm
router.post('/new-lich',
async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        let { body } = req;
        const { ngay, tgkham, doctor} = body;
        const result = await lichkhamController.addNewlichkham(ngay, tgkham, doctor);
        if (result) {
            return res.redirect('/cpanel/lichkham/new');
        } else {
            return res.redirect('/cpanel/lichkham/');
        }
    } catch (error) {
        next(error);
    }
});

//hiển thị trang thông tin chi tiết sản phẩm
// http://localhost:3000/cpanel/lichkham/:id/edit
router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const lichkhams = await lichkhamController.getlichkhamById(id);
        let doctor = await doctorController.getdoctors();
        doctor = doctor.map(item => {
            item.selected = false;
            if (item._id.toString() == lichkhams.doctor.toString()) {
                item.selected = true;
            }return item;
        });
        return res.render('lichkham/editlichkham', {lichkhams , doctor});
    } catch (error) {
        next(error);
    }

});

router.post('/:id/edit', async (req, res, next) => {
    try {
        let { body } = req;
        let { id } = req.params;
        const { ngay, tgkham, doctor } = body;
        const result = await lichkhamController.updatelichkhamById(id, ngay, tgkham, doctor );
        if (result) {
            return res.redirect(`/cpanel/lichkham/`);
        } else {
            return res.redirect(`/cpanel/lichkham/${id}/edit`);
        }
    } catch (error) {
        next(error);
    }
});


module.exports = router;