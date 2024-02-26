// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';

// const LoginSignupForm = () => {
//   const [activeForm, setActiveForm] = useState('login');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [signupUsername, setSignupUsername] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');

//   const switchForm = (form) => {
//     setActiveForm(form);
//   };

//   return (
//     <div className='bo'>
//     <section className="forms-section">
//     <div className='overlay2'></div>
//       <div className="forms">
//         <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
//           <button type="button" style={{outline:"none"}} className="switcher switcher-login" onClick={() => switchForm('login')}>
//             Login
//             <span className="underline"></span>
//           </button>
//           <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`}>
//             <fieldset>
//               <legend>Please, enter your email and password for login.</legend>
//               <div className="input-block">
//                 <label htmlFor="login-email">E-mail</label>
//                 <input
//                   id="login-email"
//                   type="email"
//                   required
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                 />
//               </div>
//               <div className="input-block">
//                 <label htmlFor="login-password">Password</label>
//                 <input
//                   id="login-password"
//                   type="password"
//                   required
//                   value={loginPassword}
//                   onChange={(e) => setLoginPassword(e.target.value)}
//                 />
//               </div>
//             </fieldset>
//             <Link to="/ahome">
//               <button type="submit" className="btn-login">
//                 Login
//               </button>
//             </Link>
//           </form>
//         </div>
//         <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
//           <button type="button" style={{outline:"none"}} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
//             Sign Up
//             <span className="underline"></span>
//           </button>
//           <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`}>
//             <fieldset>
//               <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
//               <div className="input-block">
//                 <label htmlFor="signup-username">Username</label>
//                 <input
//                   id="signup-username"
//                   type="text"
//                   required
//                   value={signupUsername}
//                   onChange={(e) => setSignupUsername(e.target.value)}
//                 />
//               </div>
//               <div className="input-block">
//                 <label htmlFor="signup-email">E-mail</label>
//                 <input
//                   id="signup-email"
//                   type="email"
//                   required
//                   value={signupEmail}
//                   onChange={(e) => setSignupEmail(e.target.value)}
//                 />
//               </div>
//               <div className="input-block">
//                 <label htmlFor="signup-password">Password</label>
//                 <input
//                   id="signup-password"
//                   type="password"
//                   required
//                   value={signupPassword}
//                   onChange={(e) => setSignupPassword(e.target.value)}
//                 />
//               </div>
//             </fieldset>
//             <Link to="/ahome">
//               <button type="submit" className="btn-signup">
//                 Sign Up
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </section></div>
//   );
// };

// export default LoginSignupForm;
// import  { useState } from 'react';
// import {  useNavigate } from 'react-router-dom';
// import './Login.css';

// const LoginSignupForm = () => {
//   const [activeForm, setActiveForm] = useState('login');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [signupUsername, setSignupUsername] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const navigate = useNavigate();

//   const switchForm = (form) => {
//     setActiveForm(form);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Perform authentication logic here (check credentials, etc.)
//     // For simplicity, I'm using a hardcoded condition here
//     const userRole = loginEmail === 'admin@example.com' ? 'admin' : 'user';

//     // Redirect based on the user role
//     if (userRole === 'admin') {
//       navigate('/ahome');
//     } else {
//       navigate('/uhome');
//     }
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     // Perform signup logic here (create user, etc.)
//     // For simplicity, I'm using a hardcoded condition here
//     const userRole = signupEmail === 'admin@example.com' ? 'admin' : 'user';

//     // Redirect based on the user role
//     if (userRole === 'admin') {
//       navigate('/ahome');
//     } else {
//       navigate('/uhome');
//     }
//   };

//   return (
//     <div className='bo'>
//       <section className="forms-section">
//         <div className='overlay2'></div>
//         <div className="forms">
//           <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-login" onClick={() => switchForm('login')}>
//               Login
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`} onSubmit={handleLogin}>
//               <fieldset>
//                 <legend>Please, enter your email and password for login.</legend>
//                 <div className="input-block">
//                   <label htmlFor="login-email">E-mail</label>
//                   <input
//                     id="login-email"
//                     type="email"
//                     required
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="login-password">Password</label>
//                   <input
//                     id="login-password"
//                     type="password"
//                     required
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                   />
//                 </div>
//               </fieldset>
//               <button type="submit" className="btn-login">
//                 Login
//               </button>
//             </form>
//           </div>
//           <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
//               Sign Up
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`} onSubmit={handleSignup}>
//               <fieldset>
//                 <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
//                 <div className="input-block">
//                   <label htmlFor="signup-username">Username</label>
//                   <input
//                     id="signup-username"
//                     type="text"
//                     required
//                     value={signupUsername}
//                     onChange={(e) => setSignupUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-email">E-mail</label>
//                   <input
//                     id="signup-email"
//                     type="email"
//                     required
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-password">Password</label>
//                   <input
//                     id="signup-password"
//                     type="password"
//                     required
//                     value={signupPassword}
//                     onChange={(e) => setSignupPassword(e.target.value)}
//                   />
//                 </div>
//               </fieldset>
//               <button type="submit" className="btn-signup">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoginSignupForm;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginSignupForm = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const switchForm = (form) => {
    setActiveForm(form);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!loginEmail || !loginPassword) {
      alert('Please enter both email and password.');
      return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(loginPassword)) {
      setPasswordError('Password must contain at least one uppercase letter, one digit, one special character, and be 8-16 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    // Perform authentication logic here (check credentials, etc.)
    // For simplicity, I'm using a hardcoded condition here
    const userRole = loginEmail === 'admin@example.com' ? 'admin' : 'user';

    // Redirect based on the user role
    if (userRole === 'admin') {
      navigate('/ahome');
    } else {
      navigate('/uhome');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signupEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(signupPassword)) {
      setPasswordError('Password must contain at least one uppercase letter, one digit, one special character, and be 8-16 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    // Perform signup logic here (create user, etc.)
    // For simplicity, I'm using a hardcoded condition here
    const userRole = signupEmail === 'admin@example.com' ? 'admin' : 'user';

    // Redirect based on the user role
    if (userRole === 'admin') {
      navigate('/ahome');
    } else {
      navigate('/uhome');
    }
  };

  return (
    <div className='bo'>
      <section className="forms-section">
        <div className='overlay2'></div>
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
            <button type="button" style={{ outline: "none" }} className="switcher switcher-login" onClick={() => switchForm('login')}>
              Login
              <span className="underline"></span>
            </button>
            <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`} onSubmit={handleLogin}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
            <button type="button" style={{ outline: "none" }} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
              Sign Up
              <span className="underline"></span>
            </button>
            <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`} onSubmit={handleSignup}>
              <fieldset>
                <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-username">Username</label>
                  <input
                    id="signup-username"
                    type="text"
                    required
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input
                    id="signup-email"
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignupForm;
