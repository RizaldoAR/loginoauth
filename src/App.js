import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1045648625878-s0s6q5m9gbd0glsu32v332nod55j5l4k.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
      </div>
    )
  }
}

export default App
