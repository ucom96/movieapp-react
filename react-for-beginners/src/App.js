//make ToDos
import { useEffect, useState } from "react";

//ToDos에 입력하고 submit시 ToDos의 목록이 추가가 되는 배열이 있어야할것
//console.log()로 찍었을때 나오도록
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //toDo가 아무것도 없다면 해당 함수를 실행시키지 않도록
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    //submit시 input칸이 비도록
    setToDo("");
  };
  //**line21을 onSubmit안에 두면 toDos에 현재 toDo가 반영이 안된 array가 나오게됨
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          onChange={onChange}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
