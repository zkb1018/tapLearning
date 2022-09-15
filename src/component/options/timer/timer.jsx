/*
 * @Descripttion: 计时器
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 16:47:26
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-15 09:26:23
 */
import React, { Component } from "react";
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: "",
            seconds: 0,
            minues: 0,
            hours: 0,
        }
    }
    componentDidMount() {

        this.timer = setInterval(() => { this.tick() }, 1000)

    }
    tick() {
        let { seconds, minues, hours } = this.state
        this.setState({ seconds: seconds + 1 })
        if (this.state.seconds === 59) {
            this.setState({ seconds: 0, minues: minues + 1 })
        }
        if (this.state.minues === 59) {
            this.setState({ minues: 0, hours: hours + 1 })
        }
        this.setState({ timer: hours + ':' + minues + ':' + seconds })
    }
    render() {
        return <span className="timer">{this.state.timer}</span>
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}
export default Timer