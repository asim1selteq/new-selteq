import styles from "../../styles/new-banner.module.css";
import "react-multi-carousel/lib/styles.css";

function IosBanner() {
  return (
    <div className="col-md-12 p-0">
      <div className="d-flex align-items-center text-light position-relative w-100 "
        style={{ backgroundImage: "url('./images/software-dev/banner1.jpg')", height: '90vh', backgroundSize: 'cover' }}
      >
        <div className="h-100 w-100 position-absolute" style={{ opacity: '.7', backgroundColor: '#101548' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <p className={`${styles.spacedCharacter} mb-0 pb-2`}>YOUR ONE-STEP SHOP FOR</p>
              <h2 className={`pt-0 mt-0 mb-5 ${styles.heading2}`}><b>IOT SOFTWARE DEVELOPMENT SERVICES</b></h2>
              <p className={`${styles.para4} mt-1`}>
                The Internet of Things (IoT) is revolutionising the way businesses operate. With the integration of IoT technology, businesses can now connect and automate various devices and systems to improve efficiency, reduce costs, and gain valuable insights.
              </p>
              <button className={`${styles.bookingbtn1}`}>BOOK CONSULTATION</button>
            </div>
            <div className="col-md-6 col-12"></div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 text-center">
            <h2 className={`${styles.heading3} mt-2`}><b>IOS DEVICE INTEGRATION</b></h2>
            <p className={`${styles.para5} mt-3`} style={{ color: ' #888888' }}>Whether you need a simple sensor or a complex device, our team can design and build custom IoT devices that meet your specific needs. We can also help you with device firmware development, testing, and certification.</p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row ws-row1 d-flex align-items-center my-5">
          <div className="col-lg-6 col-12">
            <h2 className={`${styles.heading3}`}><b>Integration of IoT Devices <br/> with Existing Systems</b></h2>
            <p className={`${styles.para5} mt-3`} style={{ color: ' #888888' }}>Our team of experts will work with you to seamlessly integrate your IoT devices with your current systems and software, ensuring a smooth and efficient workflow. This includes integrating IoT devices with your existing databases, cloud systems, and other software applications.
            </p>
          </div>
          <div className="col-lg-6 col-12 d-md-flex justify-content-center">
            <img src="./images/software-dev/cloudy.png" alt='No image' style={{ height: 'auto', width: '600px' }} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="col-lg-6 col-12">
              <img src="./images/software-dev/f.png" className='' alt='No image' style={{ height: 'auto', width: '450px' }} />
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
            <h2 className={`${styles.heading3}`}><b>Remote Monitoring & Management of IoT Devices</b></h2>
            <p className={`${styles.para3}`} style={{ color: ' #888888' }}>We offer remote monitoring and management services to ensure your IoT devices function properly and provide the data and insights you need. This includes monitoring device performance, troubleshooting issues, and reporting on device usage and performance.
            </p>
          </div>

          <div className="col-lg-6 col-12 d-lg-none d-md-flex justify-content-center">
            <div className="col-md-6 col-12">
              <img src="./images/software-dev/f.png" className='' alt='No image' style={{ height: 'auto', width: '400px' }} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button className={`${styles.bookingbtn}`}>BOOK CONSULTATION</button>
          </div>
        </div>
      </div>

      <div className="container-fluid px-5 background_gradiant_radial"
        style={{ backgroundImage: "url('./images/software-dev/bluebg.jpg')", backgroundSize: 'cover' }}
      >

        <div className="row px-lg-5 py-5 px-0">
          <div className="col-12">
            <div className="row">
              <div className="col-2 d-lg-block d-none"></div>
              <div className="col-lg-8 col-12 text-light">
                <h2 className={`text-center ${styles.heading3}`}><b>IOT Data Management</b></h2>
                <p className={`${styles.para2} text-center`} style={{ color: '#AFCFFF' }}>Our team of experts specialises in providing advanced IoT data management solutions to help you collect, store, and analyse your data in real time.
                </p>
              </div>
              <div className="col-2 d-lg-block d-none"></div>
            </div>

            <div className="row mt-3 ">
              <div className="col-lg-4 col-12 d-flex justify-content-center">
                <div className="bg-light p-4 h-auto mt-lg-0 mt-4 shadow_box">
                  <p className={`${styles.minipara} text-center pt-2`}><b>Real-Time Data Collection & Analysis</b></p>
                  <div className="w-100 mt-4 mb-4 d-flex justify-content-center">
                    <img className="text-center" src="./images/software-dev/m3.png" style={{ height: '50px' }} />
                  </div>
                  <p className={`${styles.para5}`}>Collecting data from your IoT devices in real-time and performing advanced analysis on that data to gain valuable insights.</p>
                </div>
              </div>

              <div className="col-lg-4 col-12 d-flex justify-content-center">
                <div className="bg-light p-4 h-auto mt-lg-0 mt-4 shadow_box">
                  <p className={`${styles.minipara} text-center pt-2`}><b>Data Storage & Retrieval</b></p>
                  <div className="w-100 mt-4 mb-4 d-flex justify-content-center">
                    <img className="text-center" src="./images/software-dev/m1.png" style={{ height: '50px' }} />
                  </div>
                  <p className={`${styles.para5}`}>
                    Secure and reliable storage solutions for your IoT data, including on-premises and cloud-based options.                    </p>
                </div>
              </div>

              <div className="col-lg-4 col-12 d-flex justify-content-center">
                <div className="bg-light p-4 h-auto mt-lg-0 mt-4 shadow_box">
                  <p className={`${styles.minipara} text-center pt-2`}><b>Data Visualisation & Reporting</b></p>
                  <div className="w-100 mt-4 mb-4 d-flex justify-content-center">
                    <img className="text-center" src="./images/software-dev/m2.png" style={{ height: '50px' }} />
                  </div>
                  <p className={`${styles.para5}`}>
                    Visualise your data in an easy-to-understand format. Create custom dashboards and export data in various formats for further analysis.                    </p>
                </div>
              </div>
              <div className="col-2"></div>
            </div>

            <div className="row mt-5 pt-5 mb-4">
              <div className="col-2 d-lg-block d-none"></div>
              <div className="col-lg-8 col-12 text-light">
                <h2 className={`text-center ${styles.heading3}`}><b>IoT Software Integration</b></h2>
                <p className={`${styles.para2} text-center`} style={{ color: '#AFCFFF' }}>
                  We can help you connect your IoT devices and platforms to your existing systems, such as ERP, CRM, and other software.          </p>
              </div>
              <div className="col-2 d-lg-block d-none"></div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-sm-6 col-12 mb-lg-0 mb-4">
                <div className={`bg-transparant text-light p-3 pt-3 border_hover h-lg-100  pb-5 h-sm-auto`} >
                  <div className="w-100 pb-4 d-flex justify-content-center">
                    <img className="text-center w-auto mt-3" src="./images/software-dev/i0.png" style={{ height: '35px' }} />
                  </div>

                  <div className="w-100">
                    <p className={`${styles.para4}`}><b>Cloud Integration</b></p>
                    <p className={`${styles.para5}`}>
                      Integrating IoT devices with cloud-based storage & analysis platforms. Efficient storage of large amounts of data generated by IoT devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 col-12 mb-lg-0 mb-4">
                <div className="bg-transparant text-light p-3 border_hover pb-5  h-lg-100 h-sm-100 h-auto">
                  <div className="w-100 pb-4 d-flex justify-content-center">
                    <img className="text-center w-auto mt-3" src="./images/software-dev/i2.png" style={{ height: '35px' }} />
                  </div>

                  <div className="w-100">
                    <p className={`${styles.para4}`}><b>Data Processing</b></p>
                    <p className={`${styles.para5}`}>
                      The real-time streaming of data generated by IoT devices that quickly process the data and respond to changes in their own environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 col-12 mb-lg-0 mb-4">
                <div className="bg-transparant text-light p-3 border_hover pb-5  h-lg-100 h-auto">
                  <div className="w-100 pb-4 d-flex justify-content-center">
                    <img className="text-center w-auto mt-3" src="./images/software-dev/i3.png" style={{ height: '35px' }} />
                  </div>

                  <div className="w-100">
                    <p className={`${styles.para4}`}><b>Third-Party Services</b></p>
                    <p className={`${styles.para5}`}>
                      Integrating IoT devices with third-party services and APIs that leverage other platforms&apos; capabilities to enhance the functionality.                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 col-12 mb-lg-0 mb-4">
                <div className="bg-transparant text-light p-3 border_hover pb-5  h-lg-100 auto">
                  <div className="w-100 pb-4 d-flex justify-content-center">
                    <img className="text-center w-auto mt-3" src="./images/software-dev/i4.png" style={{ height: '35px' }} />
                  </div>

                  <div className="w-100">
                    <p className={`${styles.para4}`}><b>Security Measures</b></p>
                    <p className={`${styles.para5}`}>
                      Implementing security & privacy measures that include encryption, access controls, & secured data storage.                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 d-flex align-items-center d-sm-flex justify-content-center">
                <img src="./images/software-dev/computer.png" className="h-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 h-auto" style={{ backgroundImage: "url('./images/software-dev/bframe.jpg')", minHeight: '145vh', color: 'white', backgroundSize: 'cover', }}>
        <div className="container">
          <h3 className={`${styles.heading1} pt-5`}>IoT Security</h3>
          <p className={`${styles.footerpara}`}>Our team can help you secure your IoT ecosystem by implementing <br /> end-to-end encryption, firewalls, and other security measures.
          </p>
          <div className="row" style={{ position: '', marginTop: '180px' }}>
            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara}`}><b>End-To-End Encryption for Secure Data Transfer</b></p>
              <p className={`${styles.footerpara}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>

            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara}`}><b>Secure Device Management</b></p>
              <p className={`${styles.footerpara}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>

            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara}`}><b>Penetration Testing & Vulnerability Assessments</b></p>
              <p className={`${styles.footerpara}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>
            <div className="col-md-3 col-12"></div>
          </div>
        </div>


        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-12"></div>
            <div className="col-md-6 col-12">
              <h3 className={`pt-5 ${styles.text_to_end} ${styles.heading1}`}>IoT Consulting</h3>
              <p className={`${styles.footerpara} ${styles.text_to_end}`}>Not sure where to start with IoT? Our team of experts can help you identify opportunities and develop a strategic plan for implementing IoT in your organisation.
              </p>
            </div>
          </div>

          <div className="row mt-5" style={{}}>
            <div className="col-md-3 col-12"></div>
            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara} ${styles.text_to_end}`}><b>Strategy & Planning</b></p>
              <p className={`${styles.footerpara} ${styles.text_to_end}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>

            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara} ${styles.text_to_end}`}><b>Secure Device Management</b></p>
              <p className={`${styles.footerpara} ${styles.text_to_end}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>

            <div className="col-md-3 col-12">
              <p className={`${styles.footerpara} ${styles.text_to_end}`}><b>Penetration Testing</b></p>
              <p className={`${styles.footerpara} ${styles.text_to_end}`}>Helps prevent unauthorised access to data while it&apos;s in transit. It includes regular security testing to ensure the system remains secure over time.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className={`${styles.bookingbtn} `}>Book Consultation</button>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default IosBanner