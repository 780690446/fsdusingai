import { useState } from "react";
import axios from "axios";

export default function Feedback() {
  const [comment, setComment] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/feedback", {
      rating: 4,
      comment
    });
    alert("Submitted");
  };

  return (
    <div>
      <textarea onChange={e => setComment(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
