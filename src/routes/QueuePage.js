import React, { Component } from "react";
import ApiService from "../api-service";
import Header from "../components/Header";
import Queue from "../components/Queue";

export default class QueuePage extends Component {
  state = {
    message: "Adopting Queue"
  };

  render() {
    return (
      <>
        <Header />
        <section className="QueuePage">
          <h2>{this.state.message}</h2>
          <Queue />
        </section>
      </>
    );
  }
}
