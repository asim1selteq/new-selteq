import { useState } from "react";
import styles from "../../styles/digital.module.css";
import sit from "../../public/images/sit.png"
import Image from "next/image";
import Collapseproductd from "../Collapseall/Collapseproductd";
function Productupd() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center py-5 px-0 ">
           
            <h3><b>Personalised Customer Experiences</b></h3>
            <h6 className="font_small_b">Help you to turn more of your visitors
into paying customers:</h6>
        
        </div>
        <div className={styles.background_main_productup}>
        <div className="container padding_bankfinance">
            <div className="row" > 
            <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                    {/* <h3 className={styles.software_head}> <b>Advancing through Digital Mastery</b></h3> */}
                    <div className="col-md-12 p-0 mt-5">
                        <Collapseproductd />
                    </div>
                </div>
               
            </div>
            <div className="col-md-6 text-center">
                <Image src={sit} alt='sit-up' className="img-fluid"  />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Productupd