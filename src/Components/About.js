import React from "react";
import { FormattedMessage } from "react-intl"
import CNS from "../Certifications/CNS.jpg"
import PJ from "../Certifications/ProgrammingInJava.jpg"
import DSE from "../Certifications/DataScienceForEngineers.jpg"
import FDS from "../Certifications/foundations_data_Science.JPG"
import BEC from "../Certifications/BECvantage.jpg"

function About(){
    return(
        <div className='subContents'>
            <p><FormattedMessage 
                    id='about'
                    defaultMessage='Cetifications' />
            </p>
            <div className="certsDiv">
                <img className="certs" src={CNS} alt="certificate" title="Cryptography and Network Security" width="200" height="200"/>         
                <img className="certs" src={PJ} alt="certificate" title="Fundamentals of Programming in Java" width="200" height="200"/>
                <img className="certs" src={DSE} alt="certificate" title="Data Science for Engineers" width="200" height="200"/>
                <img className="certs" src={FDS} alt="certificate" title="Foundations of data science" width="200" height="200"/>
                <img className="certs" src={BEC} alt="certificate" title="Business English Certificate Vantage" width="200" height="200"/>
            </div>
        </div>
    )
}

export default About