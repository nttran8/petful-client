import React, { Component } from "react";
import Header from "../components/Header";
import ViewPet from "../components/ViewPet";
import ApiService from "../api-service";
import UserContext from "../context";
import "./AdoptionPage.css";

export default class AdoptionPage extends Component {
  static contextType = UserContext;
  state = {
    cats: null,
    dogs: null,
    loaded: false
  };

  openTab(e) {
    // Show the next available pet for adoption
    let tabName = e.currentTarget.value;
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    e.currentTarget.className += "active";
  }

  componentDidMount() {
    // Open the cat tab on page load
    document.getElementsByClassName("tabLinks")[0].click();
    // Fetch all pets for adoption from database
    ApiService.getPets().then(res => {
      this.setState({ cats: res.cat, dogs: res.dog, loaded: true });
    });
  }

  handleOnClickCat = () => {
    // Dequeue pet from adoption pool
    alert(
      `Congratulations, you've adopted our beloved ${this.state.cats[0].name}! Please see the success stories tab to for ${this.state.cats[0].name}'s feature.`
    );
    ApiService.deletePets("cat").then(cat => {
      this.context.updateSuccessStories(cat);
      this.context.updateAdoption("cat");
    });
    // Disable user from adopting anymore if user has adopted 1 cat and 1 dog
    if (this.context.adoptedDog === true) {
      this.disableAdoptionButton();
    }
  };

  handleOnClickDog = () => {
    // Dequeue pet from adoption pool
    alert(
      `Congratulations, you've adopted our beloved ${this.state.dogs[0].name}! Please see the success stories tab to for ${this.state.dogs[0].name}'s feature.`
    );
    ApiService.deletePets("dog").then(dog => {
      this.context.updateSuccessStories(dog);
      this.context.updateAdoption("dog");
    });
    // Disable user from adopting anymore if user has adopted 1 cat and 1 dog
    if (this.context.adoptedCat === true) {
      this.disableAdoptionButton();
    }
  };

  disableAdoptionButton = () => {
    window.localStorage.setItem("canAdopt", "false");
    this.context.updateUser(null);
  };

  renderUpNextCatsList = () => {
    const { cats = [] } = this.state;
    return cats.map(cat => <li>{cat.name}</li>);
  };

  renderUpNextDogsList = () => {
    const { dogs = [] } = this.state;
    return dogs.map(dog => <li>{dog.name}</li>);
  };

  renderAdoptCatButton = () => {
    if (
      window.localStorage.getItem("canAdopt") === "true" &&
      !this.context.adoptedCat
    ) {
      return (
        <button type="button" onClick={this.handleOnClickCat}>
          Adopt Me!
        </button>
      );
    }
  };

  renderAdoptDogButton = () => {
    if (
      window.localStorage.getItem("canAdopt") === "true" &&
      !this.context.adoptedDog
    ) {
      return (
        <button type="button" onClick={this.handleOnClickDog}>
          Adopt Me!
        </button>
      );
    }
  };

  render() {
    let loaded = this.state.loaded;
    return (
      <>
        <Header />
        <section className="AdoptionPage">
          <div className="up-next">
            <div className="cats-next">
              <h1>Cats:</h1>
              <ol className="upNext-list">
                {loaded && this.renderUpNextCatsList()}
              </ol>
            </div>
            <div className="dogs-next">
              <h1>Dogs:</h1>
              <ol className="upNext-list">
                {loaded && this.renderUpNextDogsList()}
              </ol>
            </div>
          </div>
          <section className="available-pet">
            <div className="tab">
              <button
                className="tabLinks"
                id="defaultOpen"
                value="Cat"
                onClick={this.openTab}
              >
                Cat
              </button>
              <button className="tabLinks" value="Dog" onClick={this.openTab}>
                Dog
              </button>
            </div>
            <div id="Cat" className="tabContent">
              {loaded && <ViewPet pet={this.state.cats[0]} />}{" "}
              {this.renderAdoptCatButton()}
            </div>
            <div id="Dog" className="tabContent">
              {loaded && <ViewPet pet={this.state.dogs[0]} />}{" "}
              {this.renderAdoptDogButton()}
            </div>
          </section>
        </section>
      </>
    );
  }
}
