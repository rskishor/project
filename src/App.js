import React from "react";
import './login.css';
import Profile from "./profile";
import Ui from "./kishor";
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


</div>



<Profile />
<Ui />
    </>
  );
};

export default Login;