var express = require('express');
var router = express.Router();
const thuocController = require('../thuoc/thuocControllers');
const benhanController = require('../compoment/benhanService');


// http://localhost:3000/cpanel/thuoc
// hiển thị danh sách sản phẩm
router.get("/", async (req, res, next) => {
    const benhans = await benhanController.getAllbenhan();
    res.render('benhan/list', { benhans });
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await benhanController.deletebenhanById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/thuoc/new
//Hiển thị form thêm mới sản phẩm
router.get('/add', async (req, res, next) => {
    try {
        return res.render('benhan/new');
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/cpanel/thuoc/newthuoc
//Xử lý thêm mới sản phẩm
router.post('/add', 
async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        let { body } = req;
        const { ten_benh_nhan, gioi_tinh,phongKham,ngay_nhap_vien,ngay_xuat_vien,benh_an,thuoc_da_ke_don,trang_thai,ngay_tao_benh_an } = body;
        const result = await benhanController.addNewbenhan(ten_benh_nhan, gioi_tinh, phongKham, ngay_nhap_vien, ngay_xuat_vien, benh_an, thuoc_da_ke_don, trang_thai, ngay_tao_benh_an);
        if (result) {
            return res.redirect('/cpanel/benhan/add');
        } else {
            return res.redirect('/cpanel/benhan/');
        }
    } catch (error) {
        next(error);
    }
});

//hiển thị trang thông tin chi tiết sản phẩm
// http://localhost:3000/cpanel/thuoc/:id/edit

router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const thuoc = await benhanController.getbenhanById(id);
        return res.render('thuoc/edithuoc', {thuoc});
    } catch (error) {
        next(error);
    }

});

router.post('/:id/edit', async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        // 192.168.1.105 ở nhà
    // 172.16.86.230 ở trường
        let { body } = req;
        let { id } = req.params;
        const { ten_benh_nhan,gioi_tinh,phongKham,ngay_nhap_vien,ngay_xuat_vien,benh_an,thuoc_da_ke_don,trang_thai,ngay_tao_benh_an  } = body;
        const result = await benhanController.updatethuocById(id, ten_benh_nhan,gioi_tinh,phongKham,ngay_nhap_vien,ngay_xuat_vien,benh_an,thuoc_da_ke_don,trang_thai,ngay_tao_benh_an );
        if (result) {
            return res.redirect('/cpanel/thuoc');
        } else {
            return res.redirect(`/cpanel/thuoc/${id}/edit`);
        }
    } catch (error) {
        next(error);
    }
});



module.exports = router;