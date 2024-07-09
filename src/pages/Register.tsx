import React from "react";

const Register: React.FC = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="fullname" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
