import axios from "axios";

const baseUrl = "http://localhost:5000/cards";

export const deleteCard = (id) => {
  try {
    axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateCard = (id, card) => {
  try {
    axios.patch(`${baseUrl}/${id}`, card);
  } catch (error) {
    console.log(error);
  }
};

export const createCard = (card) => {
  try {
    axios.post(baseUrl, card);
  } catch (error) {
    console.log(error);
  }
};
