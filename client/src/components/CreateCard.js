import React, { useState } from "react";

// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createCard } from "../api/cardApi";

export default function CreateCard() {
  const navigate = useNavigate();
  const [updateCard, setUpdateCard] = useState({
    title: "",
    task: "",
    time: "",
    favorite: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(updateCard);

    setUpdateCard({
      title: "",
      task: "",
      time: "",
    });
    navigate("/");
  };

  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit}>
        <h1>Create Card Page</h1>
        <div>
          <label htmlFor="title">Task Title</label>
          <input
            required
            type="text"
            name="title"
            value={updateCard.title}
            onChange={(e) =>
              setUpdateCard({ ...updateCard, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="task">Task</label>
          <input
            required
            type="text"
            name="task"
            value={updateCard.task}
            onChange={(e) =>
              setUpdateCard({ ...updateCard, task: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="time">Task Time</label>
          <input
            required
            type="number"
            name="time"
            value={updateCard.time}
            onChange={(e) =>
              setUpdateCard({ ...updateCard, time: e.target.value })
            }
          />
        </div>

        <button className="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
