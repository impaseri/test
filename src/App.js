/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['블로그 글 제목1','블로그 글 제목2','블로그 글 제목3']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>박세리 Blog</h4>
      </div>
      {
        a.map(function(parm, i){
          return (
            <div className='list'>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true)}}>
                {a[i]}
              </h4>
              <span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                setLike(copyLike)}}>😎
              </span> {like[i]}
              <p>4월 12일 발행</p>
            </div>
          )
        })
      }
      {modal == true ? <Modal color="#ffc83d" name={a} title={title} /> : null}
    </div>
  );
}

export default App;
