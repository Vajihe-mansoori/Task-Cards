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
                  <div className="detailCard">
                    <img src="../task.png" alt="task" />
                    <h3>{title}</h3>
                    <p>{task}</p>
                    <p>{time}</p>
                  </div>
                  <div className="btnBox">
                    <Link to={`/card/${_id}`} state={card}>
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </Link>

                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handleDelete(_id)}
                    ></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
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
