import React, { Component } from "react";
import Header from "../components/Header";
import Queue from "../components/Queue";
import "./HomePage.css";

export default class QueuePage extends Component {
  state = {
    message: "You're almost next in line to adopt!"
  };

  render() {
    return (
      <>
        <Header />
        <section className="QueuePage">
          <h2>{this.state.message}</h2>
          <ul>
            <Queue />
          </ul>
        </section>
      </>
    );
  }
}
