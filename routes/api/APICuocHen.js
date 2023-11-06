var modelCuocHen = require("../Users/CuocHenForUser");
var express = require("express");
var router = express.Router();
var cuochen= require("../compoment/cuochenService");
const vaitroController = require('../vaitro/VaitroControllers');

router.get("/list", async (req, res, next) => {
  const cuochens = await cuochen.getAllcuochen();
  res.render('cuochen/list', { cuochens });
});

router.get('/add', async (req, res, next) => {
  try {
    const vaitros = await vaitroController.getVaitros();
      const cuochens = await cuochen.getcuochenById();
      return res.render('cuochen/new', { cuochens, vaitros });
  } catch (error) {
      next(error);
  }
});




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
      return res.redirect('/cuochen/list');
    } catch (err) {
      return res.redirect('/cuochen/new');
      next(err);
    }
  });
  

module.exports = router;