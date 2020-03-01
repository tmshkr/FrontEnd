import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          {/* <Tabs /> */}
          <Switch>
            <Route path="/dashboard">
              <h2>Dashboard</h2>
              <ol className="ticket-feed">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path="/login">
              <h2>Login</h2>
            </Route>
            <Route path="/saved">
              <h2>Saved Tickets</h2>
              <ol className="saved-tickets">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path="/signup">
              <h2>Signup</h2>
            </Route>
            <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
              <h2>Search</h2>
              <ol className="search-results">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path="/user/:username">
              <h2>UserProfile</h2>
              <ol className="user-tickets">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path={["/ticket/new", "/ticket/:id/edit", "/ticket/:id"]}>
              <h2>Create / Edit / View Ticket</h2>
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
