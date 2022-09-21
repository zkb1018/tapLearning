/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 09:15:57
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-20 15:24:22
 */
import './word.css'
import React, { Component } from "react";
class Word extends Component {
    constructor(props) {
        super(props)
        //this.listenKeyDown = this.listenKeyDown.bind(this)
        this.state = {
            nowTapIndex: 0,
        }
        document.onkeydown = this.listenKeyDown.bind(this)

    }
    listenKeyDown(e) {
        let { wordArray } = this.props

        if (wordArray[this.state.nowTapIndex] === e.key) {
            console.log(this.state.nowTapIndex, wordArray.length)
            this.setState({ nowTapIndex: this.state.nowTapIndex + 1 })
            if (this.state.nowTapIndex === wordArray.length - 1) {
                this.getNewWord()
                this.setState({ nowTapIndex: 0 })
            }
        }
        else {
            this.setState({ nowTapIndex: 0 })

        }
    }
    getNewWord = () => {
        this.props.getNewWord()
    }
    render() {
        return <div className="word_container" id='word_container'>
            {this.props.wordArray.map((word, index) => {
                return <span className={['word', index < this.state.nowTapIndex ? 'word_taped' : ''].join(' ')} key={index}>{word}</span>
            })
            }
            <img className='playBtn' src={require("../../assets/声音.png")} alt="发音" />
        </div>
    }
}
export default Word