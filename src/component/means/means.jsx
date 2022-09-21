/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 16:20:25
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-19 09:53:56
 */
import React, { Component } from "react";
import "./means.css"
class Means extends Component {

    render() {
        console.log(this.props.means)
        return <div className="mean_container">{this.props.means}</div>
    }
}
export default Means