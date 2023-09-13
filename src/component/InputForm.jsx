import { useState } from "react";
import styled from "styled-components";

export default function InputForm() {
  // 1. 제목에 있는 input에 사용자가 글자를 입력한다.
  // 2. 사용자가 입력한 글자가 변수(title)에 저장된다
  // 3. 사용자가 입력한 글자가 변수(title)에 저장되려면 setTitle이 동작된다.
  // 4. 사용자가 입력이 끝나면 변수(title)에 있는 내용이
  //    리덕스로 전달이 되어 처리가 이루어진다.

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = () => {
    console.log("클릭 동작 중..");
  };

  return (
    <Container>
      <span>제목</span>
      <input onChange={handleTitleChange} />
      <span>내용</span>
      <input onChange={handleContentChange} />
      <button onClick={handleClick}>추가하기</button>
    </Container>
  );
}

// 1. InputForm 컴포넌트 대략적으로 만들기
// 2. styled component로 꾸며보고
// 3. input에 있는 '제목'과 '내용' 추가 하는 기능

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 12px;

  span {
    margin-right: 10px;
  }

  input {
    margin-right: 20px;
  }

  button {
    background-color: teal;
    color: white;
    border: none;
    width: 140px;
    height: 40px;
    cursor: pointer;
  }
`;
