import React from "react";
import { FormattedMessage } from "react-intl"

function Home(){
    return(
        <div className='subContents'>
           
            <p><FormattedMessage 
                    id='home'
                    defaultMessage="Hi, I am Sandhya, a CSE undergraduate at BNM Institute of Technology. I am passionate about application development, artificial intelligence and computer networks and security."
                    values={{Name: "Sandhya", College: "BNM Institute of Technology"}}/>
            </p>
        </div>
    )
}

export default Home