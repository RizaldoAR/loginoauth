import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { Container, Row, Col, Button, Alert, Breadcrumb,  Card, Form } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }
  
  
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    alert(response.profileObj.email);
    

    
  }
  
  handleEmailChange = (event) =>{
    this.setState({
      email: event.target.value
    })
  }
  handlePasswordChange = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  handleLogin = (event) =>{
    if(this.state.email == "rizaldo.a.r@gmail.com" && this.state.password == "rizaldo123"){
      alert(this.state.email)
    }else{
      alert('Login Gagal')
    }
  }
    
    
  
  

  
  render() {
    return (
      <div className ="App">
        <header className="App-header">
          <Container>
          <Form onSubmit={this.handleLogin}>
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Example@email.com"/>
                  <Form.Text className="text-muted">
                  You can login with google as well :)
                  </Form.Text>
                </Form.Group>          
              </Col>
              <Col>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                  <Form.Control value={this.state.password} onChange={this.handlePasswordChange} type="Password" placeholder="Password"/>
                  </Form.Group>
                  <Button className="btn-lg mr-2" variant="primary" type="submit" onClick={this.handleLogin}>Login</Button>
                  <GoogleLogin
                    clientId="1045648625878-s0s6q5m9gbd0glsu32v332nod55j5l4k.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                   />
              </Col>
            </Row>
          </Form>
          
        </Container>
        </header>
        
        
      </div>
      
    )
  }
}

export default App
