import "../login.css";

export default function Home() {
  return (
    <div className="login-card">
      <h2>AI FOR COMPLETE COURSE</h2>

      <button onClick={() => window.location.href="/admin"}>
        Admin Login
      </button>

      <button onClick={() => window.location.href="/student"}>
        Student Login
      </button>
    </div>
  );
}

