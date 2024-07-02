import React from "react";
import './login.css';
import Profile from "./profile";
import Ui from "./kishor";
//import Header from "./img/img.jsx"
const Login = () =>{
  return(
    <>
<h3>R.S.KISHOR</h3>
<div id="top">
  
  <a href="">HOME</a>
  <a href="">ABOUT</a>
  <a href="">SERVICES</a>
  <a href="">PORTFOLIO</a>
  <a href="">CONTACT</a>

</div>
<div id="name">
<h4>HELLO, MY NAME IS</h4>
<h1 id="gg">KISHOR</h1>
<h2 id="hh">Web Developer</h2>
<h4 id="ph">+919994056902</h4>
<h4 id="gm">arjunkishor33@gmail.com</h4>
<img src=""></img>



</div>



<Profile />
<Ui />
    </>
  );
};

export default Login;