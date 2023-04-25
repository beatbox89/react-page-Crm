import "./App.css";

function App() {
  const menu = [
    {
      id: 1,
      icon: <i className="fa fa-icons"></i>,
      p: "Lorem ipsum",
    },
    {
      id: 2,
      icon: <i className="fa fa-icons"></i>,
      p: "second 2",
    },
    {
      id: 3,
      icon: <i className="fa fa-icons"></i>,
      p: "third",
    },
    {
      id: 4,
      icon: <i className="fa fa-icons"></i>,
      p: "forth forth",
    },
    {
      id: 5,
      icon: <i className="fa fa-icons"></i>,
      p: "fifth lima",
    },
  ];
  return (
    <div className="App">
      <nav>
        <h1>LOGO</h1>
        <ul>
          <p>Menu</p>
          {menu.map((link) => (
            <li key={link.id}>
              {link.icon} {link.p}
            </li>
          ))}
        </ul>
        <ul>
          <p>Forms & Tables</p>
          <li>
            <i className="fa fa-icons"></i> Lorem ipsum
          </li>
          <li>
            <i className="fa fa-icons"></i> Lorem ipsum
          </li>
          <li>
            <i className="fa fa-icons"></i> Lorem ipsum
          </li>
        </ul>
        <div>
          <button>LogOut</button>
        </div>
      </nav>
      <main>
        <h2>Profile Statistics</h2>
        <div className="main-1div">
          <div>
            <i className="fa fa-icons"></i>
            <p>
              Profile views <br /> 123,156
            </p>
          </div>
          <div>
            <i className="fa fa-icons"></i>
            <p>
              Profile views <br /> 123,156
            </p>
          </div>
          <div>
            <i className="fa fa-icons"></i>
            <p>
              Profile views <br /> 123,156
            </p>
          </div>
          <div>
            <i className="fa fa-icons"></i>
            <p>
              Profile views <br /> 123,156
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
