import React, { Component } from "react";
import ApiService from "../api-service";

export default class Queue extends Component {
  state = {};

  componentDidMount() {
    ApiService.getUsers()
      .then(users => console.log(users))
      .catch(error => console.log(error));
  }
  render() {
    return <li></li>;
  }
}
