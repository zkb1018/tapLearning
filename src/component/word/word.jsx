/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-14 09:15:57
 * @LastEditors: KB
 * @LastEditTime: 2023-12-29 20:55:07
 */
import './word.css'
import React, { Component } from "react";
import { soundPath } from '../../constant/sounds.js'


const keySound = new Audio()
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
            //console.log(this.state.nowTapIndex, wordArray.length)
            this.setState({ nowTapIndex: this.state.nowTapIndex + 1 })
            this.playSound(e.key)
            if (this.state.nowTapIndex === wordArray.length - 1) {
                this.getNewWord()
                this.setState({ nowTapIndex: 0 })
            }
        }
        else {
            this.setState({ nowTapIndex: 0 })

        }
    }
    playSound = (key) => {
        keySound.pause()
        let keyIndex=key.charCodeAt(0)-97
        if (keyIndex<0 || keyIndex>25) return
        keySound.src = soundPath[keyIndex]
        keySound.play()

    }
    getNewWord = () => {
        this.props.getNewWord()
    }
    render() {
        return <div onClick={this.props.play} className="word_container" id='word_container'>
            {this.props.wordArray.map((word, index) => {
                return <span className={['word', index < this.state.nowTapIndex ? 'word_taped' : ''].join(' ')} key={index}>{word}</span>
            })
            }
            {/* <img className='playBtn' src={require("../../assets/声音.png")} alt="发音" /> */}
        </div>
    }
}
export default Word