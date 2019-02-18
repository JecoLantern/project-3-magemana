import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from "../../components/Grid";
import '../About/style.css'

function About(props) {
  return (
    <Container>
          <Row>
    <div className="tech">
      <h1 className="name">
        <span className="tag">&lt; </span>
        About Us
        <span className="tag"> /&gt;</span>
      </h1>
      
      <section className="about_info">
        <article className="post" id="index">
        <div className="title">
          <h2>About this site</h2>
          <h4>A beautiful, responsive, react app written with modern Javascript.</h4>
        </div>
      <p> Welcome to our website. Please feel free to<Link to="/Contact"> Contact us</Link></p>
      <p>MageManager Is a complete character generator that will allow players to not only store their characters but also track their stats and in the future will allow DND parties to host and play their entire sessions within our app. 
In the end, we hope to create a fully connected and digital table-top experience. One where the DM can send secret notes to individual players,  players can click a button and roll their whole turn in combat, where the results will be pushed to the DM’s screen for transparency.
</p> 
        <h2><span className="red"># </span>More Info</h2>
        <p className="about_p">
        Our goal with Mage Manager is to create a Application that will allow a Dungeon Master (DM) and their Party Members (PC’s) to manage every aspect of their Fifth Edition Dungeons and Dragons Campaign. MM will allow PC’s to create usable characters from scratch using our Character Builder. From there, features will open up based on the type of character built.
	
    DMs will have access to a long list of features including, but not limited to, a complete Campaign management system that keeps track of everything from their PC’s, story points, major factions, “behind the screen” data, simple and interactive battle maps, and everything available under 5e’s Open Gaming License (OGL). All will be accessible from the gaming table with nothing but a tablet, laptop, and if possible phone.    
      </p>
    <div className="about_link">
      <p>Check out our portfolios</p> 
        <ul>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Austin Shepard</a></li>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Jeric Ayonke</a></li>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Troy Gordon</a></li>
            
        </ul>

        <p>Or you can contact us on Linkdin</p> 
        <ul>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Austin Shepard</a></li>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Jeric Ayonke</a></li>
            <li><a href="https://github.com/Austin-Shep/project-3-magemana">Troy Gordon</a></li>
            
        </ul>
        </div>

      <h1 className='source'> Source available <a href="https://github.com/Austin-Shep/project-3-magemana">here</a>.</h1>
    </article>
      </section>
    </div>
    </Row>
    </Container>
  )
}

export default About;