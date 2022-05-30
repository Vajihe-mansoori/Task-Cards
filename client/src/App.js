import React from "react";
import { Routes, Route } from "react-router-dom";
import ManageCard from "./components/ManageCards";
import CreateCard from "./components/CreateCard";
import TaskPage from "./components/TasksPage";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>

      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/card/:_id" element={<ManageCard />} />
        <Route path="/create-card" element={<CreateCard />} />
      </Routes>
    </>
  );
}

export default App;
