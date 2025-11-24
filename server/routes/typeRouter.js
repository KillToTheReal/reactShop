const typeController = require("../controllers/typeController");
const checkRoleMw = require("../middleware/checkRoleMiddleware");
const Router = require("express");
const router = new Router();

router.post("/", checkRoleMw("ADMIN"), typeController.create);
router.get("/", typeController.getAll);
router.delete("/", checkRoleMw("ADMIN"), typeController.delete);

module.exports = router;
