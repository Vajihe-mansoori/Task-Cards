const Card = require("../model/cards");

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});

    res.status(200).json({ cards });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getCard = async (req, res) => {
  try {
    const { id: cardID } = req.params;
    const card = await Card.findOne({ _id: cardID });

    res.status(200).json({ card });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = req.body;

    const card = await Card.create(newCard);
    res.status(200).json({ card });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateCard = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const card = req.body;
    const updateCard = await Card.findByIdAndUpdate(
      _id,
      { ...card, _id },
      { new: true }
    );
    res.status(200).json({ updateCard });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { id: cardID } = req.params;
    const card = await Card.findOneAndDelete({ _id: cardID });

    res.status(200).json({ card });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};
