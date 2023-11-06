var modelCuocHen = require("../Users/CuocHenForUser");
var express = require("express");
var router = express.Router();

//http://localhost:3000dd
router.post("/addAppointment", async function (req, res, next) {
    try {
      const { id,idKhoa, ngay, TimeStart,TimeEnd } = req.body;
  
      const newProduct = {
        id,
        idKhoa,
        ngay,
        TimeStart,
        TimeEnd

      };
      await modelCuocHen.create(newProduct);
      res.json({ status: 1, message: "Đặt cuộc hẹn thành công" });
    } catch (err) {
      res.json({ status: 0, message: "Thêm thất bại" });
    }
  });
  

module.exports = router;