import React from "react";
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
              <div key={_id} className="maincontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img src="../task.png" alt="task" />
                    <h3>{title}</h3>
                    <p>{task}</p>
                    <p>{time}</p>
                  </div>
                  <div className="theback">
                    <Link to={`/card/${_id}`} state={card}>
                      Edit Task
                    </Link>
                    <button
                      className="btnSubmit"
                      variant="danger"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardList;
