import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Collapseproduct from "./Collapseproduct";
import sit from "../../public/images/sit.png"
import Image from "next/image";
import { useRouter } from "next/router";
function Productup() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }

    return (
        <div className="col-md-12 p-0">
            <div className="display_h">
                <div className="col-md-12 text-center py-5 ">
                    <h3><b>
                        {/* PROMISING DIGITAL GROWTH */}
                        Why Choose Selteq for Your IT Outsourcing Needs?
                    </b></h3>
                    <h6>Hire #1 Scalable Tech Talent</h6>
                    {/* <h6>WHY CHOOSE SELTEQ FOR SOFTWARE NEEDS?</h6> */}
                </div>
                <div className={styles.background_main_productup}>
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-6 ">
                                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                                    <h3 className={styles.software_head}> <b>Benefits of our IT Outsourcing Services</b></h3>
                                    
                                    <div className="col-md-12 p-0 mt-5">
                                        <Collapseproduct />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 text-center">
                                <Image src={sit} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile  */}
            <div className='col-md-12 pt-5 pb-5 display_pc background_img_for_mob'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3><b>
                            Benefits of our IT Outsourcing Services
                        </b></h3>
                        <div>
                            <h6><b>A Powerful IT Squad</b></h6>
                            Our outsourced development specialists have delivered hundreds of successful bespoke software projects to small and large enterprises & SMEs. Hiring a developer or a team translates to 100% confidentiality & seamless communication round the clock.
                            Even though you are completely involved with the team, our monitoring systems will keep track of the work progress. The stellar team of IT professionals can have you up and running with your next big project in no time. We are home to over 50 agile-trained and talented developers who can build, enhance and transform your existing software to best suit your needs and niche market.

                            <ul className="pl-3">
                                <li>
                                    Highly qualified and exceptionally skilled professionals.
                                </li>
                                <li>
                                    Create your dream team with our multiple hiring models.
                                </li>
                                <li>
                                    Get complete control of your team with 100% involvement.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6><b>Improving Business Efficiency</b></h6>
                            Selteq leads your project with a full-time, dedicated team from start to finish. Owing to our experience and expertise, our dedicated IT experts can help you achieve fully functional, intelligent, and robust software to perfectly complement your business needs. Augment your in-house IT professionals remotely with our Managed IT team – solely led by you.
                            Our managed IT model is designed to help our clients maintain a competitive edge through reliable IT systems. Our professionals will manage every aspect of your IT infrastructure to give your teams the flexibility and agility to respond quickly and strategically to business changes.

                            <ul className="pl-3">
                                <li>
                                    Flexible timings that will save you time & money.
                                </li>
                                <li>
                                    You’ll be authorized to access the source code.
                                </li>
                                <li>
                                    Secured development environment.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6><b>Flexible Development Methodologies</b></h6>
                            Our resources start building your system after carefully studying your business, determining business requirements, and identifying challenges your business faces. Based on the industry and the size of your business, Selteq’s dedicated IT resources will develop tailored solutions meant to benefit your business and its operations.
                            <ul className="pl-3">
                                <li>
                                    Check the Daily Reports every day to find out how your teams are doing.
                                </li>
                                <li>
                                    Stay connected with your offshore team no matter where they are, what time it is, or what device they use.
                                </li>
                                <li>
                                    Monitor your team’s performances, progress, and to-dos with the help of software like Redmine Basecamp, Jira, etc.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6><b>Fully-Functional & Scalable Product</b></h6>
                            All software solutions created by our full-stack developers can be upgraded and developed further to meet your future business needs. They are designed to be adapted to the processes and integrated with other systems.
                            The creation of business-friendly and effective software is possible only because of our latest development processes combined with the knowledge of our development maestros. Thanks to their experience and skill, they can approach every project the right way and hence provide software that improves your core business processes.
                        </div>

                        <div className='row mt-4 pt-2' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Create your own Winning Team</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Our global team of elite developers and designers can build your desktop, iOS and Android apps, LMS, ERP, Fintech, & CRM apps.</p>

                            </div>
                        </div>
                        
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Build & Lead the Team</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Be it starting from scratch, creating a prototype, or developing bespoke software, we can do it all using the latest methodologies.</p>

                            </div>
                        </div>
                        
                        {/* <div className='row mt-4' >
                        <div className='col-md-1 col-1 '>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>IoT Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Helping you connect your devices and systems to the internet, allowing you to collect and analyse data in real-time</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Maintenance and  Support</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our software development services don’t end after deployment. We also provide maintenance and support to ensure that your software stays up-to-date and runs smoothly.</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Chatbot Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Automating customer service and support by developing a chatbot to answer common questions and resolve issues.</p>
                        
                        </div>
                    </div> */}
                        <div className='col-md-12 padding_sol_1'>
                            <button onClick={() => contact()} className='btn btn-danger w-100 button_style_red'>
                                Book Consultation
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 display_h'>
                        <div className='col-md-12 text-center pl-5'>
                            <img className='img-fluid with_control' src='../images/girl1.png' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productup