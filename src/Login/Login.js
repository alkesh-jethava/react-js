import React from 'react';
import Buttons from '../Components/Button';
import LogoName from '../Components/LogoName';
import TextInput from '../Components/TextInput';
import { NavLink } from 'react-router-dom';
import '../CSS/Login.css';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailerror: '',
            passworderror: '',
        }
    }

    login = () => 
    {  
            if(this.state.email === ''){
                this.setState({
                    emailerror: "Please Enter Mobile email"
                })
            }else{
                this.setState({
                    emailerror: ""
                })
            }
            if(this.state.password === ''){
                this.setState({
                    passworderror: "Please Enter Password"
                })
            }else{
                this.setState({
                    passworderror: ""
                })
            }
            if(this.state.email && this.state.password){
                this.submit();
            }
    }
    
    submit = () =>
    {

        if(this.state.email === 'Admin' && this.state.password === 'Admin')
        {
            this.props.history.push('/AdminLogin')
        }
        else
        {
            fetch('http://localhost/SignUp/login.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson === "LOGIN"){
                    this.props.history.push('/Dashboard')
                    localStorage.setItem("loginToken", "login token");
                }else{
                    alert(responseJson)
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

        if(this.state.email !== ''){
            this.setState({ emailerror: ''})
        }
        else if(this.state.password !== ''){
            this.setState({ passworderror: ''})
        }
    }

    render(){
        return(
            <div className="login_container">
                <div className="login_form">
                    <div className="login_logo">
                    <LogoName/>   
                    </div>

                    <h3>Sign In</h3>

                     <form>  
                         <div > 

                            <TextInput type="text"
                                       value={this.state.email}
                                       name="email"
                                       onChange={this.change}
                                       lbl="Email"
                                    
                                       />
                            <p className="error">{this.state.emailerror}</p>
                           
                            <TextInput type="password"
                                       value={this.state.password}
                                       name="password"
                                       onChange={this.change}
                                       lbl="Password"
                                
                                       />
                            <p className="error">{this.state.passworderror}</p>
                           
                            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
                                <Buttons title="Sign In" width="350px" onClick={this.login}/>
                            </div>
                            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
                                <Buttons title="Register" width="350px" onClick={() =>  this.props.history.push('/RegisterUser')}/>
                            </div>
                        </div> 

                    </form>
                    <div className="fp2">
                       <p  className="fp"> <span> Forgot Password ? <NavLink to="/forgotpassword" className="AdminLink"> Click Here </NavLink></span></p>
                    </div>
                </div>
            </div>
        )} 
   }

export default Login;