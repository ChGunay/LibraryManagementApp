import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function SigninScreen() {
    
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    
    const submitHandler = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sıng In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label />
                    <button className="primary" type="submit">Sıgn In</button>
                </div>
                <div >
                    <label />
                    <div> 
                        New User?
                        <Link to="/register">New Account</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
