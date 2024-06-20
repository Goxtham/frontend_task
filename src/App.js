// src/App.js

import React from "react";
import "./assets/css/style.css"; // Make sure your CSS file path is correct
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css"; // Ant Design CSS if used
import MainComponent from "./components/mainComponent";
import { addUser, getUsers } from "./actions/userActions";
import "./assets/css/style.css";

function App(props) {
  return (
    <div className="App">
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  // Map all your reducers to props
  userState: state.userState, // Assuming you have userState in your combined reducers
});

const mapDispatchToProps = {
  getUsers,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
