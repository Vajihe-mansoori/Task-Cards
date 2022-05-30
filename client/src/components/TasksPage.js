import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardList from "./cardList";
import axios from "axios";
import Nav from "./Nav";
const TaskPage = () => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((data) => setCardData(data.data.cards));
  }, []);

  return (
    <>
      <Nav />
      <Button onClick={() => navigate("/create-card")}>Create Task</Button>
      <CardList cardData={cardData} />
    </>
  );
};

export default TaskPage;
