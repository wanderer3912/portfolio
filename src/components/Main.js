import PropTypes from 'prop-types'
import React from 'react'
import intro from '../images/intro.png'
import work from '../images/work.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={intro} alt="" />
          </span>
          <p>
            Hello, I'm Komal Baskar and I'm a front-end developer. I was born in
            india and I moved to canada for my education. I started developing
            websites 5 years ago. I have worked for multiple companies as a
            full-time developer and a freelancer.
          </p>
          <p>
            I'm currently open for full-time opputunities, if you would like to
            <a href="#work"> hire me</a> please use the 
            <a href="#work"> contact form</a> to get in touch with me.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={work} alt="" />
          </span>
          <p>
          <a href="#work">Cerence Inc. </a>              <br/>  Feb 2020- April 2020 
          <br/> <br/> Project Name: Toyota-21cy
           <br/> Environment: TypeScript, JSON, Mocha, MIX, Gradle, Jenkins, GitLab
           <br/>Team Size: 15 
           <br/>Description: Responsive virtual voice assistant with
            effective UI for the customer.
            <br/> <br/> Roles and Responsibilities:
            <br/> • Understanding of the Voice User Interface dialog flow and logic.
            <br/>•Support application for machine learning, AI voice recognition in
            cars. 
            <br/> • Programming in typescript and writing unit test 
            <br/>  • Implement enhancements, debug and correct software defects. 
            <br/> • Using Agile/Scrum methodology environment. 
            <br/>• Analyzing customer reported issues. 
          </p>
          <p>
           <a href="#work"> OpenSpace Innovates </a>     <br/>    July 2014 – Aug 2017
           <br/> <br/>Software Developer
           <br/> Project Name: local.sokrati.com Environment: HTML5, CSS3,
            JavaScript, BackboneJS, Jquery, NodeJs 
            <br/> Team Size: 10 
            <br/> Description: Responsive Website with effective UI for the customer. 
            <br/> <br/> Roles and Responsibilities: 
            <br/> • Collaborated with back-end developers to create a fast and seamless information architecture 
            <br/> • Worked in an Agile development team to develop a Single-Page Web Application 
            <br/> • Designed REACT Components using JSX, HTML 5, CSS3, and Bootstrap to build a
            responsive web application
            <br/>• Integrated State into forms to implement Form Validation to ensure correct input values
            <br/> •Maintained cross-component communication through Props and State 
            <br/>• Used Maven as a build tool and dependency management tool 
            <br/> • Used Git version control and JIRA to track project progress
            <br/><br/>Project Name: Varo Bank
            <br/>Environment: Sprint boot, GRPC, REACT, TypeScript, GQL,
            Webpack, Lodash, SASS, ECMA6, ECMA7 
            <br/>Team Size: 12
            <br/>Tool Used: VS Code
            <br/> Roles and Responsibilities: My responsibilities as a developer
            included following 
            <br/> • Act as developer of this project and understand end to end UI requirements and implement. 
            <br/> • Understand Epic, Create Story based on Epic and create Task or Sub-task based on
            requirements.
            <br/>• Working on feature like Dispute, Notes, Application submission.
            <br/> • Implemented the latest JavaScript features, including
            let, const, and arrow function, to create reusable complex
            components such as Input, Button, Pop-up and more. 
            <br/>• Part of transitioning the coding part from JavaScript to TypeScript.
            <br/> •Leveraged multiple lifecycle methods to tune different behaviors of
            the component. 
            <br/> • Maintained component communication by using Props and State. 
            <br/> • Utilized JSX to build UI and decorated with CSS3 and Material-UI for REACT. 
            <br/> • Used REACT CSS modules to encapsulate CSS classes with components. 
            <br/>• Used Maven as a build tool to import and maintain versions of dependencies
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          •	E-Commerce App (REACT): <br/>
It’s a fully functional mock phone selling website. <br/>
It has all functionalities from products page to a cart page. <br/>
In cart page we can increment, decrement or remove an item and the payment is processed through PayPal.
It was deployed using netlify and uses JSX, CSS, Bootstrap and context API.<br/>
Site Link: https://online-phone-selling-store-recording.netlify.com/ <br/><br/>
•	Learn Automation Website: <br/>
	This website has the information about Projects which uses<br/>
Selenium and TestNg to test the different Locators and selenium Interaction available in 
	Website: test-leaf-http://testleaf.herokuapp.com/ <br/>
	This Website uses Bootstrap, HTML and CSS.<br/>
•	GitHub Link: https://github.com/wanderer3912/LearnAutomation <br/>
•	More projects in my GitHub: https://github.com/wanderer3912 

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:komal3912@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            
            <li>
              <a href="https://www.facebook.com/komal.baskar" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/spiritedaway_wanderer/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/wanderer3912?tab=repositories"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
