from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List, Optional

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/leaderboard", tags=["Leaderboard"])

@router.get("/", response_model=List[schemas.LeaderboardEntry])
def get_leaderboard(
    level: Optional[str] = None,
    category: Optional[str] = None,
    limit: int = Query(default=100, le=100),
    db: Session = Depends(get_db)
):
    # Build query
    query = db.query(
        models.User.id.label("user_id"),
        models.User.name.label("user_name"),
        func.sum(models.QuizResult.score).label("total_score"),
        func.count(models.QuizResult.id).label("total_quizzes"),
        func.avg(models.QuizResult.score).label("avg_score"),
        func.max(models.QuizResult.score).label("best_score")
    ).join(
        models.QuizResult, models.User.id == models.QuizResult.user_id
    )
    
    # Apply filters
    if level:
        query = query.filter(models.QuizResult.level == level)
    if category:
        query = query.filter(models.QuizResult.category == category)
    
    # Group and order
    leaderboard = query.group_by(
        models.User.id, models.User.name
    ).order_by(
        func.sum(models.QuizResult.score).desc()
    ).limit(limit).all()
    
    # Format results
    result = []
    for entry in leaderboard:
        result.append({
            "user_id": entry.user_id,
            "user_name": entry.user_name,
            "total_score": float(entry.total_score),
            "total_quizzes": entry.total_quizzes,
            "avg_score": round(float(entry.avg_score), 2),
            "best_score": float(entry.best_score)
        })
    
    return result

