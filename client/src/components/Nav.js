import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="navbar">
        <Link to={"/create-card"}>
          <Button variant="outline-light">Create Task</Button>{" "}
        </Link>{" "}
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <hr style={{ color: "white" }} />
    </>
  );
}
