import React from "react";
import { NavLink } from "react-router-dom";

function Tabs(props) {
  return (
    <nav className="tabs">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/user/id">User</NavLink>
      <NavLink to="/ticket/1">Ticket</NavLink>
    </nav>
  );
}

export default Tabs;