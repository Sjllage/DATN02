var express = require('express');
var router = express.Router();
const thuocController = require('../thuoc/thuocControllers')
//const categoryController = require('../../category/CategoryControllers');
const uploadFile = require('../../middle/UploadFile');
// const {checkTokenCpanel} = require('../../middle/Authen');

// http://localhost:3000/cpanel/thuoc
// hiển thị danh sách sản phẩm
router.get("/", async (req, res, next) => {
    const thuocs = await thuocController.getAllthuocs();
    res.render('thuoc/listhuoc', { thuocs });
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;
        await thuocController.deletethuocById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/thuoc/new
//Hiển thị form thêm mới sản phẩm
router.get('/new', async (req, res, next) => {
    try {
        //const categories = await categoryController.getCategories();
        return res.render('thuoc/newthuoc');
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/cpanel/thuoc/newthuoc
//Xử lý thêm mới sản phẩm
router.post('/new', [ uploadFile.single('image'),], 
async (req, res, next) => {
    try {
        // cmd => ipconfig => ipv4
        let { body, file } = req;
        if (file) {
            file = `http://192.168.1.5:3000/img/thuoc/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, price, quantity, image} = body;
        const result = await thuocController.addNewthuoc(name, price, quantity, image);
        if (result) {
            return res.redirect('/cpanel/thuoc/new');
        } else {
            return res.redirect('/cpanel/thuoc');
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
        const thuoc = await thuocController.getthuocById(id);
        // let categories = await categoryController.getCategories();
        // categories = categories.map(item => {
            // item.selected = false;
            // if (item._id.toString() == thuoc.category.toString()) {
            //    item.selected = true;
            //}return item;
        //});
        return res.render('thuoc/edithuoc', {thuoc});
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
            file = `http://192.168.1.5:3000/img/thuoc/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, price, quantity, image } = body;
        const result = await thuocController.updatethuocById(id, name, price, quantity, image);
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