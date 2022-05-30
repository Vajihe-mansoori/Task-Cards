import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="navbar">
        <button style={{ color: "black" }}>Add Task</button>
        <Link to={"/create-card"}>
          <Button variant="outline-light">Light</Button>{" "}
        </Link>{" "}
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <hr style={{ color: "white" }} />
    </>
  );
}
