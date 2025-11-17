from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas, auth
from ..database import get_db

router = APIRouter(prefix="/api/quiz", tags=["Quiz"])

@router.post("/submit", response_model=schemas.QuizResult, status_code=status.HTTP_201_CREATED)
def submit_quiz_result(
    quiz_result: schemas.QuizResultCreate,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    db_result = models.QuizResult(
        **quiz_result.dict(),
        user_id=current_user.id
    )
    db.add(db_result)
    db.commit()
    db.refresh(db_result)
    return db_result

@router.get("/my-results", response_model=List[schemas.QuizResult])
def get_my_quiz_results(
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    results = db.query(models.QuizResult).filter(
        models.QuizResult.user_id == current_user.id
    ).order_by(models.QuizResult.created_at.desc()).all()
    return results

@router.get("/results/{result_id}", response_model=schemas.QuizResult)
def get_quiz_result(
    result_id: int,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    result = db.query(models.QuizResult).filter(
        models.QuizResult.id == result_id,
        models.QuizResult.user_id == current_user.id
    ).first()
    
    if not result:
        raise HTTPException(status_code=404, detail="Quiz result not found")
    return result

