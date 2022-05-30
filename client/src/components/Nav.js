import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="navbar">
        <Link to={"/create-card"}>
          <button className="btnAdd" variant="outline-light">
            Create Task
          </button>
        </Link>{" "}
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <hr style={{ color: "cyan" }} />
    </>
  );
}
