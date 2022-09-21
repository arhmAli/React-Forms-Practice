import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Child from './Child';
import Box from './Box';
import BoxList from './BoxList';
function App() {
  return (
    <div >
      {/* <Box height={100} width={200} color="red"/>  */}
       {/* <BoxList /> */}
      <Parent />
      {/* <Child color='purple' />  */}
    </div>
  );
}

export default App;
