import Navbar from './components/Navbar';
import Columns from './components/Columns';
import { useDispatch, useSelector } from 'react-redux';
import { setColumns } from './reducers/columnsSlice';

function App() {
  const dispatch = useDispatch()
  const { columns } = useSelector((state) => state.columns)

  const handleChangle = (event) => {
    const columns = parseInt(event.target.value)
    dispatch(setColumns(columns))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid text-center border border-success border-5">
        <label htmlFor="customRange2" className="form-label">Example range:{columns}</label>
        <input type="range" className="form-range" min="10" max="100" id="customRange2" onChange={handleChangle}></input>
        <Columns />
      </div>
    </div>
  );
}

export default App;
