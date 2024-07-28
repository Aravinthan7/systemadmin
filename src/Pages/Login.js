import React from 'react';
// import background from '../Image/sign-up-rate.jpg';
import background from '../Image/login-1.png';
import useAxios from '../CustomHooks/useApilogger';
export default function Login() {


  const lostyle={
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  }



  return (
    <React.Fragment>
      <div className='loginbackg' style={lostyle}>
        <div className="pt-5">
          <div class="login">
            <h1>Loginto Web App </h1>
            <form method="post" action="">
              <label>Employee ID *</label>
              <p><input type="text" name="employeeid" required value="" placeholder="Employee ID" /></p>
              <label>Password *</label>
              <p><input type="password" name="password" required value="" placeholder="Password" /></p>
              <p class="remember_me">
                <label>
                  <input type="checkbox" name="remember_me" id="remember_me" />
                  Remember me on this computer
                </label>
              </p>
              <p class="submit"><input type="submit" name="commit" value="Login" /></p>
            </form>
          </div>

          <div class="login-help">
            <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
