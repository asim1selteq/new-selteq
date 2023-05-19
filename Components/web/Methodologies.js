import React from 'react';
import styles from "../../styles/new-banner.module.css";

const Methodologies = () => {
    return (
        <div className="container-fluid py-4"
        style={{ backgroundImage: "url('./images/software-dev/bgdark.png')", height: '100%', width: 'auto', backgroundSize: 'cover' }}
        >
            {/* <div className="row">
                <div className="col-1"></div>
                <div className="col-10 text-center">
                    <h2 className={`${styles.heading1}`}>IOS DEVICE INTEGRATION</h2>
                    <p className={`${styles.para1}`} style={{ color: ' #888888' }}>Whether you need a simple sensor or a complex device, our team can design and build custom IoT devices that meet your specific needs. We can also help you with device firmware development, testing, and certification.</p>
                </div>
                <div className="col-1"></div>
            </div> */}

            <div className='container'>
            <div className="row ws-row1 d-flex align-items-center my-5">
                    <div className="col-md-6 col-12">
                        <h2 className={`text-light`}>Agile Methodologies and Smart Software Solutions</h2>
                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>Our team of experts will work with you to seamlessly integrate your IoT devices with your current systems and software, ensuring a smooth and efficient workflow. This includes integrating IoT devices with your existing databases, cloud systems, and other software applications.
                        </p>

                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>
                            <ul style={{ listStyle: 'none' }}>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-end">
                        <img src="./images/software-dev/w1.png" className='' alt='No image' style={{ height: 'auto', width: '300px' }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="col-md-6 col-12 d-flex justify-content-start">
                            <img src="./images/software-dev/w2.png" className='' alt='No image' style={{ height: 'auto', width: '250px' }} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 align-items-center">
                        <h2 className={`text-light`}>Remote Monitoring & Management of IoT Devices</h2>
                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>We offer remote monitoring and management services to ensure your IoT devices function properly and provide the data and insights you need. This includes monitoring device performance, troubleshooting issues, and reporting on device usage and performance.
                        </p>
                    </div>
                </div>

                <div className="row ws-row1 d-flex align-items-center my-5">
                    <div className="col-md-6 col-12">
                        <h2 className={`text-light`}>Agile Methodologies and Smart Software Solutions</h2>
                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>Our team of experts will work with you to seamlessly integrate your IoT devices with your current systems and software, ensuring a smooth and efficient workflow. This includes integrating IoT devices with your existing databases, cloud systems, and other software applications.
                        </p>

                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>
                            <ul style={{ listStyle: 'none' }}>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                                <li>Agile, software and methodologies.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-end">
                        <img src="./images/software-dev/w1.png" className='' alt='No image' style={{ height: 'auto', width: '300px' }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="col-md-6 col-12 d-flex justify-content-start">
                            <img src="./images/software-dev/w2.png" className='' alt='No image' style={{ height: 'auto', width: '250px' }} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 align-items-center">
                        <h2 className={`text-light`}>Remote Monitoring & Management of IoT Devices</h2>
                        <p className={`${styles.para2}`} style={{ color: ' #888888' }}>We offer remote monitoring and management services to ensure your IoT devices function properly and provide the data and insights you need. This includes monitoring device performance, troubleshooting issues, and reporting on device usage and performance.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex bg-transparent justify-content-center">
                        <button className={`${styles.bookingbtn}`}>BOOK CONSULTATION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Methodologies;
