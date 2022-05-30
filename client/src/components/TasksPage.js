import React, { useEffect, useState } from "react";
import CardList from "./cardList";
import axios from "axios";
import Nav from "./Nav";
const TaskPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((data) => setCardData(data.data.cards));
  }, []);

  return (
    <>
      <Nav />
      <CardList cardData={cardData} />
    </>
  );
};

export default TaskPage;
