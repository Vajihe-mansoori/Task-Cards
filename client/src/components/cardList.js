import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCard } from "../api/cardApi";

const CardList = ({ cardData }) => {
  // const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteCard(id);
  };

  return (
    <>
      <div className="container">
        {cardData &&
          cardData.map((card) => {
            const { title, task, time, _id } = card;
            return (
              <div key={_id}>
                <h3>{title}</h3>
                <p>{task}</p>
                <p>{time}</p>
                <Link to={`/card/${_id}`} state={card}>
                  Edit Task
                </Link>
                <Button variant="danger" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardList;
