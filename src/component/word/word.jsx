/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 09:15:57
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-14 16:18:13
 */
import './word.css'
import React, { Component } from "react";
class Word extends Component {
    constructor(props) {
        super(props)
        //this.listenKeyDown = this.listenKeyDown.bind(this)

        this.state = {
            nowTapIndex: 0,
            wordArray: this.props.word.split('')
        }
        document.onkeydown = this.listenKeyDown.bind(this)

    }
    listenKeyDown(e) {

        if (this.state.wordArray[this.state.nowTapIndex] === e.key) {
            console.log("true")
            this.setState({ nowTapIndex: this.state.nowTapIndex + 1 })

        }
        else {
            console.log('error')
            this.setState({ nowTapIndex: 0 })

        }

    }
    componentDidMount() {
    }
    render() {
        let wordArray = this.props.word.split("")
        return <div className="word_container" id='word_container'>{wordArray.map((word, index) => {
            return <span className={['word', index < this.state.nowTapIndex ? 'word_taped' : ''].join(' ')} key={index}>{word}</span>
        })}</div>
    }
}
export default Word