import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/Process.module.css"

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)

  return (
    <div className="col-sm-12 p-0 margin_set_for_new pt-4">
      <div className="col-md-12 p-0 display_h">
        {tabone == 1 ? (
          // Tab one
          <div className="col-md-12 pt-0 px-0">
            <div className={styles.background_process1}>
              <h3 className="text-light text-center pt-0 pb-3">Selteq’s IT Outsourcing Models</h3>
              {/* button section  */}
              <div className="container pt-3">
                <div className="display_fleex ">
                  <div className="px-4"  >
                    <button
                      className={styles.button_process_active}
                      onClick={() => setTabone(1)}
                    >
                      {/* <span className="btn_active_text"> 
                    
                   </span> */}
                      IT Staff <br />Augmentation
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(2)}
                    >
                      Dedicated  <br />IT Team
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(3)}
                    >
                      IT Infrastructure <br /> Outsourcing
                      {/* Managed  <br/>IT Team */}
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(4)}
                    >

                      Full-Process <br />Outsourcing
                      {/* Why Hire <br/> Us? */}
                    </button>
                  </div>
                  {/* <div >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
                  </button>
                </div> */}


                  {/* <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div> */}
                </div>
              </div>

              {/* body of the content    */}
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-7 mt-5">
                    <h5 className={styles.heading_process}>
                      A Powerful IT Squad Tailored to Your Project
                    </h5>
                    <p className={styles.subheading_process}>
                      Our IT staff augmentation service is designed to help businesses find the right IT talent to augment their existing teams. We provide skilled IT professionals who work as an extension of your in-house team to help you scale your operations and deliver projects faster.
                      Our team of experts has diverse skills and experience, making it easy to find the right fit for your organization.
                    </p>
                    <div className="col-md-12 px-0 mt-5">
                      <h5 className={styles.heading_process}>
                        <Link className="text_dec_link" href="/contact-us">Book Consultation&nbsp;&nbsp;&nbsp;
                          <button className={styles.button_right}>
                            {" "}
                            <span className={styles.icon_size}>
                              {" "}
                              <i class="fas fa-arrow-right"></i>{" "}
                            </span>
                          </button>{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-5">
                    {/* <img src="../images/vxcc1.png" className="img-fluid img_set_pos" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : tabone == 2 ? (
          <div className={styles.background_process2}>
            {/* // Tab 2 */}
            <h3 className="text-light text-center pt-0 pb-3">Selteq’s IT Outsourcing Models</h3>
            <div className="col-md-12 p-0">
              {/* button section  */}
              <div className="container pt-3">
                <div className="display_fleex ">
                  <div className="px-4"  >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(1)}
                    >
                      {/* Fully 
                  <br/> Managed
                  IT Services */}
                      IT Staff
                      <br /> Augmentation
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_active}
                      onClick={() => setTabone(2)}
                    >
                      <span className="btn_active_text">   Dedicated</span>  <br />IT Team
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(3)}
                    >

                      IT Infrastructure<br />Outsourcing
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(4)}
                    >
                      Full-Process <br />Outsourcing
                    </button>
                  </div>
                  {/* <div >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
                  </button>
                </div> */}


                  {/* <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div> */}
                </div>
              </div>

              {/* body of the content    */}
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-7 mt-5">
                    <h5 className={styles.heading_process}>
                      Improving Business Efficiency
                    </h5>
                    <p className={styles.subheading_process}>
                      Our dedicated IT team service is perfect for businesses that need a dedicated team to work on their IT projects. We provide a team of experienced IT professionals who work exclusively on your project, ensuring high-quality deliverables and timely completion.
                      Our dedicated teams are fully integrated with your in-house team and work closely with you to ensure your project is delivered on time and within budget.
                    </p>
                    <div className="col-md-12 px-0 mt-5">
                      <h5 className={styles.heading_process}>
                        Book Consultation&nbsp;&nbsp;&nbsp;
                        <button className={styles.button_right}>
                          {" "}
                          <span className={styles.icon_size}>
                            {" "}
                            <i class="fas fa-arrow-right"></i>{" "}
                          </span>
                        </button>{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
            </div>
          </div>
        ) : tabone == 3 ? (
          <div className={styles.background_process4}>
            {/* // Tab 3 */}
            <h3 className="text-light text-center pt-0 pb-3">Selteq’s IT Outsourcing Models</h3>
            <div className="col-md-12 p-0">
              {/* button section  */}
              <div className="container pt-3">
                <div className="display_fleex ">
                  <div className="px-4"  >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(1)}
                    >
                      IT Staff
                      <br />Augmentation
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(2)}
                    >
                      Dedicated  <br />IT Team
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_active}
                      onClick={() => setTabone(3)}
                    >

                      <span className="btn_active_text">    IT Infrastructure </span>  <br />Outsourcing
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(4)}
                    >
                      Full-Process <br /> Outsourcing
                    </button>
                  </div>
                  {/* <div >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
                  </button>
                </div> */}


                  {/* <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div> */}
                </div>
              </div>

              {/* body of the content    */}
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-7 mt-5">
                    <h5 className={styles.heading_process}>
                      Qualified Professionals
                    </h5>
                    <p className={styles.subheading_process}>
                      Our IT infrastructure outsourcing service is designed to help businesses streamline their IT operations and reduce costs. We provide end-to-end IT infrastructure management, including hardware, software, and network management.
                      Our team of experts works closely with your in-house IT team to ensure your IT infrastructure is secure, reliable, and scalable.
                    </p>
                    <div className="col-md-12 px-0 mt-5">
                      <h5 className={styles.heading_process}>
                        Book Consultation&nbsp;&nbsp;&nbsp;
                        <button className={styles.button_right}>
                          {" "}
                          <span className={styles.icon_size}>
                            {" "}
                            <i class="fas fa-arrow-right"></i>{" "}
                          </span>
                        </button>{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
            </div>
          </div>
        ) : tabone == 4 ? (
          <div className={styles.background_process3}>
            <h3 className="text-light text-center pt-0 pb-3">Selteq’s IT Outsourcing Models</h3>
            {/* // Tab 4 */}
            <div className="col-md-12 p-0">
              {/* button section  */}
              <div className="container pt-3">
                <div className="display_fleex ">
                  <div className="px-4"  >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(1)}
                    >
                      IT Staff
                      <br /> Augmentation
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(2)}
                    >
                      Dedicated  <br />IT Team
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_one}
                      onClick={() => setTabone(3)}
                    >

                      IT Infrastructure  <br />Outsourcing
                    </button>
                  </div>
                  <div className="px-4" >
                    <button
                      className={styles.button_process_active}
                      onClick={() => setTabone(4)}
                    >


                      <span className="btn_active_text">Full-Process</span> <br />Outsourcing
                    </button>
                  </div>
                  {/* <div >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
                  </button>
                </div> */}


                  {/* <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div> */}
                </div>
              </div>

              {/* body of the content    */}
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-7 mt-5">
                    <h5 className={styles.heading_process}>
                      Create your Dream Team Today
                    </h5>

                    <div className="col-md-12">
                      <p className={styles.subheading_process}>
                        Our full-process outsourcing service is designed to help businesses outsource their IT operations. We provide end-to-end IT services, including software development, infrastructure management, and support services.
                        Our team of experts works closely with your business to ensure that your IT operations are efficient, scalable, and secure. With our full process outsourcing service, you can focus on your core business operations while we care for your IT needs.
                      </p>

                      {/* <ul>
                        <li className={styles.subheading_process_lis}> Highly qualified and exceptionally skilled professionals.</li>
                        <li className={styles.subheading_process_lis}>Create your dream team with our multiple hiring models.</li>
                        <li className={styles.subheading_process_lis}>Get complete control of your team with 100% involvement</li>
                        <li className={styles.subheading_process_lis}>Check the Daily Reports every day to find out how your teams are doing.</li>

                        <li className={styles.subheading_process_lis}>Stay connected with your offshore team no matter where they are, what time it is, or what device they’re using.</li>
                        <li className={styles.subheading_process_lis}>Monitor your team’s performances, progress, and to-dos with the help of software like Redmine Basecamp, Jira, etc.</li>
                        <li className={styles.subheading_process_lis}>Flexible timings that will save you time & money.</li>
                        <li className={styles.subheading_process_lis}>You’ll be authorised to access the source code.</li>
                        <li className={styles.subheading_process_lis}>Secured development area</li>
                        <li className={styles.subheading_process_lis}>Complying with deadlines</li>

                      </ul> */}
                    </div>


                    <div className="col-md-12 px-0 mt-5">
                      <h5 className={styles.heading_process}>
                        Book Consultation&nbsp;&nbsp;&nbsp;
                        <button className={styles.button_right}>
                          {" "}
                          <span className={styles.icon_size}>
                            {" "}
                            <i class="fas fa-arrow-right"></i>{" "}
                          </span>
                        </button>{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
            </div>
          </div>
        ) : null}


      </div>
      {/* mobile  */}
      <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12">
          <div className="row pt-2">
            <div className="col-md-6 col-5 cust_padding m-auto  text-left">
              <img className="img_width_sel" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/sel.png" />
            </div>
            <div className="col-md-6 col-7">
              <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png" className="img-fluid " />
            </div>
          </div>
        </div>
        <div className={styles.background_process1}>
          <div className="col-md-12 text-center">
            <h6 className="text_color_heading_white">SALIENT FEATURES</h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">Flexible Development Methodologies</p>
            <p className="mb-0 sub_text_promising pt-2">Our resources start building your system after carefully determining your requirements & identifying challenges.</p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Integration Of Innovative Methodologies</p>
            <p className="mb-0 sub_text_promising pt-2">The creation of business-friendly software is possible only because of our latest development processes combined with the knowledge of our maestros.</p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">Fully-Functional & Scalable Software</p>
            <p className="mb-0 sub_text_promising pt-2">All software solutions created by our full-stack developers are designed to be adapted to the processes and integrated with other systems.</p>
          </div>
          {/* <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Create a Winning Team</p>
          <p className="mb-0 sub_text_promising pt-2">Our dedicated development team, talented technologists & QA teams ensure your project runs smoothly.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">Customer-Tailored Solutions</p>
          <p className="mb-0 sub_text_promising pt-2">We understand the challenges you face and adapt ourselves to your processes and business culture.</p>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Process
