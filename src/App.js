import './App.css';
import GetApi from './practice/WithoutCOM'
function App() {
  return (
  <>
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1 className='text-start'>USA POPULATION</h1>
       <GetApi/>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;