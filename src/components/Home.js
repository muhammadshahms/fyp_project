import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    <>
 
    <div>
        <h1>
            <Link to="/login" >Login</Link>
        </h1>
        <br />
        <h1>
            <Link to="/signup" >Sign Up</Link>
        </h1>
        <br />
        <h1>
            <Link to="/googleauth" >Google</Link>
        </h1>
    </div>

    <br />
    <br /><br /><br /><br />
    <h2>{props.name ? `Welcome ${props.name}` : `Login  Please`   }</h2>
    </>
  )
}

export default Home