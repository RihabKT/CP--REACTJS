import logo from './logo.svg';
import './App.css';




function App() {
  return (
      <body>
      <form className="App">
       
      <h2> WELCOME!</h2>
      <div className="flexy">
        <h1> CREATE YOUR ACCOUNT </h1>
        <p> YOU HAVE ALREADY AN ACCOUNT</p>
        <button type="button" class="btn btn-primary"> SIGN IN </button>
        </div>
      
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Name </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Email </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"></input>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Password </label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password Must Contain Lowercase letters, Uppercase Letters And Numbers "></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Confirm Password </label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Rewrite Password"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Enter your comment</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

      <button type="button" class="btn btn-outline-warning"> SUBMIT </button>
      <div>f
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-google-plus-square"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-github-square"></i>
      </div>
    
    
    </form>
      
    </body>
    
  );
}

export default App;
