from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, vocabulary, users, quiz, leaderboard

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Japanese For Everyday API",
    description="Backend API for Japanese learning platform",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3035", "http://localhost:3000"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(vocabulary.router)
app.include_router(users.router)
app.include_router(quiz.router)
app.include_router(leaderboard.router)

@app.get("/")
def read_root():
    return {
        "message": "Japanese For Everyday API",
        "version": "1.0.0",
        "docs": "/docs",
        "status": "active"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}

