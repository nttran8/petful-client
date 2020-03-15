import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";
import './Queue.css'

export default class Queue extends Component {
  state = {
    message: "Adopting Queue:"
  };

  static contextType = UserContext;

  componentDidMount() {
    ApiService.getUsers()
      .then(users => {
        this.context.updateUsers(users);
      })
      .catch(error => console.log(error));

    if (this.context.user === this.context.users[0] && !this.context.canAdopt) {
      this.context.toggleAdoptionStatus();
      this.setState({
        message: `Congragulations, please navigate to the "Adopt" tab to start your adoption process.`
      });
    }
  }

  render() {
    console.log(this.context);
    return (
      <>
        <h2>{this.state.message}</h2>
        <ul className='queue-list'>
          {this.context.users.map((user, i) => (
            <li key={i + user}>{user}</li>
          ))}
        </ul>
      </>
    );
  }
}