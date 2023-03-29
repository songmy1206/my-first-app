import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Test />
      <Test text1="리액트 공부하기" text2="state 사용법 익히기" />
      <Test text1="코테 풀기" text2="Lv0" />
    </div>
  );
}

export default App;
