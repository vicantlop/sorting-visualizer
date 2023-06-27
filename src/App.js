import Navbar from './components/Navbar';
import Columns from './components/Columns';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container-fluid text-center border border-success border-5">
        <button type="button" class="btn btn-success">10</button>
        <button type="button" class="btn btn-danger">50</button>
        <button type="button" class="btn btn-warning">100</button>
        <Columns />
      </div>
    </div>
  );
}

export default App;
