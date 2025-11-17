from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(UserBase):
    id: int
    role: str
    level: str
    created_at: datetime

    class Config:
        from_attributes = True

# Vocabulary Schemas
class VocabularyBase(BaseModel):
    japanese: str
    hiragana: str
    romaji: str
    thai: str
    category: str
    level: str
    image: Optional[str] = None
    audio: Optional[str] = None

class VocabularyCreate(VocabularyBase):
    pass

class Vocabulary(VocabularyBase):
    id: int
    is_custom: int
    created_at: datetime

    class Config:
        from_attributes = True

# Quiz Result Schemas
class QuizResultCreate(BaseModel):
    level: str
    category: str
    score: float
    total_time: int

class QuizResult(QuizResultCreate):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Leaderboard Schema
class LeaderboardEntry(BaseModel):
    user_id: int
    user_name: str
    total_score: float
    total_quizzes: int
    avg_score: float
    best_score: float

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

