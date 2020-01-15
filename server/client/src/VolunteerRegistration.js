import React, { Component } from 'react';
import "./VolunteerRegistration.css";

class VolunteerRegistration extends Component {
    
    state = {
        FirstName: '', LastName: '', ID: '', Email: '',
        Username: '', password : '', ConfirmPassword: ''
    }
    render() {
        return (
            <div className="VolunteerRegistration">
            <h1>רישום מתנדבים</h1>


            <input onChange={(event) => {
                this.setState({ FirstName: event.target.value })
            }} type='name' placeholder='שם פרטי'></input><br />

            <input onChange={(event) => {
                this.setState({ LastName: event.target.value })
            }} type='name' placeholder='שם משפחה'></input><br />

            <input onChange={(event) => {
                this.setState({ ID: event.target.value })
            }} type='Number' placeholder='תעודת זהות'></input><br />

            <input onChange={(event) => {
                this.setState({ Email: event.target.value })
            }}
                type='email' placeholder='אימייל'></input><br />

            <input onChange={(event) => {
                this.setState({ Username: event.target.value })
            }} type='Username' placeholder='שם משתמש'></input><br />

            <input onChange={(event) => {
                this.setState({ password: event.target.value })
            }} type='password' placeholder='סיסמא'></input><br />

            <input onChange={(event) => {
                this.setState({ ConfirmPassword : event.target.value })
            }} type='password' placeholder='חזור שנית על הסיסמא'></input><br />


            <button onClick={
                () => {
                    console.log(` 
      First Name : ${this.state.FirstName} 
      last Name : ${this.state.LastName}
      ID : ${this.state.ID}
      Email : ${this.state.Email}
      Username ${this.state.Username}
      password : ${this.state.password}
      Confirm Password : ${this.state.ConfirmPassword}`); }
            }>דף הבא </button>
        </div>
        );
    }
}

export default VolunteerRegistration;