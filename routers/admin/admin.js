const express = require('express');
const router = express.Router();
const adminController = require('../../controller/admin/admin');

router.post('/adminregister', adminController.AdminRegister);

router.post('/admin', adminController.AdminLogin);

module.exports = router;