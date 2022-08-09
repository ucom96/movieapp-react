import Button from "./component/Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  //input에 뭔가를 입력할때마다 onChange함수가 실행이 되는데 그때마다 value의 state가 업데이트되면서 리렌더링됨
  const onChange = (event) => {
    setValue(event.target.value);
  };
  //input에 뭔가를 입력할때 즉 value의 state가 바뀔때만 실행하고자하는 코드가 있을 경우
  useEffect(() => {
    console.log("It renders when input value changes");
  }, [value]);
  //컴포넌트가 렌더될때마다 반복실행되지 않고 첫 렌더때만 실행되기를 필요로하는 코드도 있을 수 있음!
  //useEffect()를 사용할것!
  console.log("it renders all time");
  //[]는 컴포넌트가 처음 생성될때만 실행! 브라우저가 실행되는 것의 기준이아님!
  //만약 컴포넌트가 사라질때만 렌더링되게 하고 싶다면 cleanup함수 이용
  //즉, useEffect의 return문에 실행되고자 할 코드를 넣어주기만 하면됨!
  useEffect(() => {
    console.log("it renders only one time");
  }, []);
  return (
    <div>
      <input
        value={value}
        placeholder="Search For.."
        onChange={onChange}
      ></input>
      <h1 className={styles.title}>Hello ReactJS</h1>
      <div>{counter}</div>
      <Button text="click me" onClick={onClick} />
    </div>
  );
}

export default App;
