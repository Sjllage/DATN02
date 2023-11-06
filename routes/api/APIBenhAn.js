
var BenhAnProduct = require("../model/benhAn");
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  var data = await BenhAnProduct.find();
  res.json(data);
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
      res.json({ status: 1, message: "Thêm  thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  module.exports = router;