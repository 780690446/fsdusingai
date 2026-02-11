from flask import Flask, jsonify, request
from flask_cors import CORS
from data import students, suspicious_logs, feedbacks

app = Flask(__name__)
CORS(app)

@app.route("/login/admin", methods=["POST"])
def admin_login():
    return jsonify({"status": "success", "role": "admin"})

@app.route("/login/student", methods=["POST"])
def student_login():
    return jsonify({"status": "success", "role": "student"})

@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students)

@app.route("/suspicious", methods=["GET"])
def get_suspicious():
    return jsonify(suspicious_logs)

@app.route("/feedback", methods=["GET", "POST"])
def feedback():
    if request.method == "POST":
        feedbacks.append(request.json)
        return jsonify({"message": "Feedback added"})
    return jsonify(feedbacks)

if __name__ == "__main__":
    app.run(debug=True)
