
var DonThuocProduct = require("../thuoc/themDonThuoc");
var express = require("express");
var router = express.Router();
const donthuoc = require('../compoment/donthuocService');
const thuoc = require('../thuoc/thuocControllers');


router.get("/", async function (req, res, next) {
  var data = await DonThuocProduct.find();
  res.json(data);
});

router.get("/list", async (req, res, next) => {
  const donthuocs = await donthuoc.getAlldonthuocs();
  res.render('donthuoc/list', { donthuocs });
});

router.get('/add', async (req, res, next) => {
  try {
    const thuocs = await thuoc.getthuocById();
      return res.render('donthuoc/new', { thuocs });
  } catch (error) {
      next(error);
  }
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
      return res.redirect('/donthuoc/list');
    } catch (err) {
      return res.redirect('/donthuoc/new');
    }
  });


  module.exports = router;