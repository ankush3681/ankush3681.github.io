import React from "react";
import belk from "../Files/belk.png";
import mg from "../Files/1mg.png";
import myglow from "../Files/myglow.png";
import myntra from "../Files/myntra.png";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
    return (
        <>
            <section id="projects">
                <div className="project-main-text">
                    <h2>
                        <span>Projects</span>
                    </h2>
                    <p style={{ marginTop: "2%",fontSize:"larger",color:'white'}}>Some of the things that i have built...</p>
                </div>


                <div className="nav-link projects" id="nav-link-projects">
                    <div className="project-card">
                        <img src={belk} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of belk</h5>
                            <p className="project-description">
                            An individual project which is basically a clone of Belk which is a UK based website that deals with different fashion and home decor things.
                            </p>
                            <p className="project-tech-stack">
                                Tech-Stack : REACT, JS, HTML, CSS, CHAKRA UI
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://wholemart.netlify.app/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/ankush3681/honest-boat-2230"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={mg} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Tata 1MG</h5>
                            <p className="project-description">
                                Dollar store is a domestic merchandise retail stores.Inspired from Bed Bath & Beyond that was founded in 1971.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS, REACT,REDUX, CHAKRA UI,EXPRESS,MONGODB,MONGOOSE</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://medigreenhealth.netlify.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/AyushiVashisth/medi-green-health"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={myntra} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Myntra</h5>
                            <p className="project-description">
                            This is the clone of Myntra website which basically deals with various fashion and style products.An Individual project made in 5 days
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://brilliant-gnome-813844.netlify.app/index.html"
                                        target="_blank"
                                    >
                                        <i>
                                            Live {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/ankush3681/medical-ducks-5598"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={myglow} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Sugar Cosmetics</h5>
                            <p className="project-description">
                            This is the clone of sugarcosmetic website which basically deals with various cosmentics products . Collabarative project of 5 members. Duration- 5 days.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS, REACT, REDUX, CHAKRA UI</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://my-glow-ankush3681.vercel.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/ankush3681/noisy-mailbox-2939"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
