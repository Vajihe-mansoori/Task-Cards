import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCard } from "../api/cardApi";

export default function ManageCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, task, time, _id } = location.state;
  const [updatedCard, setUpdatedCard] = useState({
    title,
    task,
    time,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCard(_id, updatedCard);
    setUpdatedCard({
      title: "",
      task: "",
      time: "",
    });
    navigate("/");
  };

  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit}>
        <h1>Edit Task</h1>
        <div>
          <label htmlFor="title">Card Title</label>
          <input
            type="text"
            name="title"
            value={updatedCard.title}
            onChange={(e) =>
              setUpdatedCard({ ...updatedCard, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            value={updatedCard.task}
            onChange={(e) =>
              setUpdatedCard({ ...updatedCard, task: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="time">Task Time</label>
          <input
            type="text"
            name="time"
            value={updatedCard.time}
            onChange={(e) =>
              setUpdatedCard({ ...updatedCard, time: e.target.value })
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
