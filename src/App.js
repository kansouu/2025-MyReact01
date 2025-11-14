//import logo from './logo.svg';
import './App.css';
import Library from './pages/step01-jsx/Library';
import Clock from './pages/step02-element/Clock';
import CommentList from './pages/step03-component/CommentList';
import List02 from './pages/step03-component/List02';
import NumberCount from './pages/step04-state/NumberCount';
import FilterCommentList from './pages/step05-map,filter/FilterCommentList';
import FindCommentList from './pages/step05-map,filter/FindCommentList';
import SomeEveryCommentList from './pages/step05-map,filter/SomeEveryCommentList';
import IfExam01 from './pages/step06-if/IfExam01';
import IfExam02List from './pages/step06-if/IfExam02List';
import TextList from './pages/step06-if/TextList';
import Event01 from './pages/step07-event/Event01';
//import Comment from './pages/step03-component/Comment';

function App() {
  return (
    <div className="App">
      <Library />
      <hr />
      <Clock />
      <hr />
      {/* 같은 컴포넌트 여러개는 => 리스트 컴포넌트를 만들어라 
      <Comment /> */}

      <CommentList />
      <hr />
      <List02 />
      <hr />
      <NumberCount />
      <hr />
      <FilterCommentList />
       <hr />
      <FindCommentList />
      <hr />
      <SomeEveryCommentList />
       <hr />
      <IfExam01 />
      <hr />
      <IfExam02List />
      <hr />
      <TextList />
      <hr />
      <Event01 />
    </div>
  );
}

export default App;
