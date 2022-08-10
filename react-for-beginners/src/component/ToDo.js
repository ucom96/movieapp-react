
import {useState, useEffect} from react
function ToDo() {
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

export default ToDo;
