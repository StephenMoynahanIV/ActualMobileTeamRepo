import React from "react";
import { Outlet } from "react-router-dom";

function People() {
  return (
    <div className="people">
      <div class="container">
        <h1 className="text-center mt-5">People</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default People;
