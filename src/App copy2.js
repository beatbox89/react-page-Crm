import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Hayati</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Features</li>
        </ul>
        <button>Contact Us</button>
      </nav>
      <main>
        <div className="smart">
          <h1>Smart Ideas For Your Brand Are Here.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, unde.
          </p>
          <div className="form">
            <input type="text" placeholder="Enter your email here" />
            <button>Get Started</button>
          </div>
        </div>
        <div className="smart-2">
          <img
            src="https://images.pexels.com/photos/3799324/pexels-photo-3799324.jpeg"
            alt="any"
          />
        </div>
      </main>
      <div className="service">
        <div className="service-heading">
          <h2>Let's Check Our Service</h2>
          <button>Browse</button>
        </div>
        <div className="service-body">
          <div className="body">
            <img
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h3>Grow your Business</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              assumenda cum vel est dolore et molestias distinctio.
            </p>
            <p>Link --</p>
          </div>
          <div className="body">
            <img
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h3>Grow your Business</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              assumenda cum vel est dolore et molestias distinctio.
            </p>
            <p>Link --</p>
          </div>
          <div className="body">
            <img
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h3>Grow your Business</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              assumenda cum vel est dolore et molestias distinctio.
            </p>
            <p>Link --</p>
          </div>
          <div className="body">
            <img
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h3>Grow your Business</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              assumenda cum vel est dolore et molestias distinctio.
            </p>
            <p>Link --</p>
          </div>
        </div>
      </div>
      <div className="why">
        <img
          src="https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cat"
        />
        <div>
          <h1>Why should you choose us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            enim iusto, eum dolorem quos perspiciatis omnis obcaecati ad
            voluptate ducimus sit eaque eveniet minus animi odio id dolorum
            exercitationem, reprehenderit accusamus nemo? Cupiditate mollitia
            ipsum eveniet veritatis.
          </p>
          <button>Learn more!</button>
        </div>
      </div>
      <div className="quality">
        <img
          id="quality"
          src="https://images.pexels.com/photos/2441461/pexels-photo-2441461.jpeg"
          alt="sunset"
        />
        <div className="body">
          <h2>Quality in everything we do.</h2>
          <div>
            <img
              className="icon"
              src="https://images.pexels.com/photos/1114883/pexels-photo-1114883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="icon"
            />
            <p>
              <h3>Social Marketing</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              distinctio tempore quidem perspiciatis.
            </p>
          </div>
          <div>
            <img
              className="icon"
              src="https://images.pexels.com/photos/1114883/pexels-photo-1114883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="icon"
            />
            <p>
              <h3>Social Marketing</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              distinctio tempore quidem perspiciatis.
            </p>
          </div>
          <div>
            <img
              className="icon"
              src="https://images.pexels.com/photos/1114883/pexels-photo-1114883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="icon"
            />
            <p>
              <h3>Social Marketing</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              distinctio tempore quidem perspiciatis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Follow us</h2>
      </div>
    </div>
  );
}

export default App;
