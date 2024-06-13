import React,{useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import background from '../Image/signup-1.png';
export default function Signup() {
    //ref declared
  const refSignup=useRef([])

    //------
    //global variable declared
    const lostyle={
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
    }
    //-------------
  return (
    <React.Fragment>
     <div className='loginbackg' style={lostyle}>
        <div className="pt-2">
          <div class="login">
            <h1>Signup to Web App</h1>
            <form method="post" action="">
              <label>Employee Name</label>
              <p><input className='inputcl' type="text" name="employeename" required value="" placeholder="Employee Name" /></p>
              <label>Employee ID</label>
              <p><input className='inputcl' type='text' required placeholder='Employee ID'/></p>
              <label>Email</label>
              <p><input className='inputcl' type='text' required placeholder='Email ID'/></p>
              <label>Password</label>
              <p><input className='inputcl' type="password" name="password" required value="" placeholder="Password" /></p>
              <label>Password</label>
              <p><input className='inputcl' type="password" name="password" required value="" placeholder="Password" /></p>
              <p class="remember_me">
                <label>
                 
                 Please fill the reuired fields
                </label>
              </p>
              <p class="submit"><input type="submit" name="commit" value="Signup" /></p>
            </form>
          </div>

          <div class="login-help">
            <p>Already you have a account ? <a href="#">Click here to Login </a>.</p>
          </div>
        </div>
      </div>

    </React.Fragment>


  )
}
