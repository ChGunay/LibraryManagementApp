import React from 'react'
import { Link } from 'react-router-dom'

export default function ConfirmScreen() {
    return (
        <div className="confirm-screen">
            Thank you for registering, you will be able to log in after admin confirms your account.
            <div className="row">
                
            <Link to="/">Sign In</Link>
            </div>
           
        </div>

    )
}
