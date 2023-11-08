var express = require('express');
var router = express.Router();
const thuocController = require('../thuoc/thuocControllers')
const donthuoc = require('../compoment/donthuocService');


router.get("/list", async (req, res, next) => {
  const donthuocs = await donthuoc.getAlldonthuocs();
  res.render('donthuoc/list', { donthuocs });
});

router.get('/add', async (req, res, next) => {
  try {
    const thuocs = await donthuoc.getdonthuocById();
      return res.render('donthuoc/new', { thuocs });
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
        const { ten_don_thuoc, so_luong_thuoc, chi_tiet, ten_thuoc, tong_tien} = body;
        const result = await donthuoc.addNewdonthuoc(ten_don_thuoc, so_luong_thuoc, chi_tiet, ten_thuoc, tong_tien);
        if (result) {
            return res.redirect('/cpanel/donthuoc/new');
        } else {
            return res.redirect('/cpanel/donthuoc/list');
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
        const donthuocs = await donthuoc.getdonthuocById(id);
        return res.render('donthuoc/edit', {donthuocs});
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
        let {id} = req.params;
        const { ten_don_thuoc, so_luong_thuoc, chi_tiet, ten_thuoc, tong_tien } = body;
        const result = await donthuoc.updatedonthuocById(id, ten_don_thuoc, so_luong_thuoc, chi_tiet, ten_thuoc, tong_tien);
        if (result) {
            return res.redirect('/cpanel/donthuoc/list');
        } else {
            return res.redirect(`/cpanel/donthuoc/${id}/edit`);
        }
    } catch (error) {
        next(error);
    }
});



module.exports = router;