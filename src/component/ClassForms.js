import React, { useState } from 'react'
import '../App.css'

class ClassForms extends React.Component {

    constructor() {
        super();
        this.state = {firstName: '', surname: '', email: '', phone: '', password: ''}
    }

    handleFirstName (e) {
        this.setState({firstName: e.target.value})
    }

    handleSurName (e) {
        this.setState({surname: e.target.value})
    }   

    handleEmail (e) {
        this.setState({email: e.target.value})
    }

    handlePhone (e) {
        this.setState({phone: e.target.value})
    }

    handlePassword (e) {
        this.setState({password: e.target.value})
    }

    handleSubmite (e) {
        e.preventDefault();
        this.setState({firstName: '', surname: '', email: '', phone: '', password: ''})
    }
    
    

    render() {
        return (
            <div className="forms-body">
                <h3>Class Component</h3>
                <form onSubmit={(e) => this.handleSubmite(e)}>
                <input className="input" type='text' name='firstname' placeholder="Firstname" value={this.state.firstName} onChange={(e) => this.handleFirstName(e)} />
                <input className="input" type='text' name='surname' placeholder="Surname" value={this.state.surname} onChange={(e) => this.handleSurName(e)} />
                <input className="input" type='email' name='email' placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
                <input className="input" type='phone' name='phone' placeholder="Phone" value={this.state.phone} onChange={(e) => this.handlePhone(e)} />
                <input className="input" type='password' name='password' placeholder="Password" value={this.state.password} onChange={(e) => this.handlePassword(e)} />
                <input className="button" type="submit"/>
            </form>
            </div>
        )
    }
}

export default ClassForms;

