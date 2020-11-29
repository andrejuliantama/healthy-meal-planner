import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <div className="container">
        <div className="header">
          Welcome to Healthy Meal Planner!
        </div>
        <form>
          <label>Name</label>
          <input className="name"/>
          <div className="baris">
            <div className="column">
              <label>Age</label>
              <input className="age"/>
            </div>
            <div className="column">
              <label>Age</label>
              <input className="age"/>
            </div>
            
          </div>

          <div className="baris">
            <div className="column mr-5">
              <label>Weight</label>
              <div className="baris">
                <input className="weight"/>
                <span className="ml-2 unit">Kg</span>
              </div>
            </div>
            <div className="column">
              <label>Height</label>
              <div className="baris">
                <input className="height"/>
                <span className="ml-2 unit">Cm</span>
              </div>
            </div>
          </div>

          <div className="baris">
            <div className="column mr-5">
              <label>Target</label>
              <div className="baris">
                <input className="weight"/>
                <span className="ml-2 unit">Kg</span>
              </div>
            </div>
            {/* <div className="column">
              <label>Height</label>
              <div className="baris">
                <input className="height"/>
                <span className="ml-2 unit">Cm</span>
              </div>
            </div> */}
          </div>

        </form>
        
        
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
