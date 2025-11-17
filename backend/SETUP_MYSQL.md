# 🗄️ MySQL Database Setup

## ข้อมูล MySQL Database

```
Host: 145.223.21.117
Port: 3306
Database: japane
User: debian-sys-maint
Password: Str0ngP@ssw0rd!
```

## 📝 ขั้นตอนการติดตั้ง

### 1. ติดตั้ง Dependencies

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
# venv\Scripts\activate   # Windows

pip install -r requirements.txt
```

### 2. สร้างไฟล์ .env

```bash
cp .env.example .env
```

ไฟล์ `.env` มีการตั้งค่าแล้ว:
```env
DB_HOST=145.223.21.117
DB_PORT=3306
DB_NAME=japane
DB_USER=debian-sys-maint
DB_PASSWORD=Str0ngP@ssw0rd!
```

### 3. ตรวจสอบการเชื่อมต่อ MySQL

```bash
# ทดสอบเชื่อมต่อ (ต้องมี mysql client)
mysql -h 145.223.21.117 -P 3306 -u debian-sys-maint -p japane
# Password: Str0ngP@ssw0rd!
```

หรือใช้ Python test:
```python
import pymysql

try:
    connection = pymysql.connect(
        host='145.223.21.117',
        port=3306,
        user='debian-sys-maint',
        password='Str0ngP@ssw0rd!',
        database='japane'
    )
    print("✅ MySQL Connection Successful!")
    connection.close()
except Exception as e:
    print(f"❌ Error: {e}")
```

### 4. สร้าง Tables และ Seed Data

```bash
# สร้าง tables และเพิ่มข้อมูลเริ่มต้น
python seed_data.py
```

Output:
```
🌸 Japanese For Everyday - Seeding Database (MySQL)
✅ Database tables created
✅ Created admin user (admin@japanfever.com / admin123)
✅ Created 3 test users
✅ Seeded 10 vocabulary items
✨ Database seeding completed!
```

### 5. รันเซิร์ฟเวอร์

```bash
uvicorn app.main:app --reload --port 8000
```

หรือใช้ script:
```bash
chmod +x run.sh
./run.sh
```

## 📊 Database Tables

หลังจาก seed data แล้วจะมี tables:

### **users**
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    level VARCHAR(10) DEFAULT 'N5',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### **vocabulary**
```sql
CREATE TABLE vocabulary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    japanese VARCHAR(255) NOT NULL,
    hiragana VARCHAR(255) NOT NULL,
    romaji VARCHAR(255) NOT NULL,
    thai VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    level VARCHAR(10) NOT NULL,
    image TEXT,
    audio TEXT,
    is_custom TINYINT DEFAULT 0,
    created_by INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);
```

### **quiz_results**
```sql
CREATE TABLE quiz_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    level VARCHAR(10) NOT NULL,
    category VARCHAR(100) NOT NULL,
    score FLOAT NOT NULL,
    total_time INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### **encountered_words**
```sql
CREATE TABLE encountered_words (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    vocabulary_id INT NOT NULL,
    encountered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (vocabulary_id) REFERENCES vocabulary(id)
);
```

## 🔧 การแก้ปัญหา

### ❌ Error: Can't connect to MySQL server

1. ตรวจสอบ firewall ว่าเปิด port 3306
2. ตรวจสอบ MySQL server ว่ารันอยู่
3. ตรวจสอบ credentials ใน `.env`

### ❌ Error: Access denied for user

1. ตรวจสอบ username และ password
2. ตรวจสอบว่า user มีสิทธิ์เข้าถึง database `japane`
3. ลอง grant permissions:
```sql
GRANT ALL PRIVILEGES ON japane.* TO 'debian-sys-maint'@'%';
FLUSH PRIVILEGES;
```

### ❌ Error: Unknown database 'japane'

สร้าง database:
```sql
CREATE DATABASE japane CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 🐳 Docker

ถ้าใช้ Docker:
```bash
docker-compose up
```

Config อยู่ใน `docker-compose.yml` แล้ว

## 🔐 Security Notes

⚠️ **สำคัญ:**
1. เปลี่ยน `SECRET_KEY` ใน production
2. ใช้ HTTPS เมื่อ deploy
3. ไม่ควร commit `.env` ไปใน git
4. พิจารณาใช้ environment variables จริงใน production

## 🚀 Production Checklist

- [ ] ใช้ MySQL connection pool
- [ ] ตั้งค่า SSL/TLS สำหรับ MySQL
- [ ] เปลี่ยน SECRET_KEY
- [ ] ตั้งค่า CORS ให้ถูกต้อง
- [ ] เพิ่ม rate limiting
- [ ] ตั้งค่า logging
- [ ] Setup backup database
- [ ] Use load balancer

