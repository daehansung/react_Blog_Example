/* eslint-disable */

import './App.css';
import { useState } from 'react';
import Modal from '../src/component/Modal';

function App() {

let post = '강남 우동 맛집';
let [list1, setList1] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
let [like, setLike] = useState(0);

function logoChange() {
  let copy = [...list1];
  copy[0] = '여자 코트 추천';
  setList1(copy);
}

function logoAscending(){
  let copy = [...list1];
  copy.sort();
  setList1(copy)
}
function uplike(){
  console.log(1)
}
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id = {post} style = {{color : 'red', fontSize : '16px'}}>ReactBlog</h4>
      </div>

      <button onClick={logoAscending}>글정렬</button>

      <button onClick = {logoChange} >글수정</button>

      <div className="list">
        <h4>{list1[0]} <span onClick={() => { setLike(like + 1)}}>좋아요</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{list1[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{list1[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default App;
