import Button from "./component/Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  //컴포넌트가 렌더될때마다 반복실행되지 않고 첫 렌더때만 실행되기를 필요로하는 코드도 있을 수 있음!
  //useEffect()를 사용할것!
  console.log("it renders all time");
  const unChange = () => {
    console.log("it renders only one time");
  };
  useEffect(unChange, []);
  return (
    <div>
      <h1 className={styles.title}>Hello ReactJS</h1>
      <div>{value}</div>
      <Button text="click me" onClick={onClick} />
    </div>
  );
}

export default App;
