import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data));
  }, []);

  return (
    <ul>
      {students.map(s => <li key={s.id}>{s.name}</li>)}
    </ul>
  );
}
