import React from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../context/AuthContext"

export default function UserLogin() {
    return (
        <AuthProvider>
             <div
        className="nav-header"
        style={{ background: "#4A47A3", height: "50px", marginTop: "0" }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              textAlign: "center",
              padding: "0.5rem",
              fontFamily: "Times New Roman",
              fontSize: "2rem",
            }}
          >
            EDU Community
          </p>
        </Link>
      </div>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "80vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
            <Login />
            </div>
        </Container>
        </AuthProvider>
    )
}