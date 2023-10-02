import React from "react";
import { Link } from "react-router-dom";

//This Component Contains the UI of NavigationBar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Task Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          /*It's a button to Add a New Task*/
          <Link className="btn btn-outline-light" to="/addtask">
            Add Task
          </Link>
        </div>
      </nav>
    </div>
  );
}
