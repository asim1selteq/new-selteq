import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "../styles/Process.module.css"

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)
  const Tabon =()=>{
    setTabone
  }
  // useEffect(() => {
  //   localStorage.Tabon('tabone', JSON.stringify(tabone));
  // }, [tabone]);
  // const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('tabone', JSON.stringify(tabone));
}, [tabone])


  return (
    <div className="col-sm-12 p-0  margin_set_for_new pt-md-4">
      <div className="col-md-12 p-0 display_h">
      
      
        {tabone == 1 ? (
          // Tab one
          <div className="col-md-12 pt-0 px-0">
            <div className={styles.background_process1}>
            {/* button section  */}
            <div className="container pt-3">
              <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(1)}
                  >
                   <span className="btn_active_text"> Progressive
                   </span> <br/> & Agile
                   Software
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    Software <br/>   Development 
                  Process
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    Thriving <br/> Businesses
                    Digitally
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
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
                  Agile Methodologies & Smart Software Solutions
                  </h5>
                  <p className={styles.subheading_process}>
                  We don’t waste time coding. We make progress. Whether you need custom development or integration between various systems and line-of-business software, we know just how to make your business shine. We use industry standards like:
                  </p>
                  <div className="col-md-12 ">
                  <ul>
                    <li className={styles.subheading_process_lis}>XP, Agile, Unified Process</li>
                    <li className={styles.subheading_process_lis}>Pair Programming, Refactoring, Continuous Integration</li>
                    <li className={styles.subheading_process_lis}>PHP, JavaScript, Python, Angular, React, NodeJS</li>
                    <li className={styles.subheading_process_lis}>Native App Development, Big Data Computation</li>
                    <li className={styles.subheading_process_lis}>Progressive Web Apps, Cross-platform and Hybrid Deployment</li>
                   
                  </ul>
                  </div>
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                  <Link className="text_dec_link" href="/contact-us">  Book Consultation&nbsp;&nbsp;&nbsp;
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
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                   Progressive
                   <br/> & Agile
                   Software
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(2)}
                  >
                    <span className="btn_active_text"> Software </span> <br/>   Development 
                  Process
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    Thriving <br/> Businesses
                    Digitally
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
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
                  Collaborative Development 
                  </h5>
                  <p className={styles.subheading_process}>
                  We believe in continuous communication with all parties involved, from the client to the management. Our development process starts with detailed discussions on the client’s vision and goals. This is followed by planning and design phases, where we work closely with our clients to define all the aspects of the project. The delivery phase consists of development and testing, where we continuously interact with our clients for feedback and input. Once the product is delivered, we provide maintenance support and guidance on future development
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
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                  Progressive
                  <br/> & Agile
                   Software
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    Software <br/>   Development 
                  Process
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(3)}
                  >
                    
                    <span className="btn_active_text"> Thriving</span> <br/> Businesses
                    Digitally
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    Our <br/> Specialities
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
                Agile & Iterative Process
                  </h5>
                  <p className={styles.subheading_process}>
                  We take a tailor-made approach, which is different from standard off-the-shelf software. We adopt an Agile methodology, emphasising collaboration, flexibility, and continuous improvement. We work iteratively to deliver the best possible outcome and projects on time. Our process means you’ll always be involved along the journey. 
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}>Evolving needs met</li>
                    <li className={styles.subheading_process_lis}>Continuous integration & delivery</li>
                    <li className={styles.subheading_process_lis}>Seamless deployment & delivery of final product</li>
                   </ul>
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
        ) : tabone == 4 ? (
          <div className={styles.background_process3}>
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
                 Progressive
                  <br/> & Agile
                   Software
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    Software <br/>   Development 
                  Process
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    Thriving <br/> Businesses
                    Digitally
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    <span className="btn_active_text"> Our</span> <br/> Specialities
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
                High-Performance Solutions
                  </h5>
                  
                  <p className={styles.subheading_process}>
                  A pool of 50+ highly talented software engineers working on your project to deliver high-performance software solutions. We lead the UK market thanks to our dextrous developers, who’ve been integrating cutting-edge methodologies & futuristic technologies into your project for over a decade. 
                  </p>
                  <p className={styles.subheading_process}>
                  Our software engineers are proficient in various programming languages and development frameworks such as Java, Python, Node.js, and React. We use a DevOps approach that integrates software development and operations to deliver software faster and with higher quality.
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
        ): null}
     
    
      </div>

      {/* mobile  */}
      <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12">
      <div className="row pt-2">
                <div className="col-md-6 col-5 cust_padding m-auto  text-left">
                    <img className="img_width_sel"  src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/sel.png" />
                </div>
                <div className="col-md-6 col-7">
                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png" className="img-fluid " />
                </div>
            </div>
            </div>
      <div className={styles.background_process1}>
         <div className="col-md-12 text-center">
          <h6 className="text_color_heading_white">Promising Digital Growth</h6>
         </div>
        <div className="col-md-12 px-4">
          <p className="mb-0 text_promising">Multiple Technologies</p>
          <p className="mb-0 sub_text_promising pt-2">We’re experts in our core technologies and thrive from learning new ones in modern development projects.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Development Methodologies</p>
          <p className="mb-0 sub_text_promising pt-2">We offer various development processes that you can select based on your own needs.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Software Architects & Consultants</p>
          <p className="mb-0 sub_text_promising pt-2">Comprehensive consulting services technical design, and a high-level architecture to meet your needs.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Create a Winning Team</p>
          <p className="mb-0 sub_text_promising pt-2">Our dedicated development team, talented technologists & QA teams ensure your project runs smoothly.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">Customer-Tailored Solutions</p>
          <p className="mb-0 sub_text_promising pt-2">We understand the challenges you face and adapt ourselves to your processes and business culture.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Process
