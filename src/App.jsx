import "./App.css";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";

//ストアにstate[]を登録
//TODOはローカルストレージのオブジェクトを初期値とする
//TODOは作成と削除のみ
//inputエリアと表示エリアを別コンポーネントとして作成してグローバルに使用してみる
//
//
//
//
//
//
//

function App() {
  return (
    <>
      <h1>TODOアプリ</h1>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
