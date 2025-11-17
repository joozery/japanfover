# Japanese For Everyday - Backend API

Backend API สำหรับเว็บไซต์เรียนภาษาญี่ปุ่นออนไลน์

## 🚀 เทคโนโลยี

- **FastAPI** - Web Framework
- **SQLAlchemy** - ORM
- **MySQL** - Database (Production)
- **JWT** - Authentication
- **Pydantic** - Data Validation
- **PyMySQL** - MySQL Driver

## 📦 การติดตั้ง

### 1. สร้าง Virtual Environment

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

### 2. ติดตั้ง Dependencies

```bash
pip install -r requirements.txt
```

### 3. สร้างไฟล์ .env

```bash
cp .env.example .env
```

แก้ไข `.env` (ตั้งค่า MySQL แล้ว):
```env
DB_HOST=145.223.21.117
DB_PORT=3306
DB_NAME=japane
DB_USER=debian-sys-maint
DB_PASSWORD=Str0ngP@ssw0rd!
SECRET_KEY=your-super-secret-key-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### 3.1 ทดสอบการเชื่อมต่อ MySQL (Optional)

```bash
python test_connection.py
```

### 4. สร้าง Tables และ Seed Data

```bash
python seed_data.py
```

### 5. รันเซิร์ฟเวอร์

```bash
uvicorn app.main:app --reload --port 8000
```

## 📚 API Documentation

เมื่อรันเซิร์ฟเวอร์แล้ว เข้าไปดู API Docs ได้ที่:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔐 Authentication

### Admin Login
```
Email: admin@japanfever.com
Password: admin123
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - ลงทะเบียนผู้ใช้ใหม่
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/admin-login` - เข้าสู่ระบบ Admin
- `GET /api/auth/me` - ดูข้อมูลผู้ใช้ปัจจุบัน

### Users (Admin Only)
- `GET /api/users/` - ดูผู้ใช้ทั้งหมด
- `GET /api/users/{user_id}` - ดูข้อมูลผู้ใช้
- `DELETE /api/users/{user_id}` - ลบผู้ใช้

### Vocabulary
- `GET /api/vocabulary/` - ดูคำศัพท์ทั้งหมด
- `GET /api/vocabulary/{id}` - ดูคำศัพท์ตาม ID
- `POST /api/vocabulary/` - เพิ่มคำศัพท์ใหม่ (ต้อง login)
- `PUT /api/vocabulary/{id}` - แก้ไขคำศัพท์ (ต้อง login)
- `DELETE /api/vocabulary/{id}` - ลบคำศัพท์ (ต้อง login)

### Quiz
- `POST /api/quiz/submit` - ส่งผลคะแนน
- `GET /api/quiz/my-results` - ดูผลคะแนนของตัวเอง
- `GET /api/quiz/results/{id}` - ดูผลคะแนนตาม ID

### Leaderboard
- `GET /api/leaderboard/` - ดูกระดานคะแนน
  - Query params: `level`, `category`, `limit`

## 🗄️ Database Schema

### Users
- id (PK)
- email
- name
- hashed_password
- role (user/admin)
- level (N5/N4/N3/N2/N1)
- created_at

### Vocabulary
- id (PK)
- japanese
- hiragana
- romaji
- thai
- category
- level
- image (base64/URL)
- audio (base64/URL)
- is_custom
- created_by (FK)
- created_at

### QuizResult
- id (PK)
- user_id (FK)
- level
- category
- score
- total_time
- created_at

### EncounteredWord
- id (PK)
- user_id (FK)
- vocabulary_id (FK)
- encountered_at

## 🔧 Development

### รัน Development Server

```bash
uvicorn app.main:app --reload --port 8000
```

### สร้าง Database Migration (Alembic)

```bash
# สร้าง migration
alembic revision --autogenerate -m "description"

# รัน migration
alembic upgrade head
```

## 🐳 Docker (Optional)

```bash
# Build image
docker build -t japanese-for-everyday-api .

# Run container
docker run -d -p 8000:8000 japanese-for-everyday-api
```

## 📝 Notes

- **Database**: MySQL (Production Ready)
  - Host: 145.223.21.117
  - Database: japane
- **Authentication**: JWT tokens
- **CORS**: เปิดให้ frontend ที่ port 3035 และ 3000 เข้าถึงได้
- **Connection Pool**: ตั้งค่า pool_pre_ping และ pool_recycle แล้ว

## 🗄️ MySQL Database

ดูรายละเอียดการตั้งค่า MySQL ใน [SETUP_MYSQL.md](./SETUP_MYSQL.md)

**Quick Start:**
```bash
# 1. ทดสอบการเชื่อมต่อ
python test_connection.py

# 2. สร้าง tables และ seed data
python seed_data.py

# 3. รันเซิร์ฟเวอร์
uvicorn app.main:app --reload --port 8000
```

## 🚀 Production

สำหรับ production แนะนำ:
1. ✅ ใช้ MySQL (ตั้งค่าแล้ว)
2. ⚠️ เปลี่ยน SECRET_KEY ใหม่
3. ⚠️ ตั้งค่า HTTPS/SSL
4. ⚠️ ใช้ Gunicorn/Uvicorn workers
5. ⚠️ ตั้งค่า rate limiting
6. ⚠️ เพิ่ม monitoring และ logging
7. ✅ ตั้งค่า MySQL connection pool แล้ว

## 📄 License

MIT License

