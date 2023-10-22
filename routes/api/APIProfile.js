var userProduct = require("../Users/UserProfile");
var express = require("express");
var router = express.Router();

//http://localhost:3000/profileUser/add
router.get("/", async function (req, res, next) {
    var data = await doctorProduct.find();
    res.json(data);
  });
router.post("/add", async function (req, res, next) {
    try {
      const { ho_ten, ten_tk, mat_khau, sdt,hoat_dong } = req.body;
  
      const newProduct = {
        ho_ten,
        ten_tk,
        mat_khau,
        // email,
        sdt,
        hoat_dong
      };
      await userProduct.create(newProduct);
      res.json({ status: 1, message: "Thêm thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  

module.exports = router;
