const express = require("express");
const router = express.Router();
const empleadocontrol = require("../controller/empleado.controller");



router.get("/",empleadocontrol.getEmpleado);
router.post("/" , empleadocontrol.createEmpleado);
router.get("/:id" , empleadocontrol.getUniqueEmpleado);
router.put("/:id " ,  empleadocontrol.editEmpleado);
router.delete("/:id" , empleadocontrol.deleteEmpleado);

module.exports = router;
