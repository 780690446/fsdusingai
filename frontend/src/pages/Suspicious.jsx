import { useEffect, useState } from "react";
import axios from "axios";

export default function Suspicious() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/suspicious")
      .then(res => setLogs(res.data));
  }, []);

  return (
    <ul>
      {logs.map((l, i) => <li key={i}>{l}</li>)}
    </ul>
  );
}
