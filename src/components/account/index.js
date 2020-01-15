import React from 'react'
import { Component } from 'react'
import { AuthUserContext } from '../session'
import { withFirebase } from '../firebase';
import { Fly } from '../home';

class Account extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      nitrRoll: ""
    }
  }
  getSnapshot = uid => {
    this.props.firebase.user(uid).once('value')
      .then(snapshot => this.setState({
        displayName: snapshot.val().displayName,
        nitrRoll: snapshot.val().nitrRoll
      }))
  }
  render(){
    return(
      <>
      <Fly />
      <AuthUserContext.Consumer>
      {authUser =>{
        if(authUser){
          this.getSnapshot(authUser.uid)
          return(
            <div style = {{width: "75%", margin: "auto", padding: "10px", minWidth: "200px", borderRadius: "10px", backgroundColor: "#050505", color: "whitesmoke", textAlign: "center"}}>
              <div style = {{fontSize: "1.5rem", color: "#FA3264"}}>Welcome to your CODE RED Account</div>
              <div>Name: &nbsp;{this.state.displayName}</div>
              <div>Email ID: &nbsp;{authUser.email}</div>
              <div>Roll No.: &nbsp;{this.state.nitrRoll}</div>
              <div style = {{fontSize: "1.5rem", color: "#FA3264"}}>We are implementing some more features. Come back later!</div>
            </div>
          )
        }
        else{
          return(
            <div style = {{width: "75%", height: "200px", margin: "auto", paddingTop: "3rem", paddingBottom: "3rem", minWidth: "200px", color: "#FA3264", textAlign: "center", fontSize: "1.5rem"}}>
              You need to log in to access this page!
            </div>
          )
        }
      }}
      </AuthUserContext.Consumer>
      </>
    )
  }
}

export default withFirebase(Account)