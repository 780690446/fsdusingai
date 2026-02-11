export default function AdminDashboard() {
  return (
    <div className="center-box">
      <h2>Admin Dashboard</h2>

      <button onClick={() => window.location.href="/students"}>
        Student Details
      </button>

      <button onClick={() => window.location.href="/suspicious"}>
        Suspicious Activity
      </button>

      <button onClick={() => window.location.href="/feedback"}>
        Feedback
      </button>
    </div>
  );
}
