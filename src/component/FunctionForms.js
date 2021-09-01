import React, { useState } from 'react'
import '../App.css'

function FunctionForms() {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleSurName(e) {
        setSurname(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePhone(e) {
        setPhone(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmite(e) {
        e.preventDefault();

        //sign in
        setFirstName('')
        setSurname('')
        setEmail('')
        setPhone('')
        setPassword('')
    }
    
    return (
        <div className="forms-body">
            <h3>Functional component</h3>
            <form onSubmit={(e) => {handleSubmite(e)}}>
                <input className="input" type='text' name='firstname' placeholder="Firstname" value={firstName} onChange={(e) => handleFirstName(e)} />
                <input className="input" type='text' name='surname' placeholder="Surname" value={surname} onChange={(e) => handleSurName(e)} />
                <input className="input" type='email' name='email' placeholder="Email" value={email} onChange={(e) => handleEmail(e)} />
                <input className="input" type='phone' name='phone' placeholder="Phone" value={phone} onChange={(e) => handlePhone(e)} />
                <input className="input" type='password' name='password' placeholder="Password" value={password} onChange={(e) => handlePassword(e)} />
                <input className="button" type="submit"/>
            </form>
        </div>
    )
}

export default FunctionForms;
