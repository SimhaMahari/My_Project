import React, { Component } from 'react';
import "./VolunteerConnection.css"

class VolunteerConnection extends Component {
    state = {UserName : '' , Password : ''};

    render() {
        return (
            <div className="VolunteerConnection"> 
                <h1>התחברות מתנדבים</h1>

                <input onChange={(event)=>{
                    this.setState({UserName : event.target.value })
                }} placeholder='שם משתמש' type="UserName"></input><br/>

                <input onChange={(event)=>{
                    this.setState({Password : event.target.value})
                }} placeholder="סיסמא" type="password"></input><br/>

                <button onClick={()=> {
                    console.log(`
                    UserName : ${this.state.UserName}
                    password : ${this.state.Password}`);
                    
                }}>התחברות</button>
            </div>
        );
    }
}

export default VolunteerConnection;