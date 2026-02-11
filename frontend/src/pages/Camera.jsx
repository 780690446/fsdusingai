import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const start = async () => {
      // Load model
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");

      // Start camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      videoRef.current.onplay = () => {
        const canvas = canvasRef.current;
        const displaySize = {
          width: 280,   // 👈 CAMERA SIZE SMALL
          height: 210,
        };

        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions({
              inputSize: 320,       // 👈 detection light + fast
              scoreThreshold: 0.5,
            })
          );

          const resized = faceapi.resizeResults(detections, displaySize);
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // 👇 SMALL WHITE FACE BOX
          resized.forEach(det => {
            const box = det.box;
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.strokeRect(box.x, box.y, box.width, box.height);
          });

          if (detections.length === 0) {
            setStatus("❌ No Face");
          } else if (detections.length > 1) {
            setStatus("⚠️ Multiple Faces");
          } else {
            setStatus("✅ Face Detected");
          }
        }, 800);
      };
    };

    start();
  }, []);

  return (
    <div>
      <h3>Live Exam Monitoring</h3>
      <p><strong>{status}</strong></p>

      <div
        style={{
          position: "relative",
          width: "280px",
          height: "210px",
          border: "2px solid black",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          width="280"
          height="210"
          style={{ position: "absolute" }}
        />
        <canvas
          ref={canvasRef}
          width="280"
          height="210"
          style={{ position: "absolute" }}
        />
      </div>
    </div>
  );
}
