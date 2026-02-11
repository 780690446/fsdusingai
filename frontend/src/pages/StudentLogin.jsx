import "../login.css";

export default function StudentLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    // later backend authentication
    window.location.href = "/student/dashboard";
  };

  return (
    <div className="login-card">
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Student Username"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
