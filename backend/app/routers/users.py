from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas, auth
from ..database import get_db

router = APIRouter(prefix="/api/users", tags=["Users"])

@router.get("/", response_model=List[schemas.User])
def get_users(
    skip: int = 0,
    limit: int = 100,
    current_admin: models.User = Depends(auth.get_current_admin),
    db: Session = Depends(get_db)
):
    users = db.query(models.User).offset(skip).limit(limit).all()
    return users

@router.get("/{user_id}", response_model=schemas.User)
def get_user(
    user_id: int,
    current_admin: models.User = Depends(auth.get_current_admin),
    db: Session = Depends(get_db)
):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(
    user_id: int,
    current_admin: models.User = Depends(auth.get_current_admin),
    db: Session = Depends(get_db)
):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Don't allow deleting admin users
    if user.role == "admin":
        raise HTTPException(status_code=403, detail="Cannot delete admin users")
    
    db.delete(user)
    db.commit()
    return None

