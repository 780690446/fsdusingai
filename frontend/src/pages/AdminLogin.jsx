import "../login.css";

export default function AdminLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    // later backend authentication
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="login-card">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admin Username"
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
