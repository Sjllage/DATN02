var express = require('express');
var router = express.Router();
const userController = require('../Users/UserController')

// http://localhost:3000/cpanel/user
// hiển thị danh sách sản phẩm
router.get("/", async (req, res, next) => {
    const users = await userController.getAllusers();
    res.render('users/listuser', { users });
});


module.exports = router;