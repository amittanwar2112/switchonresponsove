import React, { Component } from 'react'
import LoginLayout from './layout/LoginLayout';
import MainLogic from './mainlogic/MainLogic';
import {connect} from 'react-redux';
import axios from 'axios'


class App extends Component {
    constructor(props) {
      super(props);
      this.loginId="";
      this.loginPassw = "";
      this.renderCompo = "";
      this.tokenValue ="";
      this.state ={
      isLogin: false,
      tokken :""
      };
    }

    selectloginid = (event) =>{
      this.loginId = event.target.value;
    }
    selectpassw = (event) =>{
      this.loginPassw = event.target.value;
    }

    finalsubmit = (event) =>{
        let reqbody={ "email": "eve.holt@reqres.in", "password": "cityslicka" }

        let reqBody= { 
          "email": this.loginId ,
          "password":  this.loginPassw
          }
         console.log(reqBody);   
        axios.post('https://reqres.in/api/login',reqBody).then(response =>{
            //console.log(response.data.token)
            this.tokenValue = response.data.token ;
            //console.log(this.tokenValue)
            //this.setState({tokken : tokenValue});
            this.props.onLogin(this.tokenValue);            
        });
    }

  render() {
    if (this.props.tokenValue === ""){
      this.renderCompo =  <LoginLayout
                              loginid ={this.selectloginid}
                              passw ={this.selectpassw}
                              onlogin ={this.finalsubmit}>
                          </LoginLayout>
    }
    else {
      console.log(this.props.tokenValue);
      this.renderCompo = <MainLogic></MainLogic>
    }
    return (
      <div>
         {this.renderCompo }
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
      tokenValue : state.token
  };
};

const mapDispatchToProps = dispatch =>{
  return {
      onLogin : (tvalue) => dispatch({type :'LOGIN',value : tvalue}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);