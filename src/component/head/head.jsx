/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 15:45:23
 * @LastEditors: KB
 * @LastEditTime: 2024-01-08 21:17:56
 */
import './head.css'
import React, { Component } from "react";
import Timer from '../options/timer/timer';
class Head extends Component {

    showKeyBoard=()=>{
        let input=document.getElementById("hideinput")
        console.log(window.innerHeight)
        
        if (
            navigator.userAgent.match(/Mobi/i) ||
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/ipad/i)
        ){
            input.focus()
            document.getElementById("word_container").style.marginTop="10px"
        }     
        else return;
    }
    inputBlur=()=>[
        document.getElementById("word_container").style.marginTop="150px"
    ]
    render() {
        return <div className="page_header">
            <Timer />
            <div id="keyBoardBtn" onClick={this.showKeyBoard}>键</div>
            <div id="pronounSwitch" onClick={this.props.changePronoun}>{this.props.useUSPronounce?"美":"英"}</div>
            <input type="text" id="hideinput" onBlur={this.inputBlur}/>
        </div>
    }
}
export default Head