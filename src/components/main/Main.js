import React from "react";
import Icon from "../img/coding.png";
import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="main-header">
          <div className="main-page-title">
            Hello , I am Usamah <br /> FrontEnd Developer
          </div>
          <div className="main-page-image">
            <img src={Icon} className="image-items" />
          </div>
        </div>

        <div className="main-content">
          <p className="main-content-title" id="about">
            <span>About</span>
          </p>
          <div className="main-content-about-page">
            <div className="about-content">
              <p className="about-content-title">
                <span><i className="fa fa-user"></i></span>
              </p>
              <p className="about-content-self">
                <b>Name :</b> Usamah Basalamah
                <br />
                <b>Birth :</b> 16 December 2001
                <br />
                <b>Address :</b> Cirebon City
                <br />
                <b>Hobby :</b> Futsal and Learn Code
              </p>
            </div>

            <div className="about-content">
              <p className="about-content-title">
                <span><i className="fa fa-user-graduate"></i></span>
              </p>
              <p className="about-content-self">
                <b>TK :</b> TKIT Al-Irsyad Al-Islamiyyah
                <br />
                <b>SD :</b> SDIT Al-Irsyad Al-Islamiyyah
                <br />
                <b>SMP :</b> SMP Negeri 1 Lemahabang
                <br />
                <b>SMA :</b> SMA Negeri 1 Lemahabang
              </p>
            </div>
          </div>

          <div className="main-content-skill">
            <p className="main-content-title" id="skill">
              <span>Skill</span>
            </p>

            <div className="scroll">
              <div className="card">
                <div className="box">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        45<span>%</span>
                      </h2>
                    </div>
                    <h1 class="code">
                      Html <i class="fab fa-html5"></i>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="box">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        35<span>%</span>
                      </h2>
                    </div>
                    <h1 class="code">
                      CSS <i class="fab fa-css3"></i>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        25<span>%</span>
                      </h2>
                    </div>
                    <h1 class="code">
                      Javascript <i class="fab fa-js"></i>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content-contact">
            <p className="main-content-title" id="contact">
              <span>Contact</span>
            </p>

            <div className="contact-container">
              <form>
                <label>Email :</label>
                <input type="text" placeholder="Enter your email"/>

                <br/>

                <label>Name :</label>
                <input type="text" placeholder="Enter your name"/>

                <br/>

                <label>Message :</label>
                <textarea type="text" placeholder="Enter your message"></textarea>
              </form>
            </div>

            <a className="btn send">Send</a>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
