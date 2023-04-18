/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['누구보다 빠르게 집에 가기','멋지게 발표하기','끝내주게 숨쉬기','울면서 이력서 쓰기', '배부르게 먹기']);
  let [like, setLike] = useState([0, 0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  // let [black, setblack] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');
  let date = new Date();
  let del = false;

  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let dateStr = year + '-' + month + '-' + day;

  let write =  function(){
    if(input == '' || input == null || input == undefined){
      alert('할 일을 입력하세요')
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
        <h4>I CAN (TO) DO IT</h4>
        <div className='inner'>
          {
          a.map(function(parm, i){
            return (
              <div className='list'>
                <div className='flex'>
                  <h4 onClick={()=>{
                    setTitle(i);
                    setModal(modal == true ? modal = false : modal = true);
                    // setblack(black == true ? black = false : black = true);
                  }}>{a[i]}</h4>
                  <button onClick={()=>{
                  let copyA2 = [...a];
                  copyA2.splice(i, 1);
                  setA(copyA2);
                }}>Clear</button>
                </div>
                <span className='drag' onClick={()=>{
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike)}}>응급💨</span> {like[i]}
              </div>
            )
          })
        }
      </div>
      <div className='input'>
        <input type="text" autoFocus onChange={(e)=>{
          setInput(e.target.value);
        }}/>
        <button onClick={write}>Add</button>

      </div>
      {
          modal == true ? <Modal name={a} title={title} date={dateStr} del={setModal}/> : null
        }
    </div>
  );
}

export default App;
