import React from "react";
import BarPlot from "./Plot/BarPlot";
import { FormattedMessage } from "react-intl"


function Skills(){
    return(
        <div className='subContents'>
            <BarPlot />
            
            <p><FormattedMessage 
                    id='skills'
                    defaultMessage='Knowledge stack'/>
            </p>
        </div>
    )
}

export default Skills