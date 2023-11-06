
var express = require("express");
var router = express.Router();
var benhAnProduct = require("../compoment/benhanService");
var BenhAnProduct = require("../Users/BenhAn");

router.get("/", async function (req, res, next) {
  var data = await benhAnProduct.find();
  res.json(data);
});

router.get("/list", async (req, res, next) => {
  const benhans = await benhAnProduct.getAllbenhan();
  res.render('benhan/list', { benhans });
});

router.get('/add', async (req, res, next) => {
  try {
      const benhans = await benhAnProduct.getbenhanById();
      return res.render('benhan/new', { benhans });
  } catch (error) {
      next(error);
  }
});

//http:localhost:3000/
router.post("/add", async function (req, res, next) {
    try {
      const { id,ten_benh_nhan,gioi_tinh,phongKham,ngay_nhap_vien,ngay_xuat_vien,benh_an,thuoc_da_ke_don,trang_thai,ngay_tao_benh_an } = req.body;
      const newProduct = {
        id,
        ten_benh_nhan,
        gioi_tinh,
        phongKham,
        ngay_nhap_vien,
        ngay_xuat_vien,
        benh_an,
        thuoc_da_ke_don,
        trang_thai,
        ngay_tao_benh_an
      };
      await BenhAnProduct.create(newProduct);
      //res.json({ status: 1, message: "Thêm  thành công" });
      return res.redirect('/benhan/list');
    } catch (err) {
      //res.json({ status: 0, message: "Thêm thất bại" });
      return res.redirect('/benhan/add');
    }
  });


  module.exports = router;