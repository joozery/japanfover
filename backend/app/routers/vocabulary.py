from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional

from .. import models, schemas, auth
from ..database import get_db

router = APIRouter(prefix="/api/vocabulary", tags=["Vocabulary"])

@router.get("/", response_model=List[schemas.Vocabulary])
def get_vocabulary(
    category: Optional[str] = None,
    level: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    query = db.query(models.Vocabulary)
    
    if category:
        query = query.filter(models.Vocabulary.category == category)
    if level:
        query = query.filter(models.Vocabulary.level == level)
    
    vocabulary = query.offset(skip).limit(limit).all()
    return vocabulary

@router.get("/{vocabulary_id}", response_model=schemas.Vocabulary)
def get_vocabulary_by_id(vocabulary_id: int, db: Session = Depends(get_db)):
    vocabulary = db.query(models.Vocabulary).filter(models.Vocabulary.id == vocabulary_id).first()
    if not vocabulary:
        raise HTTPException(status_code=404, detail="Vocabulary not found")
    return vocabulary

@router.post("/", response_model=schemas.Vocabulary, status_code=status.HTTP_201_CREATED)
def create_vocabulary(
    vocabulary: schemas.VocabularyCreate,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    db_vocabulary = models.Vocabulary(
        **vocabulary.dict(),
        is_custom=1,
        created_by=current_user.id
    )
    db.add(db_vocabulary)
    db.commit()
    db.refresh(db_vocabulary)
    return db_vocabulary

@router.put("/{vocabulary_id}", response_model=schemas.Vocabulary)
def update_vocabulary(
    vocabulary_id: int,
    vocabulary: schemas.VocabularyCreate,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    db_vocabulary = db.query(models.Vocabulary).filter(
        models.Vocabulary.id == vocabulary_id,
        models.Vocabulary.created_by == current_user.id
    ).first()
    
    if not db_vocabulary:
        raise HTTPException(status_code=404, detail="Vocabulary not found or not authorized")
    
    for key, value in vocabulary.dict().items():
        setattr(db_vocabulary, key, value)
    
    db.commit()
    db.refresh(db_vocabulary)
    return db_vocabulary

@router.delete("/{vocabulary_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_vocabulary(
    vocabulary_id: int,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    db_vocabulary = db.query(models.Vocabulary).filter(
        models.Vocabulary.id == vocabulary_id,
        models.Vocabulary.created_by == current_user.id
    ).first()
    
    if not db_vocabulary:
        raise HTTPException(status_code=404, detail="Vocabulary not found or not authorized")
    
    db.delete(db_vocabulary)
    db.commit()
    return None

