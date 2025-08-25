import React, {useState} from "react";

function UseState2(props) {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요');

  const obj = [{a: 1, b : 2, c: 3}, {a: 5, b: 2, c : 31}]
  console.log(obj)
  const newObj = obj.map(item => {
    return {...item, b : 51};
  });
  console.log(newObj)

  const[color, setColor] = useState('black')
  return(
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{color}}>{message}</h1>
        <button style={{color : 'red'}} onClick={() => {
          setColor('red');
        }}>빨강으로</button>
        <button style={{color : 'green'}} onClick={() => {
          setColor('green');
        }}>초록으로</button>
        <button style={{color : 'blue'}} onClick={() => {
          setColor('blue');
        }}>파랑으로</button>
        <button style={{color : 'black'}} onClick={() => {
          setColor('black');
        }}>검정으로</button>
      </div>

  );
}
export default UseState2

