import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {
        FirstName: '', LastName: '', Email: '',
        Fax: '', phone : '' }

    render() {
        return (
            <div className="Contact">
                <h5>:ניתן ליצור איתנו קשר באמצעות<br/>פלאפון : 052244778-יעקב <br/>
                 </h5>
                <h4>.השאר/י פרטים ליצירת קשר</h4>
                <input placeholder='שם פרטי' onChange={(event)=>{
                    this.setState({FirstName : event.target.value})
                }} type='text'></input><br />
                <input placeholder='שם משפחה' onChange={(event)=>{
                    this.setState({LastName : event.target.value})
                }} type='text'></input><br />
                <input placeholder='אימייל' onChange={(event)=> {
                    this.setState({Email : event.target.value})
                }} type='Emeil'></input><br />
                <input placeholder='פלאפון' onChange={(event)=>{
                    this.setState({phone : event.target.value})
                }} type='Number'></input><br />
                <input placeholder='פקס' onChange={(event)=>{
                    this.setState({Fax : event.target.value})
                }} type='Number'></input><br />

                <button
                onClick={
                    () => {
                        console.log(` 
          First Name : ${this.state.FirstName} 
          Last Name : ${this.state.LastName}
          Email : ${this.state.Email}
          phone : ${this.state.phone}
          Fax : ${this.state.Fax}`)}
          }>צור קשר</button>

            </div>
        );
    }
}

export default Contact;