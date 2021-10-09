import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

// variable for font awesome icon 
const element = <FontAwesomeIcon icon={faGlobeAsia} />
function App() {
  return (
    <div>
      <section>
        <div className="imgBx">
          <img src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg" alt="" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Login</h2>
            <form>
              <div className="inputBx">
                <span>Username</span>
                <input type="text" />
              </div>
              <div className="inputBx">
                <span>Email</span>
                <input type="text" />
              </div>
              <div className="inputBx">
                <span>Password</span>
                <input type="password" />
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" name="" />Remember
                </label>
              </div>
              <div className="inputBx">
                <input className="sign" type="Submit" value="Sign in" name="" />
              </div>
              <div className="inputBx">
                <p>Don't have an account?  <a href="sign up">   Sign up</a></p>
                <h3>Login social media</h3>
                <ul className="sci">
                  <li>{element}</li>
                  <li>{element}</li>
                  <li>{element}</li>
                  <li>{element}</li>
                </ul>
              </div>
            </form>
            <div>
            </div>
          </div>
        </div>
      </section>
      <h3>llllllllllllllll</h3>
    </div>

  );
}

export default App;
