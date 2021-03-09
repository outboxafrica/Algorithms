import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import {Link } from 'react-router-dom'

export default function Profile() {
    const [error, setError] = useState("")
    const {currentUser} = useAuth()

    function handleLogout(){}

    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100" mt-3>Update Profile</Link>
            </Card.Body>

        </Card>
        <div className="w-100 text-center mt-2">
         <Button variant='Link' onClick={handleLogout}>Log Out</Button>
      </div>
            
        </>
    )
}