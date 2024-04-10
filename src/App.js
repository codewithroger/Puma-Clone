import './App.css';
import Boot from './compnent/Boot';
import Foot from './compnent/Foot';
import Model from './compnent/Model';
import Navs from './compnent/Navs';
// import Poster from './compnent/Poster'

function App() {
  return (
  <div>
    <Navs dis={"10%"} />
    <Model/>
    <Boot/>
    {/* <Poster/> */}
    <Foot/>
  </div>
  );
}

export default App;
