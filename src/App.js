import Navbar from './components/Navbar';
import Columns from './components/Columns';
import { useDispatch } from 'react-redux';
import { setColumns } from './reducers/columnsSlice';

function App() {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault();
    const columns = parseInt(event.target.value)
    dispatch(setColumns(columns))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid text-center border border-success border-5">
        <button type="button" className="btn btn-success" onClick={handleClick} value={10}>10</button>
        <button type="button" className="btn btn-danger" onClick={handleClick} value={50}>50</button>
        <button type="button" className="btn btn-warning" onClick={handleClick} value={100}>100</button>
        <Columns />
      </div>
    </div>
  );
}

export default App;
