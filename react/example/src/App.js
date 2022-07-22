import { useState } from "react";
import { useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import JoinInserts from "./components/JoinInserts";
import JoinList from "./components/JoinList";

function App() {
  const [joins, setJoins] = useState([]);
  const [form, setForm] = useState({});

  // ref를 사용하여 변수 담기
  const nextNum = useRef(0);

  const onInsert = useCallback(
    (value) => {
      value.num = nextNum.current;
      setJoins(joins.concat(value));
      nextNum.current += 1;
      setForm({});
    },
    [joins]
  );

  const onUpdateForm = useCallback(
    (idx) => {
      setForm(joins[idx]);
    },
    [joins]
  );

  const onUpdate = useCallback(
    (updateJoin) => {
      setJoins(
        joins.map((data) => (data.num === updateJoin.num ? updateJoin : data))
      );
      setForm({});
    },
    [joins]
  );

  const onRemove = useCallback(
    (num) => {
      setJoins(joins.filter((join) => join.num !== num));
    },
    [joins]
  );

  return (
    <TodoTemplate>
      <JoinInserts
        onInsert={onInsert}
        form={form}
        onUpdate={onUpdate}
      ></JoinInserts>
      <JoinList
        joins={joins}
        onRemove={onRemove}
        onUpdateForm={onUpdateForm}
      ></JoinList>
    </TodoTemplate>
  );
}

export default App;
