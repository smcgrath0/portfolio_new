import React from 'react';
import { AppContext } from '../context';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
  }
  handleNavigation() {
      this.context.setClicked();

      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

      document.querySelector('.resume-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.resume-slide').classList.remove('block');
        document.querySelector('.resume-slide').classList.remove('slideback');
      }, 500); 

  }
  render() {
    return (
      <div className="resume-slide">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

        
        <div className="resume-container">
          <div className="resume-container-inner">
            <div className="inner">

              <div id="hd">
                <div class="yui-gc">
                  <div class="yui-u first">
                    <h1>Shane Mcgrath</h1>
                    <h2>Software Engineer</h2>
                  </div>

                  <div class="yui-u">
                    <div class="contact-info">
                      <h3><a id="pdf" href="#">Download PDF</a></h3>
                      <h3><a href="mailto:smcgrath7777@gmail.com">smcgrath7777@gmail.com</a></h3>
                      <h3>(949)-554-9515</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div id="bd">
                <div id="yui-main">
                  <div class="yui-b">

                    <div class="yui-gf">
                      <div class="yui-u first">
                        <h2>Experience</h2>
                      </div>

                      <div class="yui-i">

                        <div class="job">
                          <h2>Headwire.com Inc.</h2>
                          <h3>Frontend Software Engineer</h3>
                          <h4>Dec 2019 - May 2020</h4>
                          <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
                        </div>

                      </div>
                    </div>

                    <div class="yui-gf">
                      <div class="yui-u first">
                        <h2>Technical Skills</h2>
                      </div>
                      <div class="yui-i">
                        <p >
                          <span className="bold">Strong</span>: JavaScript (ES5/ES6), HTML5, CSS3, Java, React, Node.js, Express, PHP, MySQL, JSP
                        </p>
                        <p >
                          <span className="bold">Experienced</span>: C, jQuery, SASS, RESTful APIs, Linux, UX/UI, React Native, AEM, WordPress
                        </p>
                        <p >
                          <span className="bold">Tools</span>: ES6, Git, OOP, Agile Methodology, Wireframing, Task Management, AWS, phpMyAdmin, Database Schemas, Babel, Webpack, Gulp, Jasmine, NPM, PostgreSQL
                        </p>
                      </div>
                    </div>

                    <div class="yui-gf">
                      <div class="yui-u first">
                        <h2>Projects</h2>
                      </div>
                      <div class="yui-u">

                          <div class="talent">
                            <h2>Nile</h2>
                            <p>VR E-commerce website.</p>
                            <p>Incorporated React to manage state of the products available for sale and pending items in the cart.</p>
                          </div>

                          <div class="talent">
                            <h2>Jungle Mix Up</h2>
                            <p>Card matching game, that keeps track of score. </p>
                            <p>Demonstrates <span className="bold">JavaScript</span> with HTML and CSS for an easy to use interface.</p>
                          </div>

                          <div class="talent">
                            <h2>ADMe</h2>
                            <p>Worked with a team of four others to make a place where content creators and companies can interact to produce ads and win prize</p>
                          </div>
                      </div>
                    </div>

                    


                    <div class="yui-gf last">
                      <div class="yui-u first">
                        <h2>Education</h2>
                      </div>
                      <div class="yui-i">
                        <h2>LearningFuze Immersive Coding Bootcamp</h2>
                        <h4>Immersed in a full stack to learn the fundamentals of web and software development with over 800 hours of work</h4>
                      </div>
                      <div class="yui-i">
                        <h2>Cal State Fullerton</h2>
                        <h4>Mechanical Engineering Major </h4>
                      </div>
                      <div class="yui-i">
                        <h2>Irvine Valley College</h2>
                        <p><span className="bold">Related Classes</span>: C, Java, Calculus I, II, III, Linear Algebra and Differential Equations</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div id="ft">
                <p>Shane Mcgrath | <a href="mailto:smcgrath7777@gmail.com">smcgrath7777@gmail.com</a> | (949)-554-9515</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Resume.contextType = AppContext;

export default Resume;