import React, {Component} from 'react';
import App from './App.js';
import Head from './Components/Head.js';
import './index.css';
import {IntlProvider} from 'react-intl';
import Spanish from './Languages/es-MX.json';
import English from './Languages/en-US.json';

export default class LangButton extends Component{
    constructor(){
        super()
        this.state = {
            isEnglish: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=> {return {isEnglish: !prevState.isEnglish}} )
    }
    render(){
        let langStr=this.state.isEnglish? 'English': 'española'
        let lang, local;
        if (langStr === 'English'){
            lang = Spanish            
            local = 'es-MX'
        } else{
            lang = English
            local = 'en-US'
        }
        return(
            <html>                
            <Head />
            <button onClick={this.handleClick} value={this.state.isEnglish}className='langChange'>
                {langStr}
            </button>
            <IntlProvider locale={local} messages={lang}> <App /> </IntlProvider>
            </html>
        )
    }
}