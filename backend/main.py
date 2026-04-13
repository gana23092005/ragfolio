"""
RAG Chatbot Backend - FastAPI Controller
Orchestration layer between frontend and RAG query engine.
"""

import logging
import time
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from rag_query import answer_question

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s"
)
logger = logging.getLogger("ragfolio.backend")

# Initialize FastAPI app
app = FastAPI(
    title="Ragfolio RAG API",
    description="FastAPI backend for Resume RAG chatbot powered by Gemini",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models
class AskRequest(BaseModel):
    question: str

class AskResponse(BaseModel):
    answer: str


# Middleware for request logging
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    logger.debug(f"Request started: {request.method} {request.url.path}")
    response = await call_next(request)
    latency = time.time() - start_time
    logger.debug(
        f"Request completed: {request.method} {request.url.path} "
        f"| Status: {response.status_code} | Latency: {latency:.3f}s"
    )
    return response


# Health Check Endpoint
@app.get("/api/health")
async def health_check():
    """Health check endpoint to verify the API is running."""
    logger.debug("Health check called")
    return {"status": "ok"}


# Primary RAG Endpoint
@app.post("/api/ask", response_model=AskResponse)
async def ask_question(request: AskRequest):
    """
    Accept a question and return an AI-generated answer using RAG.
    Validates input, calls the RAG engine, and returns the response.
    """
    logger.debug(f"Incoming question: {request.question!r}")

    # Validate question
    if not request.question or not request.question.strip():
        logger.warning("Empty or whitespace-only question received")
        raise HTTPException(
            status_code=400,
            detail="Question must not be empty or whitespace."
        )

    try:
        answer = answer_question(request.question)
        logger.debug(f"Gemini output: {answer!r}")
        return AskResponse(answer=answer)

    except Exception as e:
        logger.exception(f"Error during RAG processing: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error during RAG processing: {str(e)}"
        )


# Server startup
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)