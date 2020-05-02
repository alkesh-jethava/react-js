import React, { Component } from 'react';
import LogoName from '../Components/LogoName';
import Buttons from '../Components/Button';
import TextInput from '../Components/TextInput'

export default class componentName extends Component {
      constructor(props){
        super(props);
        this.state = {
            password: '',
            cpassword: '',
            passworderror: '',
            cpassworderror: '',
        }
    }

    resetPassword = () => {

        if(this.state.password === '' && this.state.cpassword === '')
        {
            this.setState({
                passworderror: "Please Enter Password",
                cpassworderror: "Please Enter Confirm Password"
            })
        }
        else if(this.state.password === '')
        {
            this.setState({
                passworderror: "Please Enter PAssword"
            })
        }
        else if(this.state.cpassword === '')
        {
            this.setState({
                cpassworderror: "Please Enter Confirm Password"
            })
        }
        else
        {
            fetch('http://localhost/SignUp/reset_password.php', {
                method: 'POST',
                mode: 'cors',
                headers: { 
                    'Accept': 'Application/json ',
                      'Content-Type': 'Application/json' ,
                   
                },
                body: JSON.stringify({
                    password: this.state.password,
                    cpassword: this.state.cpassword,
                })
            })
             .then((response) => response.json())
            .then(responseJson => {
                if(responseJson === 'PasswordUpdated')
                {
                    this.props.history.push('/')
                }
              }).catch((error) => {
                console.error(error);
            });
        }
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

         if(this.state.password !== '')
        {
            this.setState({
                passworderror: ""
            })
        }
         if(this.state.cpassword !== '')
        {
            this.setState({
                cpassworderror: ""
            })
        }

       
    }


  render() {    
    return (
        
        <div className="login_container">
        <div className="login_form">
            <div className="login_logo">
            <LogoName/>   
            </div>

            <h3 className="a1" style={{marginTop: '140px'}}>Reset Password</h3>

             <form>  
                 <div className="txtinput" style={{marginTop: '70px', }}> 


               
                <TextInput type="text"
                            value={this.state.password}
                            name="password"
                            onChange={this.change}
                            lbl="New Password"/>     
                            <p className="error">{this.state.passworderror}</p>  

                <TextInput type="text"
                            placeholder="confirm password" 
                            value={this.state.cpassword}
                            name="cpassword"
                            onChange={this.change}
                            lbl="Confirm Password"/>  
                             <p className="error">{this.state.cpassworderror}</p>    
                   
                    <div style={{marginTop: 10,display: 'flex', justifyContent: 'center'}}>
                        <Buttons title="Create Password" width="350px" onClick={this.resetPassword}/>
                    </div>
    
                </div> 
            </form>
        </div>
    </div>
    )
  }
}
