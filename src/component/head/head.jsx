/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 15:45:23
 * @LastEditors: KB
 * @LastEditTime: 2023-12-28 23:39:02
 */
import './head.css'
import React, { Component } from "react";
import Timer from '../options/timer/timer';
class Head extends Component {
    render() {
        return <div className="page_header">
            <Timer />
            <div id="pronounSwitch" onClick={this.props.changePronoun}>{this.props.useUSPronounce?"美":"英"}</div>
        </div>
    }
}
export default Head