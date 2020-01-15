import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import ParentalRegistration from './ParentalRegistration';
import VolunteerRegistration from './VolunteerRegistration'
import MasterLogin from './MasterLogin';
import VolunteerConnection from './VolunteerConnection';
import ChildrensCards from './ChildrensCards';


class App extends Component {
  url = "/api";
  state = { data: "" };

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <BrowserRouter>

        <div className="App">
          
          <button><Link to="/ChildrensCards">כרטיסי ילדים</Link></button>
          <button><Link to="/VolunteerConnection">התחברות מתנדבים</Link></button>
          <button><Link to="/MasterLogin">התחברות הורים</Link></button>
          <button><Link to="/VolunteerRegistration">רישום מתנדבים</Link></button>
          <button><Link to="/ParentalRegistration">רישום הורים</Link></button>
          <button><Link to="/Contact">צור קשר</Link></button>
          <button><Link to="/About">אודות</Link></button>
          <button><Link to="/">דף הבית</Link></button>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/ParentalRegistration" component={ParentalRegistration} />
            <Route exact path="/VolunteerRegistration" component={VolunteerRegistration} />
            <Route exact path="/MasterLogin" component={MasterLogin} />
            <Route exact path="/VolunteerConnection" component={VolunteerConnection} />
            <Route exact path="/ChildrensCards" component={ChildrensCards} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
