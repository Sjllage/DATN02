
var DonThuocProduct = require("../thuoc/themDonThuoc");
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  var data = await DonThuocProduct.find();
  res.json(data);
});
//http:localhost:3000/donthuoc/add
router.post("/add", async function (req, res, next) {
    try {
      const { id,ten_don_thuoc,so_luong_thuoc,chi_tiet,ten_thuoc,tong_tien,id_thuoc } = req.body;
  
      const newProduct = {
        id,
        ten_don_thuoc,
        so_luong_thuoc,
        chi_tiet,
        ten_thuoc,
        tong_tien,
        id_thuoc
      };
      await DonThuocProduct.create(newProduct);
      res.json({ status: 1, message: "Thêm  thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  module.exports = router;