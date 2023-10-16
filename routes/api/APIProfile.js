var modelProduct = require("../api/APiuser");
var express = require("express");
var router = express.Router();

//http://localhost:3000/APIProfile/add
router.post("/add", async function (req, res, next) {
    try {
      const { name, email, password, sdt, hoat_dong } = req.body;
  
      const newProduct = {
        name,
        email,
        password,
        sdt,
        hoat_dong
      };
      await modelProduct.create(newProduct);
      res.json({ status: 1, message: "Thêm thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  

module.exports = router;
