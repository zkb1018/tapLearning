/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 16:20:25
 * @LastEditors: KB
 * @LastEditTime: 2023-12-28 23:44:20
 */
import React, { Component } from "react";
import "./means.css"
class Means extends Component {

    render() {
        return <div className="mean_container">{this.props.means}</div>
    }
}
export default Means