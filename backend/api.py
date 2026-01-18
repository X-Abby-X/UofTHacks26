from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any
from processor import AcademicProcessor
from config import API_KEY

app = FastAPI()
processor = AcademicProcessor(api_key=API_KEY)

class SyllabusRequest(BaseModel):
    courseId: str
    syllabusUrl: str

class AnalysisRequest(BaseModel):
    courseId: str
    submissionUrl: str
    existingMilestones: List[Dict[str, Any]]

@app.post("/process-syllabus")
async def process_syllabus_endpoint(request: SyllabusRequest):
    result = processor.process_syllabus(request.syllabusUrl)
    return result

@app.post("/analyze-submission")
async def analyze_submission_endpoint(request: AnalysisRequest):
    result = processor.analyze_and_deduce_grade(
        request.submissionUrl, 
        request.existingMilestones,
        request.courseId
    )
    return result

if __name__ == "__main__":
    import uvicorn
    print(">>> Starting Academic API on http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)