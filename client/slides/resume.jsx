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
                <div className="yui-gc">
                  <div className="yui-u first">
                    <h1>Shane Mcgrath</h1>
                    <h2>Software Engineer</h2>
                  </div>

                  <div className="yui-u">
                    <div className="contact-info">
                      <h3><a href="mailto:smcgrath7777@gmail.com">smcgrath7777@gmail.com</a></h3>
                      <h3>(949)-554-9515</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div id="bd">
                <div id="yui-main">
                  <div className="yui-b">

                    <div className="yui-gf">
                      <div className="yui-u first">
                        <h2>Experience</h2>
                      </div>

                      <div className="yui-i">

                        <div className="job">
                          <h2>Headwire.com Inc.</h2>
                          <h3>Frontend Software Engineer</h3>
                          <h4>Dec 2019 - May 2020</h4>
                          <ul>
                            <li>Managed JSP and Slightly files using AEM 6.1+ to build components and pages </li>
                            <li>Worked closely with clientlibs and models using JavaScript and Java </li>
                            <li>Samples of work 
                              <ul>
                                <li><a href="https://www.golfdigest.com" target="_blank">Golf Digest</a></li>
                                <li><a href="https://docs.paloaltonetworks.com" target="_blank">Palo Alto Networks Documentation</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div className="yui-gf last">
                      <div className="yui-u first">
                        <h2>Education</h2>
                      </div>
                      <div className="yui-i">
                        <h2>LearningFuze Immersive Coding Bootcamp</h2>
                        <p>Immersed in a 3-month full stack development bootcamp to learn the fundamentals of web and software development with over 800 hours of work in total (~70hrs/week)</p>
                      </div>
                      <div className="yui-i">
                        <h2>Cal State Fullerton</h2>
                        <h4 className="college-major">Mechanical Engineering</h4>
                      </div>
                      <div className="yui-i">
                        <h2>Irvine Valley College</h2>
                        <p><span className="bold">Related Classes</span></p>
                        <ul>
                          <li>C</li>
                          <li>Java</li>
                          <li>Data Stuctures and Algorithms</li>
                          <li>Calculus I, II, III</li>
                          <li>Linear Algebra and Differential Equations</li>
                        </ul>
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