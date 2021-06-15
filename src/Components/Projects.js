import React from "react";
import { FormattedMessage } from "react-intl"
import RD1 from "../RDinfo/web_1_1.png"
import RD2 from "../RDinfo/web_1_2.png"
import RD3 from "../RDinfo/web_2_1.png"
import RD4 from "../RDinfo/web_3_1.png"
import RD5 from "../RDinfo/web_3_2.png"
import RD6 from "../RDinfo/web_4_1.png"
import RD7 from "../RDinfo/web_5_1.png"
import RD8 from "../RDinfo/web_6_1.png"
import RD9 from "../RDinfo/web_6_2.png"

function Projects(){
    return(
        <div className='projects'>            
            <p><FormattedMessage id='next' defaultMessage='Projects' /></p>
            <p><FormattedMessage id='project1' defaultMessage='Rare Disease Information System' /> </p>
            <div className="projectDiv">
                <img className="projectImg" src={RD1} alt="Project" title="Home" width="200" height="200"/>  
                <img className="projectImg" src={RD2} alt="Project" title="Home" width="200" height="200"/>  
                <img className="projectImg" src={RD3} alt="Project" title="List" width="200" height="200"/>  
                <img className="projectImg" src={RD4} alt="Project" title="Disease" width="200" height="200"/>  
                <img className="projectImg" src={RD5} alt="Project" title="Disease" width="200" height="200"/>  
                <img className="projectImg" src={RD6} alt="Project" title="List" width="200" height="200"/>  
                <img className="projectImg" src={RD7} alt="Project" title="Insert" width="200" height="200"/> 
                <img className="projectImg" src={RD8} alt="Project" title="Update" width="200" height="200"/>  
                <img className="projectImg" src={RD9} alt="Project" title="Update" width="200" height="200"/> 
            </div>
        </div>
    )
}

export default Projects