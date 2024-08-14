const express = require("express");
const validateData = require("../middleware/dataMiddleware")
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/" , dataController.getData);
router.get("/data/:id" , dataController.getDataById);
router.post("/data" , validateData , dataController.postData)
router.patch("/data/:id" , dataController.updateData)
router.delete("/data/:id" , dataController.deleteData)

module.exports = router