/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-09-16 14:31:41
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-20 15:11:38
 */
import Head from './component/head/head';
import Word from "./component/word/word"
import Means from './component/means/means';
import Timer from './component/options/timer/timer';
import Axios from 'axios'
import { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newWord: "",
            newWordArray: [],
            trans: [],
        }

    }

    getNewWord = async () => {
        const random = parseInt(Math.random() * 4533) + 1
        const { data } = await Axios.get("http://localhost:3000/getWord?wordRank=" + random)
        console.log(data)
        const transList = data[0].content.word.content.trans
        this.setState({ newWord: data[0].headWord, newWordArray: data[0].headWord.split(""), trans: transList })
    }
    componentWillMount() {
        this.getNewWord()
    }
    render() {

        const { newWordArray, trans } = this.state
        return (
            <div>
                <Head />
                <Word wordArray={newWordArray} getNewWord={this.getNewWord} />
                {trans.map((item, index) => {
                    return <Means key={index} means={item.pos + ',' + item.tranCn}></Means>
                })}

                <Timer />
            </div>

        )
    }
}