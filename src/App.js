import Navbar from './components/Navbar';
import Columns from './components/Columns';
import { useDispatch, useSelector } from 'react-redux';
import { setColumns, setArray } from './reducers/columnsSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const { columns } = useSelector((state) => state.columns)
  const [rangeLock, setRangeLock] = useState("Lock Range")

  const handleChangle = (event) => {
    const columns = parseInt(event.target.value)
    dispatch(setColumns(columns))
    event.preventDefault()
    let array = [];
    while (array.length < columns) {
      array.push(Math.floor(Math.random() * 450) + 10)
    }
    dispatch(setArray(array))
  }

  const lock = (event) => {
    event.preventDefault()
    const locked = document.getElementById("customRange2").disabled
    if(locked) {
      document.getElementById("customRange2").disabled = false
      setRangeLock("Lock Range")
    } else {
      document.getElementById("customRange2").disabled = true
      setRangeLock("Unlock Range")
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid text-center border border-success border-5">
        <button type="button" className="btn btn-primary" onClick={lock}>{rangeLock}</button>
        <label htmlFor="customRange2" className="form-label">Example range:{columns}</label>
        <input type="range" className="form-range" min="10" max="100" id="customRange2" onChange={handleChangle}></input>
        <Columns />
      </div>
    </div>
  );
}

export default App;
