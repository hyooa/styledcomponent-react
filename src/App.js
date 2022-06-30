
import './App.css';

// 컴포넌트를 만들때 스타일을 정의
// 💚 스타일을 입힌 컴포넌트 만들기
import styled from 'styled-components';
import Button from './Components/Button';
import Dialog from './Components/Dialog';
import { useState } from 'react';
import Box from './Components/Box';

const AppBlock = styled.div `
  width : 512px;
  margin : 0 auto;
  margin-top : 50px;
  border : 1px solid black;
  padding : 10px;
`;

// section, div, ....
// props 함수로 넣어주기 , || 은 true를 찾으면 멈춤
const Circle = styled.section `
  width : 100px;
  height : 100px;
  background : ${props => props.color || "black"};
  border-radius : 50%;
`;

function App() {

  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onCancel = () => {
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = () => {
    setDialog(false);
    console.log('삭제');
  }

  return (
    // <div className="App">
    <>
      <AppBlock>
        <Circle color="pink"></Circle>
        <Circle color="blue"></Circle>
        <Circle></Circle>

        <Button>button1</Button>
        <Button>button2</Button>
        {/* Button 가서 onClick 붙여주기 */}
        <Button onClick={onClick}>button3</Button>
      </AppBlock>

      {/* (부모요소)여기에서 언제든지 변경가능 */}
      {/* visible )  true면 나타나게(return), false면 null */}
      <Dialog
        title="정말로 삭제하시나요 ?"
        cancelText="취소" confirmText="삭제"
        visible = {dialog}
        onCancel = {onCancel}
        onConfirm = {onConfirm}
      >
        데이터 삭제하시나요 ?
      </Dialog>

      <Box></Box>
    </>
    // </div>
  );
}

export default App;
