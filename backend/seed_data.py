"""
Seed initial data to database
Run: python seed_data.py
"""

from app.database import SessionLocal, engine
from app import models
from app.auth import get_password_hash
import json

def seed_vocabulary():
    """Seed vocabulary data from vocabularyData.js"""
    db = SessionLocal()
    
    # Sample vocabulary data (you can expand this)
    vocabulary_data = [
        # Greetings N5
        {"japanese": "こんにちは", "hiragana": "こんにちは", "romaji": "konnichiwa", "thai": "สวัสดี (กลางวัน)", "category": "greetings", "level": "N5"},
        {"japanese": "おはよう", "hiragana": "おはよう", "romaji": "ohayou", "thai": "สวัสดี (เช้า)", "category": "greetings", "level": "N5"},
        {"japanese": "こんばんは", "hiragana": "こんばんは", "romaji": "konbanwa", "thai": "สวัสดี (เย็น)", "category": "greetings", "level": "N5"},
        {"japanese": "ありがとう", "hiragana": "ありがとう", "romaji": "arigatou", "thai": "ขอบคุณ", "category": "greetings", "level": "N5"},
        
        # Animals N5
        {"japanese": "犬", "hiragana": "いぬ", "romaji": "inu", "thai": "สุนัข", "category": "animals", "level": "N5"},
        {"japanese": "猫", "hiragana": "ねこ", "romaji": "neko", "thai": "แมว", "category": "animals", "level": "N5"},
        {"japanese": "鳥", "hiragana": "とり", "romaji": "tori", "thai": "นก", "category": "animals", "level": "N5"},
        
        # Numbers N5
        {"japanese": "一", "hiragana": "いち", "romaji": "ichi", "thai": "หนึ่ง", "category": "numbers", "level": "N5"},
        {"japanese": "二", "hiragana": "に", "romaji": "ni", "thai": "สอง", "category": "numbers", "level": "N5"},
        {"japanese": "三", "hiragana": "さん", "romaji": "san", "thai": "สาม", "category": "numbers", "level": "N5"},
    ]
    
    for vocab in vocabulary_data:
        db_vocab = models.Vocabulary(
            japanese=vocab["japanese"],
            hiragana=vocab["hiragana"],
            romaji=vocab["romaji"],
            thai=vocab["thai"],
            category=vocab["category"],
            level=vocab["level"],
            is_custom=0
        )
        db.add(db_vocab)
    
    db.commit()
    print(f"✅ Seeded {len(vocabulary_data)} vocabulary items")
    db.close()

def seed_admin():
    """Create admin user"""
    db = SessionLocal()
    
    # Check if admin exists
    admin = db.query(models.User).filter(models.User.email == "admin@japanfever.com").first()
    if admin:
        print("⚠️  Admin user already exists")
        db.close()
        return
    
    admin = models.User(
        email="admin@japanfever.com",
        name="Admin",
        hashed_password=get_password_hash("admin123"),
        role="admin",
        level="N1"
    )
    db.add(admin)
    db.commit()
    print("✅ Created admin user (admin@japanfever.com / admin123)")
    db.close()

def seed_test_users():
    """Create test users"""
    db = SessionLocal()
    
    test_users = [
        {"email": "user1@example.com", "name": "Somchai Prasert", "password": "password123"},
        {"email": "user2@example.com", "name": "Ploy Wongsakul", "password": "password123"},
        {"email": "user3@example.com", "name": "Nattapong Khamkhong", "password": "password123"},
    ]
    
    for user_data in test_users:
        existing = db.query(models.User).filter(models.User.email == user_data["email"]).first()
        if existing:
            continue
            
        user = models.User(
            email=user_data["email"],
            name=user_data["name"],
            hashed_password=get_password_hash(user_data["password"]),
            role="user",
            level="N5"
        )
        db.add(user)
    
    db.commit()
    print(f"✅ Created {len(test_users)} test users")
    db.close()

def main():
    print("🌸 Japanese For Everyday - Seeding Database (MySQL)\n")
    
    try:
        # Create tables
        models.Base.metadata.create_all(bind=engine)
        print("✅ Database tables created\n")
        
        # Seed data
        seed_admin()
        seed_test_users()
        seed_vocabulary()
        
        print("\n✨ Database seeding completed!")
        print("\n📝 Login credentials:")
        print("  Admin: admin@japanfever.com / admin123")
        print("  Test User: user1@example.com / password123")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("\n⚠️  Make sure MySQL database 'japane' exists and credentials are correct")
        print("   Check your .env file configuration")

if __name__ == "__main__":
    main()

