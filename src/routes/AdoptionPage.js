import React, { Component } from "react";
import Header from "../components/Header";
import ViewPet from "../components/ViewPet";
import ApiService from '../api-service'

export default class AdoptionPage extends Component {

  state = {
    cat:null,
    dog:null,
    loaded: false
  }

  openTab(e) {
    let tabName = e.currentTarget.value;
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tabContent');
    for ( i=0; i< tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }

    tabLinks = document.getElementsByClassName('tabLinks');
    for (i=0; i<tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace('active', '')
    }

    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += 'active';
  }

  componentDidMount() {
    //console.log(document.getElementsByClassName('tabLinks')[0])
    document.getElementsByClassName('tabLinks')[0].click();
    ApiService.getPets()
    // .then(res => {
    //   this.setState({ cat: res.})
    // })
    .then(res => {
      this.setState({ cat: res.cat[0], dog: res.dog[0], loaded:true})
    })
  }

render() {
  let loaded = this.state.loaded
  return (
    <>
      <Header />
      <section className="AdoptionPage">
        <div className="tab">
          <button className="tabLinks" id='defaultOpen' value='Cat' onClick={this.openTab}>Cat</button>
          <button className="tabLinks" value='Dog' onClick={this.openTab}>Dog</button>
        </div>
        <div id="Cat" className="tabContent">
          {loaded && <ViewPet pet={this.state.cat}/>} {/**need to insert props from state */}
        </div>
        <div id="Dog" className="tabContent">
          {loaded && <ViewPet pet={this.state.dog}/>} {/**need to insert props from state */}
        </div>
      </section>
    </>
  );
}
}
