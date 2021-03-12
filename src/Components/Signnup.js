import React,{useRef, useState} from "react";
import { Link } from "react-router-dom";
import {Alert} from "reactstrap"
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import {useAuth, AuthProvider} from '../context/AuthContext'

export default function Signup() {
  return (
    < AuthProvider>
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
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "80vh" }}
        spacing={5}
      >
        <Grid item>
          <Typography variant="h5" color="blue">
            Signup
          </Typography>
        </Grid>
        <Grid item style={{ border: "0.2px solid gray" }}>
          <Singupp />
        </Grid>
      </Grid>
    </ AuthProvider>
  );
}

const Singupp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef() 
  const {Signup, currentUser} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== confirmpasswordRef.current.value){
      return setError('Passwords do not match')
    }

    try{
      setError('')
      setLoading(true)
      await Signup(emailRef.current.value, passwordRef.current.value)

    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
     
   }

  return (
    <>
    {error && <Alert variant='danger'>{error}</Alert>}
    <form onSubmit={handleSubmit}>
    <Grid container direction="column" alignItems="center" justify="center">
      <TextField
      ref={emailRef}
        variant="outlined"
        label="Email"
        fullwidth
        style={{ marginBottom: "2em" }}
        reauired
      />
      <TextField
      ref={passwordRef}
        variant="outlined"
        label="Password"
        fullwidth
        style={{ marginBottom: "2em" }}
        required 
      />
      <TextField
      ref={confirmpasswordRef}
        variant="outlined"
        label="Confirm Password"
        fullwidth
        style={{ marginBottom: "2em" }}
        required 
      />
      <Button 
        disabled={loading}
        type="submit"
        size="large"
        variant="contained"
        style={{ background: "blue", color: "white" }}
      >
        Signup
      </Button>
       {currentUser && currentUser.email} 
    </Grid>
    </form>
    </>
  );
};
