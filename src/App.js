/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['블로그 글 제목1','블로그 글 제목2','블로그 글 제목3']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');

  let write =  function(){
    if(input == '' || input == null || input == undefined){
      alert('제목을 입력하세요')
    }else{
      let copyA = [...a];
      copyA.unshift(input);
      setA(copyA);
      let copyLike2 = [...like];
      copyLike2.unshift(0);
      setLike(copyLike2);
    }
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>I CAN (TO) DO IT</h4>
      </div>
      {
        a.map(function(parm, i){
          return (
            <div className='list'>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true)
              }}>{a[i]}</h4><span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                setLike(copyLike)}}>😎</span> {like[i]}
              {/* <p>글쓴이 : 주인장</p> */}
              <button onClick={()=>{
                let copyA2 = [...a];
                copyA2.splice(i, 1);
                setA(copyA2);
              }}>Delete</button>
            </div>
          )
        })
      }
      <div className='input'>
        <h4>New</h4>
        <input type="text"  onChange={(e)=>{
          setInput(e.target.value);
        }}/>
        <button onClick={write}>글쓰기</button>
        {
          modal == true ? <Modal color="yellow" name={a} title={title} /> : null
        }
      </div>
    </div>
  );
}

export default App;
