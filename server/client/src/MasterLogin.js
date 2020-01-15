import React, { Component } from 'react';
import "./MasterLogin.css"

class MasterLogin extends Component {
state = {Username : '' , password : ''};

    render() {
        return (
           
            <div className="MasterLogin">
                <h1>התחברות הורים</h1>

                <input onChange={(event)=>{
                    this.setState({Username : event.target.value})
                }} placeholder='שם משתמש' type="Username"></input><br/>

                <input onChange={(event)=>{
                    this.setState({password : event.target.value})
                }} placeholder="סיסמא" type="password"></input><br/>

                <button onClick={()=> {
                    console.log(`
                    UserName : ${this.state.Username}
                    Password : ${this.state.password}`);
                    
                }}>התחברות</button>
            </div>
        );
    }
}

export default MasterLogin;