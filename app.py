from flask import Flask, send_file, render_template_string
import json, os

app = Flask(__name__)

@app.route('/')
def home():
    with open("generated_questions.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    html = """
    <h1>Generated Exam</h1>
    {% for q in questions %}
        <div style="border:1px solid #ccc; padding:20px; margin:10px;">
            <h3>Question {{q.question_id}}</h3>
            <p>{{q.question_text}}</p>
            {% if q.image_path %}
                <img src="/img/{{q.question_id}}" style="max-width:500px;">
            {% endif %}
        </div>
    {% endfor %}
    """
    return render_template_string(html, questions=data["questions"])

@app.route('/img/<int:qid>')
def get_img(qid):
    return send_file(f"images/question_{qid}.png", mimetype='image/png')

if __name__ == "__main__": app.run(debug=True, port=5001)