import React from "react";
import axios from "axios"; // For making client request.
import { Container, Row } from "../../components/Grid";
import SideBar from '../../components/SideBar/SideBar'
import '../Contact/style.css'

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", message: ""};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/XII0-LFCjSs", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <Container>
            <div id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                <div id="page-wrap">
<h1 class="brand">MageManager</h1>
<div class="wrapper animated bounceInLeft">
  <div class="company-info">

  </div>
  <div class="contact">
    <h3>Contact Us</h3>
    <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} />

        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message" onChange={this.handleFields}></textarea>

        <button className='contact_button' type="submit">Send</button>
      </form>
  </div>
</div>
</div>
</div>

      </Container>
    );
  }
}

export default Contact;




