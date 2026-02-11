import "../login.css";

export default function StudentDashboard() {
  return (
    <div className="login-card">
      <h2>Student Dashboard</h2>

      <button onClick={() => window.location.href="/student/course"}>
        📘 Course
      </button>

      <button onClick={() => window.location.href="/student/exam"}>
        📝 Exam
      </button>

      <button onClick={() => window.location.href="/student/feedback"}>
        ⭐ Feedback
      </button>
    </div>
  );
}
