const { Router } = require("express");
const {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controller/card");
const router = Router();

router.get("/", getAllCards);
router.get("/:id", getCard);
router.post("/", createCard);
router.patch("/:id", updateCard);
router.delete("/:id", deleteCard);

module.exports = router;
