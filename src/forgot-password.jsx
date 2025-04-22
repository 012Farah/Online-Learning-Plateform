// import React, { useState } from 'react';

// function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // In a real application, you would send the email to your backend
//     console.log('Email submitted:', email);
//     setMessage('A password reset link has been sent to your email address.');
//     // You might want to clear the input field after submission
//     setEmail('');
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-20">
//           <div className="card p-4 shadow">
//             <h2 className="text-center mb-4">Forgot Your Password?</h2>
//             {message && <div className="alert alert-success">{message}</div>}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="d-grid">
//                 <button type="submit" className="btn btn-primary">Send Reset Link</button>
//               </div>
//             </form>
//             <p className="mt-3 text-center">
//               Remember your password? <a href="/login">Log in</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;