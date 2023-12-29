/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-16 14:31:41
 * @LastEditors: KB
 * @LastEditTime: 2023-12-29 19:47:27
 */
import Head from './component/head/head';
import Word from "./component/word/word"
import Means from './component/means/means';
import Pronounce from './component/pronounce/pronounce';
import { Component } from 'react';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newWord: "",
            useUSPronounce: true,
            ukphone: "",
            usphone: "",
            newWordArray: [],
            trans: [],
            allWords: [],
            pronounSrc: "",
        }

    }
    changePronounce = () => {
        this.setState({ useUSPronounce: !this.state.useUSPronounce }, () => {
            this.getPronounce();
        })
    }
    //http://dict.youdao.com/dictvoice?type=0&audio=goods  type 1:uk 0:us
    getPronounce = () => {
        let type = this.state.useUSPronounce ? "0" : "1"
        this.setState({
            pronounSrc: "http://dict.youdao.com/dictvoice?type="
                + type
                + "&audio=" + this.state.newWord
        }, () => {
            this.pronoun();
        })
    }
    pronoun = () => {
        // console.log(1)
        let audio = document.getElementById("audio")
        audio.src = this.state.pronounSrc
        //audio.muted=false
        audio.play()
    }
    getNewWord = () => {
        const random = parseInt(Math.random() * 4533) + 1
        const wordInfo = this.state.allWords[random]
        const transList = wordInfo.content.word.content.trans
        this.setState({
            newWord: wordInfo.headWord,
            newWordArray: wordInfo.headWord.split(""),
            trans: transList,
            ukphone: wordInfo.content.word.content.ukphone,
            usphone: wordInfo.content.word.content.usphone
        }, () => {
            this.getPronounce()
        }
        )

    }
    componentDidMount() {
        if (this.state.allWords.length === 0) {
            fetch('KaoYan_2.json').then(res => {
                if (res.status === 200)
                    return res.json()
            }).then((data) => {
                const words = data.getWord
                console.log(words)
                this.setState({ allWords: [...words] }, () => {
                    console.log(this.state.allWords)
                    this.getNewWord();
                })


            }).catch(error => {
                console.log(error)
            })
        }
        else {
            this.getNewWord()
        }
    }
    render() {

        const { newWordArray, trans, ukphone, usphone, useUSPronounce } = this.state
        return (
            <div>
                <Head changePronoun={this.changePronounce} useUSPronounce={useUSPronounce} />
                <Word play={this.pronoun} wordArray={newWordArray} getNewWord={this.getNewWord} />
                <Pronounce play={this.pronoun} pronoun={useUSPronounce ? usphone : ukphone} />
                {trans.map((item, index) => {
                    return <Means key={index} means={item.pos + ',' + item.tranCn}></Means>
                })}

                <audio id="audio" src={this.state.pronounSrc} autoPlay ></audio>
            </div>

        )
    }
}

