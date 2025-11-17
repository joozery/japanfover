from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="user")  # user, admin
    level = Column(String, default="N5")  # N5, N4, N3, N2, N1
    created_at = Column(DateTime, default=datetime.utcnow)
    
    quiz_results = relationship("QuizResult", back_populates="user")
    encountered_words = relationship("EncounteredWord", back_populates="user")

class Vocabulary(Base):
    __tablename__ = "vocabulary"

    id = Column(Integer, primary_key=True, index=True)
    japanese = Column(String, nullable=False)
    hiragana = Column(String, nullable=False)
    romaji = Column(String, nullable=False)
    thai = Column(String, nullable=False)
    category = Column(String, nullable=False)  # greetings, family, animals, etc.
    level = Column(String, nullable=False)  # N5, N4, N3, N2, N1
    image = Column(Text, nullable=True)  # base64 or URL
    audio = Column(Text, nullable=True)  # base64 or URL
    is_custom = Column(Integer, default=0)  # 0 = system, 1 = custom
    created_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class QuizResult(Base):
    __tablename__ = "quiz_results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    level = Column(String, nullable=False)
    category = Column(String, nullable=False)
    score = Column(Float, nullable=False)
    total_time = Column(Integer, nullable=False)  # milliseconds
    created_at = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User", back_populates="quiz_results")

class EncounteredWord(Base):
    __tablename__ = "encountered_words"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    vocabulary_id = Column(Integer, ForeignKey("vocabulary.id"), nullable=False)
    encountered_at = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User", back_populates="encountered_words")

