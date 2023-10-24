
var doctorProduct = require("../Users/DoctorContrller");
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  var data = await doctorProduct.find();
  res.json(data);
});
//http:localhost:3000/doctor/addDoctor
router.post("/add", async function (req, res, next) {
    try {
      const { id,name,sdt,password } = req.body;
  
      const newProduct = {
        id,
        name,
        sdt,
        password
      };
      await doctorProduct.create(newProduct);
      res.json({ status: 1, message: "Thêm  thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  

  router.post("/editDoctor", async function (req, res, next) {
    try {
      const { idCate, name, sdt, password } = req.body;
  
      var item = await doctorProduct.findById(id);
      if (item) {
        item.idCate = idCate ? idCate : item.idCate;
        item.name = name ? name : item.name;
        item.sdt = sdt ? sdt : item.sdt;
        item.password = password ? password : item.password;
        await item.save();
        res.json({ status: 1, message: "Sửa thành công" });
      }
    } catch (err) {
      res.json({ status: 0, message: "Sửa thất bại" });
    }
  });
  router.get("/delete", async function (req, res, next) {
    try {
      var id = req.query.id;
      await doctorProduct.findByIdAndDelete(id);
      res.json({ status: 1, message: "Xóa sản phẩm thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Xóa sản phẩm thất bại", err: err });
    }
  });
  
  

module.exports = router;
