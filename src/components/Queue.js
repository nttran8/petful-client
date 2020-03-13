import React, { Component } from "react";
import ApiService from "../services/api-service";

export default class Queue extends Component {
  state = {};

  componentDidMount() {
    ApiService.getUsers(users => console.log(users));
  }
  render() {
    return <li></li>;
  }
}
