import React, { useState } from 'react'; // Import React and useState hook
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignIn = () => {
  // State to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signed In Successfully!');
    // You can add more functionality here like sending the form data to a server
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form id="signin-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn; // Export the SignIn component
