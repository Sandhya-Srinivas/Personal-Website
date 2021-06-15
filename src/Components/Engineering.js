import React from "react";
import Charts from "./Plot/Charts.js"
import { FormattedMessage } from "react-intl"

function Engineering(){
    return(
        <div className='subContents'>
            <Charts />
            <p><FormattedMessage 
                    id='past'
                    defaultMessage='Engineering'/>
            </p>
        </div>
    )
}

export default Engineering