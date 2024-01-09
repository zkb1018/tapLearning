/*
 * @Descripttion: 
 * @Author: KB
 * @Date: 2023-12-29 20:06:12
 * @LastEditors: KB
 * @LastEditTime: 2024-01-08 19:05:51
 */

const keyMaps=[
    "c-",
    "d-",
    "e-",
    "f-",
    "g-",
    "a-",
    "b-",
    "c-1",
    "d-1",
    "e-1",
    "f-1",
    "g-1",
    "a-1",
    "b-1",
    "c-2",
    "d-2",
    "e-2",
    "f-2",
    "g-2",
    "a-2",
    "b-2",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3"
]
const soundPath=[]
for(let i=0;i<26;i++){
    soundPath.push(require("./"+keyMaps[i]+'.mp3'))
}
export {soundPath}