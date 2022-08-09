import Button from "./component/Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello ReactJS</h1>
      <Button text="Hello" />
    </div>
  );
}

export default App;
