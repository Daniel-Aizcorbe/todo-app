import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODOS COMPLETADOS: 6 DE 10</h1>
      <div>
        <input type='text' placeholder="barra busqueda" />
        <ul>
          <li>
            <p>elemento</p>
          </li>
          <li>
            <p>elemento</p>
          </li>
          <li>
            <p>elemento</p>
          </li>
          <li>
            <p>elemento</p>
          </li>
          <li>
            <p>elemento</p>
          </li>
        </ul>

      </div>
      <button>
        Agregar TODO
      </button>
    </div>
  );
}

export { App } ;
