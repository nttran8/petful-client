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
    loaded: false,
    adopted: null
  };

  openTab(e) {
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
    //console.log(document.getElementsByClassName('tabLinks')[0])
    document.getElementsByClassName("tabLinks")[0].click();
    ApiService.getPets()
      // .then(res => {
      //   this.setState({ cat: res.})
      // })
      .then(res => {
        this.setState({ cats: res.cat, dogs: res.dog, loaded: true });
      });
  }

  handleOnClickCat = () => {
    this.setState({ adopted: this.state.cat[0]});
    ApiService.deletePets("cat");
    this.value.history.push("/successstories");
  };

  handleOnClickDog = () => {
    this.setState({ adopted: this.state.dog[0]});
    ApiService.deletePets("dog");
    this.props.history.push("/successstories");
  };

  renderUpNextCatsList = () => {
    const {cats =[]} = this.state
    return cats.map(cat => <li>{cat.name}</li>)
  }

  renderUpNextDogsList = () => {
    const {dogs=[]} = this.state
    return dogs.map(dog => <li>{dog.name}</li>)
  }

  render() {
    let loaded = this.state.loaded;
    return (
      <>
        <Header />
        <section className="AdoptionPage">
        <section className='up-next'>
          <div className='cats-next'>
            <h2>Cats:</h2>
            <ol className='upNext-list'>
              {loaded && this.renderUpNextCatsList()}
            </ol >
          </div>
          <div className='dogs-next'>
            <h2>Dogs:</h2>
            <ol className='upNext-list'>
              {loaded && this.renderUpNextDogsList()}
            </ol>
          </div>
        </section>
        <section className='available-pet'>
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
            {/**need to insert props from state */}
            {/* if user is next, then button is shown */}
            {this.context.canAdopt && (
              <button type="button" onClick={this.handleOnClickCat}>
                Adopt Me!
              </button>
            )}
          </div>
          <div id="Dog" className="tabContent">
            {loaded && <ViewPet pet={this.state.dogs[0]} />}{" "}
            {/**need to insert props from state */}
            {/* if user is next, then button is shown */}
            {this.context.canAdopt && (
              <button type="button" onClick={this.handleOnClickDog}>
                Adopt Me!
              </button>
            )}
          </div>
          </section>
        </section>
      </>
    );
  }
}
