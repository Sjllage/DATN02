var express = require('express');
var router = express.Router();
const vaitroController = require('../vaitro/VaitroControllers');
const cuochenService = require('../compoment/cuochenService');



// http://localhost:3000/cpanel/thuoc
// hiển thị danh sách sản phẩm
router.get("/", async (req, res, next) => {
    const cuochens = await cuochenService.getAllcuochen();
    res.render('cuochen/list', { cuochens });
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await cuochenService.deletecuochenById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/thuoc/new
//Hiển thị form thêm mới sản phẩm
router.get('/add', async (req, res, next) => {
    try {
        const vaitros = await vaitroController.getVaitros();
        return res.render('cuochen/new',{ vaitros });
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
            const { idKhoa, ngay, TimeStart, TimeEnd} = body;
            const result = await cuochenService.addNewcuochen(idKhoa, ngay, TimeStart, TimeEnd);
            if (result) {
                return res.redirect('/cpanel/cuochen/new');
            } else {
                return res.redirect('/cpanel/cuochen/');
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
        const cuochens = await cuochenService.getcuochenById(id);
        let vaitro = await vaitroController.getVaitros();
        vaitro = vaitro.map(item => {
            item.selected = false;
            if (item._id.toString()) {
                item.selected = true;
            }return item;
        });
        return res.render('cuochen/edit', { cuochens , vaitro });
    } catch (error) {
        next(error);
    }

});

router.post('/:id/edit', async (req, res, next) => {
    try {
        let { body } = req;
        let { id } = req.params;
        const { idKhoa, ngay, TimeStart, TimeEnd } = body;
        const result = await cuochenService.updatecuochenById(id, idKhoa, ngay, TimeStart, TimeEnd);
        if (result) {
            return res.redirect('/cpanel/cuochen/');
        } else {
            return res.redirect(`/cpanel/cuochen/${id}/edit`);
        }
    } catch (error) {
        next(error);
    }
});



module.exports = router;