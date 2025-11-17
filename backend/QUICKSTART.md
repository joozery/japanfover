# 🚀 Quick Start Guide

## เริ่มต้นใช้งาน Backend API ใน 5 นาที

### 1️⃣ ติดตั้ง Dependencies

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
```

### 2️⃣ ตั้งค่า Database (ตั้งค่าแล้ว ✅)

ไฟล์ `.env` มีการตั้งค่า MySQL แล้ว:
```env
DB_HOST=145.223.21.117
DB_PORT=3306
DB_NAME=japane
DB_USER=debian-sys-maint
DB_PASSWORD=Str0ngP@ssw0rd!
```

### 3️⃣ ทดสอบการเชื่อมต่อ

```bash
python test_connection.py
```

Expected output:
```
✅ MySQL Connection Successful!
📊 Existing tables:
📁 Current database: japane
🔧 MySQL version: 8.0.x
✨ Everything looks good!
```

### 4️⃣ สร้าง Tables และ Seed Data

```bash
python seed_data.py
```

Expected output:
```
🌸 Japanese For Everyday - Seeding Database (MySQL)
✅ Database tables created
✅ Created admin user (admin@japanfever.com / admin123)
✅ Created 3 test users
✅ Seeded 10 vocabulary items
✨ Database seeding completed!
```

### 5️⃣ รันเซิร์ฟเวอร์

```bash
uvicorn app.main:app --reload --port 8000
```

หรือใช้ script:
```bash
./run.sh
```

Expected output:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete.
```

### 6️⃣ ทดสอบ API

เปิดเบราว์เซอร์:
- **API Docs**: http://localhost:8000/docs
- **Root**: http://localhost:8000/

#### ทดสอบ Login (ใช้ curl):

```bash
curl -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin@japanfever.com&password=admin123"
```

Response:
```json
{
  "access_token": "eyJhbGci...",
  "token_type": "bearer"
}
```

#### ทดสอบ Get Vocabulary:

```bash
curl -X GET "http://localhost:8000/api/vocabulary/?category=greetings&level=N5"
```

## 📝 Login Credentials

### Admin:
```
Email: admin@japanfever.com
Password: admin123
```

### Test User:
```
Email: user1@example.com
Password: password123
```

## 🎯 Next Steps

1. ✅ Backend API พร้อมใช้งาน!
2. 🔗 เชื่อมต่อ Frontend React (http://localhost:3035)
3. 📚 ดู API Documentation ที่ http://localhost:8000/docs
4. 🧪 ทดสอบ Endpoints ต่างๆ

## ❌ หาก Error?

### Error: Can't connect to MySQL
```bash
# ตรวจสอบว่า MySQL server รันอยู่
python test_connection.py
```

### Error: Access denied
```bash
# ตรวจสอบ credentials ใน .env
cat .env
```

### Error: Unknown database 'japane'
```sql
-- สร้าง database
CREATE DATABASE japane CHARACTER SET utf8mb4;
```

## 📖 Read More

- [README.md](./README.md) - Full documentation
- [SETUP_MYSQL.md](./SETUP_MYSQL.md) - MySQL setup guide
- [API Docs](http://localhost:8000/docs) - Interactive API documentation

## 🎉 เสร็จแล้ว!

Backend API พร้อมใช้งาน ตอนนี้สามารถ:
- ✅ Login/Register users
- ✅ จัดการ Vocabulary (CRUD)
- ✅ Submit quiz results
- ✅ ดู Leaderboard
- ✅ Admin panel operations

Happy coding! 🚀

