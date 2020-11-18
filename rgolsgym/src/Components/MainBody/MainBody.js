import React from "react";
import "./MainBody.css";
import group1 from "../../images/mainBody/Group-1.png";
import group2 from "../../images/mainBody/Group-2.png";
import group3 from "../../images/mainBody/Group-3.png";
import aboutUs from "../../images/mainBody/about-us.jpg";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import choose1 from "../../images/mainBody/choose-1.png";
import choose2 from "../../images/mainBody/choose-2.png";
import choose3 from "../../images/mainBody/choose-3.png";

const MainBody = () => {
    return (
        <main className="mainBody">
            <section>
                <section>
                    <div>
                        <img src={group1} alt="" />
                        <h2>PROGRESSION</h2>
                        <p>
                            Exercise progression is necessary in any exercise program to
                            improve strength and endurance. Muscles must be challenged
                            continuously in order to develop. Muscle will adapt over time to a
                            given load, becoming more efficient.
            </p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group2} alt="" />
                        <h2>WORKOUT</h2>
                        <p>
                            Workout is one of the most important factors in a persons’ life.
                            Physical activity, or the lack of it, can result in a person
                            having a healthy life or cause them to have diabetes. The benefits
                            of exercise are countless. The positive health results, the
                            improvement in attitude, even better academic performance are all
                            factors which make not exercising inexcusable.
            </p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group3} alt="" />
                        <h2>NUTRITION</h2>
                        <p>
                            <strong>'You are what you eat'</strong>
                            <br></br>Eating a proper, nutritious diet offers numerous health
              benefits that keep you mentally and physically well. Proper
              nutrition doesn’t mean starving yourself, but instead means eating
              a diet balanced in lean proteins, carbs and fats.
            </p>
                    </div>
                </section>
            </section>
            <section className="aboutUs">
                <img src={aboutUs} alt="" />
                <div>
                    <h1>ABOUT US</h1>
                    <h2>
                        <span style={{ color: "goldenrod" }}>WE ARE HERE TO DREAM!</span>
                        <br />
            OUR TEAM IS HERE SERVE YOU.
          </h2>
                    <p>
                        <ul>
                            <li>
                                Our fitness program is designed to provide a rounded workout
                                that will help you achieve a good level of overall fitness.
              </li>
                            <li>Prevents lifestyle-related reductions in health</li>
                            <li>
                                Extremely hygienic workout area. We make our fitness club extra
                                clean for you
              </li>
                        </ul>
                    </p>
                </div>
            </section>
            <section className="programs">
                <h2>
                    TRAINING <span style={{ color: "goldenrod" }}>PROGRAMS</span>
                </h2>
                <div className="programsOption">
                    <div>
                        <Button>
                            YOGA TRAINING SESSION{" "}
                            <FontAwesomeIcon
                                style={{ marginLeft: "10px" }}
                                icon={faArrowRight}
                            />
                        </Button>
                    </div>
                    <div>
                        <Button>
                            CARDIO TRAINING SESSION{" "}
                            <FontAwesomeIcon
                                style={{ marginLeft: "10px" }}
                                icon={faArrowRight}
                            />
                        </Button>
                    </div>
                </div>
            </section>
            <section className="chooseUs">
                <h2>
                    <span style={{ color: "goldenrod" }}>WHY</span> CHOOSE US
        </h2>
                <div className="chooseUsOption">
                    <div>
                        <div>
                            <img src={choose1} alt="" />
                            <h3>FREE FITNESS TRAINING</h3>
                            <p>
                                There is no such fee from us for getting fit in this fitness
                                hub.
              </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={choose2} alt="" />
                            <h3>TONS OF CARDIO & STRENGTH</h3>
                            <p>
                                The great thing about cardio is that you don't have to work out
                                for an hour at a high-intensity to get the benefits. Even a
                                little goes a long way. A 15-minute walk outside can boost your
                                mood and help lower blood pressure.
              </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={choose3} alt="" />
                            <h3>NO COMMITMENT MEMBERSHIP</h3>
                            <p>
                                With our no commitment membership, there is no lengthy minimum
                                term. Enjoy a rolling monthly membership that you can cancel or
                                change at any time, perfect if you want to give us a try.
              </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainBody;
