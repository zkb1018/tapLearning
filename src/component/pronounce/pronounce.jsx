/*
 * @Descripttion: 
 * @Author: KB
 * @Date: 2023-12-28 21:30:04
 * @LastEditors: KB
 * @LastEditTime: 2023-12-28 22:51:39
 */
import "./pronounce.css"
export default function Pronounce(props){
    return <div className="pronounce" onClick={props.play}>{'/'+props.pronoun+'/'}</div>
}