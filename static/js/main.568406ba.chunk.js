(this.webpackJsonpganeshgarment=this.webpackJsonpganeshgarment||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(15),o=a.n(s),l=(a(29),a(2)),c=a(3),i=a(5),m=a(4),p=a(13),u=a(53),d=(a(30),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:this.props.width}},n.a.createElement(u.a,{style:{color:"#fff",fontWeight:"bold",backgroundColor:"#00A86B"},fullWidth:!0,onClick:this.props.onClick,type:this.props.type,name:"submit"},this.props.title))}}]),a}(n.a.Component)),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"top"},n.a.createElement("p",{className:"title"},n.a.createElement("span",{style:{color:"#00A86B"}},"G"),"ANESH ",n.a.createElement("span",{style:{color:"#00A86B"}},"G"),"ARMENT"),n.a.createElement("hr",null),n.a.createElement("p",{className:"p"},"retailer & wholesaler"))}}]),a}(n.a.Component),E=(a(34),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"boxinput"},n.a.createElement("input",{type:this.props.type,value:this.props.value,name:this.props.name,maxLength:this.props.maxLength,onChange:this.props.onChange,required:!0}),n.a.createElement("label",null,this.props.lbl))}}]),a}(n.a.Component)),f=a(17),b=(a(35),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).login=function(){""===r.state.email?r.setState({emailerror:"Please Enter Mobile email"}):r.setState({emailerror:""}),""===r.state.password?r.setState({passworderror:"Please Enter Password"}):r.setState({passworderror:""}),r.state.email&&r.state.password&&r.submit()},r.submit=function(){"Admin"===r.state.email&&"Admin"===r.state.password?r.props.history.push("/AdminLogin"):fetch("http://localhost/SignUp/login.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"Application/json"},body:JSON.stringify({email:r.state.email,password:r.state.password})}).then((function(e){return e.json()})).then((function(e){"LOGIN"===e?(r.props.history.push("/Dashboard"),localStorage.setItem("loginToken","login token")):alert(e)})).catch((function(e){console.error(e)}))},r.change=function(e){var t=e.target.name,a=e.target.value;r.setState(Object(p.a)({},t,a)),""!==r.state.email?r.setState({emailerror:""}):""!==r.state.password&&r.setState({passworderror:""})},r.state={email:"",password:"",emailerror:"",passworderror:""},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"login_container"},n.a.createElement("div",{className:"login_form"},n.a.createElement("div",{className:"login_logo"},n.a.createElement(h,null)),n.a.createElement("h3",null,"Sign In"),n.a.createElement("form",null,n.a.createElement("div",null,n.a.createElement(E,{type:"text",value:this.state.email,name:"email",onChange:this.change,lbl:"Email"}),n.a.createElement("p",{className:"error"},this.state.emailerror),n.a.createElement(E,{type:"password",value:this.state.password,name:"password",onChange:this.change,lbl:"Password"}),n.a.createElement("p",{className:"error"},this.state.passworderror),n.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"center"}},n.a.createElement(d,{title:"Sign In",width:"350px",onClick:this.login})),n.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"center"}},n.a.createElement(d,{title:"Register",width:"350px",onClick:function(){return e.props.history.push("/RegisterUser")}})))),n.a.createElement("div",{className:"fp2"},n.a.createElement("p",{className:"fp"}," ",n.a.createElement("span",null," Forgot Password ? ",n.a.createElement(f.b,{to:"/forgotpassword",className:"AdminLink"}," Click Here "))))))}}]),a}(n.a.Component)),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).change=function(e){var t=e.target.name,a=e.target.value;r.setState(Object(p.a)({},t,a)),""!==r.state.email&&r.setState({emailerror:""})},r.forgotpassword=function(){""===r.state.email?r.setState({emailerror:"Please Enter Email ID"}):fetch("http://localhost/SignUp/verify_email.php",{method:"POST",headers:{Accept:"Application/json","Content-Type":"Application/json"},body:JSON.stringify({email:r.state.email})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e)}))},r.state={email:"",emailerror:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"login_container"},n.a.createElement("div",{className:"login_form"},n.a.createElement("div",{className:"login_logo"},n.a.createElement(h,null)),n.a.createElement("h3",null,"VERIFY EMAIL"),n.a.createElement("form",null,n.a.createElement("div",{className:"txtinput"},n.a.createElement(E,{type:"text",lbl:"Enter Email ID",value:this.state.email,name:"email",onChange:this.change}),n.a.createElement("p",{className:"error"},this.state.emailerror),n.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"center"}},n.a.createElement(d,{title:"verify",width:"350px",onClick:this.forgotpassword}))))))}}]),a}(n.a.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null," textInComponent ")}}]),a}(r.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).register=function(){""===r.state.username&&""===r.state.email&&""===r.state.mobile&&""===r.state.password&&""===r.state.cpassword?r.setState({usernameerror:"Please Enter Username",emailerror:"Please Enter Email",mobileerror:"Please Enter Mobile Number",passworderror:"Please Enter Password",cpassworderror:"Please Enter Confirm Password"}):""===r.state.username?r.setState({usernameerror:"Please Enter Username"}):""===r.state.email?r.setState({emailerror:"Please Enter Email"}):""===r.state.mobile?r.setState({mobileerror:"Please Enter Mobile"}):""===r.state.password?r.setState({passworderror:"Please Enter Password"}):""===r.state.cpassword?r.setState({cpassworderror:"Please Enter Confirm Password"}):fetch("http://localhost/SignUp/registration.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"Application/json"},body:JSON.stringify({username:r.state.username,email:r.state.email,mobile:r.state.mobile,password:r.state.password,cpassword:r.state.cpassword})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e)}))},r.change=function(e){var t=e.target.name,a=e.target.value;r.setState(Object(p.a)({},t,a)),""!==r.state.username&&r.setState({usernameerror:""}),""!==r.state.email&&r.setState({emailerror:""}),""!==r.state.mobile&&r.setState({mobileerror:""}),""!==r.state.password&&r.setState({passworderror:""}),""!==r.state.cpassword&&r.setState({cpassworderror:""})},r.state={username:"",email:"",mobile:"",password:"",cpassword:"",usernameerror:"",emailerror:"",mobileerror:"",passworderror:"",cpassworderror:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"login_container"},n.a.createElement("div",{className:"login_form"},n.a.createElement("h3",{style:{marginTop:"70px"}},"Registration"),n.a.createElement("form",{style:{marginTop:"50px"}},n.a.createElement("div",null,n.a.createElement(E,{type:"text",value:this.state.username,name:"username",onChange:this.change,lbl:"Full Name"}),n.a.createElement("p",{className:"error"},this.state.usernameerror),n.a.createElement(E,{type:"text",value:this.state.email,name:"email",onChange:this.change,lbl:"Email Address"}),n.a.createElement("p",{className:"error"},this.state.emailerror),n.a.createElement(E,{type:"text",value:this.state.mobile,name:"mobile",onChange:this.change,lbl:"Mobile Number"}),n.a.createElement("p",{className:"error"},this.state.mobileerror),n.a.createElement(E,{type:"text",value:this.state.password,name:"password",onChange:this.change,lbl:"Password"}),n.a.createElement("p",{className:"error"},this.state.passworderror),n.a.createElement(E,{type:"text",value:this.state.cpassword,name:"cpassword",onChange:this.change,lbl:"Confirm Password"}),n.a.createElement("p",{className:"error"},this.state.cpassworderror),n.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"center"}},n.a.createElement(d,{title:"Create Account",width:"350px",onClick:this.register}))))))}}]),a}(r.Component),y=a(14),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).resetPassword=function(){""===r.state.password&&""===r.state.cpassword?r.setState({passworderror:"Please Enter Password",cpassworderror:"Please Enter Confirm Password"}):""===r.state.password?r.setState({passworderror:"Please Enter PAssword"}):""===r.state.cpassword?r.setState({cpassworderror:"Please Enter Confirm Password"}):fetch("http://localhost/SignUp/reset_password.php",{method:"POST",mode:"cors",headers:{Accept:"Application/json ","Content-Type":"Application/json"},body:JSON.stringify({password:r.state.password,cpassword:r.state.cpassword})}).then((function(e){return e.json()})).then((function(e){"PasswordUpdated"===e&&r.props.history.push("/")})).catch((function(e){console.error(e)}))},r.change=function(e){var t=e.target.name,a=e.target.value;r.setState(Object(p.a)({},t,a)),""!==r.state.password&&r.setState({passworderror:""}),""!==r.state.cpassword&&r.setState({cpassworderror:""})},r.state={password:"",cpassword:"",passworderror:"",cpassworderror:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"login_container"},n.a.createElement("div",{className:"login_form"},n.a.createElement("div",{className:"login_logo"},n.a.createElement(h,null)),n.a.createElement("h3",{className:"a1",style:{marginTop:"140px"}},"Reset Password"),n.a.createElement("form",null,n.a.createElement("div",{className:"txtinput",style:{marginTop:"70px"}},n.a.createElement(E,{type:"text",value:this.state.password,name:"password",onChange:this.change,lbl:"New Password"}),n.a.createElement("p",{className:"error"},this.state.passworderror),n.a.createElement(E,{type:"text",placeholder:"confirm password",value:this.state.cpassword,name:"cpassword",onChange:this.change,lbl:"Confirm Password"}),n.a.createElement("p",{className:"error"},this.state.cpassworderror),n.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"center"}},n.a.createElement(d,{title:"Create Password",width:"350px",onClick:this.resetPassword}))))))}}]),a}(r.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null," textInComponent ")}}]),a}(r.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null," textInComponent ")}}]),a}(r.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null," textInComponent ")}}]),a}(r.Component),S=(a(38),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"mainDiv"},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("div",{className:"mapH1"},n.a.createElement("h1",null,"Get in Touch"))),n.a.createElement("div",{className:"centerDiv"},n.a.createElement("div",{className:"container "},n.a.createElement("form",{style:{width:"500px",height:"500px",border:"none"}},n.a.createElement("label",{for:"fname"},"First Name"),n.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name.."}),n.a.createElement("label",{for:"lname"},"Last Name"),n.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name.."}),n.a.createElement("label",{for:"country"},"Country"),n.a.createElement("select",{id:"country",name:"country"},n.a.createElement("option",{value:"australia"},"India"),n.a.createElement("option",{value:"canada"},"Canada"),n.a.createElement("option",{value:"usa"},"USA")),n.a.createElement("label",{for:"subject"},"Subject"),n.a.createElement("textarea",{id:"subject",name:"subject",placeholder:"Write something..",style:{height:"170px"}}),n.a.createElement("input",{type:"submit",value:"Submit"}))),n.a.createElement("div",{className:"mapDiv2"})))}}]),a}(r.Component)),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(f.a,null,n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",component:b,exact:!0}),n.a.createElement(y.a,{path:"/Dashboard",component:g}),n.a.createElement(y.a,{path:"/AboutUs",component:N}),n.a.createElement(y.a,{path:"/ContactUS",component:S}),n.a.createElement(y.a,{path:"/RegisterUser",component:v}),n.a.createElement(y.a,{path:"/forgotpassword",component:w}),n.a.createElement(y.a,{path:"/ResetPassword",component:j}),n.a.createElement(y.a,{path:"/AdminLogin",component:C}),n.a.createElement(y.a,{path:"/AdminPanel",component:O})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.568406ba.chunk.js.map