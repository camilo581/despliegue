const express = require("express");
const router = express.Router();
const usuarioCtrol = require("../controller/usuario.controller");


router.get("/", usuarioCtrol.getUser);
router.post("/" , usuarioCtrol.createUser);
router.get("/:id" , usuarioCtrol.getUniqueUser);
router.put("/:id" ,  usuarioCtrol.editUser);
router.delete("/:id" , usuarioCtrol.deleteUser);

module.exports = router;



