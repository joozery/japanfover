"""
Test MySQL Database Connection
Run: python test_connection.py
"""

import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

def test_mysql_connection():
    """Test MySQL connection"""
    print("🔍 Testing MySQL Connection...\n")
    
    host = os.getenv("DB_HOST", "145.223.21.117")
    port = int(os.getenv("DB_PORT", "3306"))
    user = os.getenv("DB_USER", "debian-sys-maint")
    password = os.getenv("DB_PASSWORD", "Str0ngP@ssw0rd!")
    database = os.getenv("DB_NAME", "japane")
    
    print(f"Host: {host}")
    print(f"Port: {port}")
    print(f"User: {user}")
    print(f"Database: {database}\n")
    
    try:
        # Test connection
        connection = pymysql.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database=database,
            charset='utf8mb4'
        )
        
        print("✅ MySQL Connection Successful!\n")
        
        # Test query
        cursor = connection.cursor()
        cursor.execute("SHOW TABLES;")
        tables = cursor.fetchall()
        
        if tables:
            print("📊 Existing tables:")
            for table in tables:
                print(f"  - {table[0]}")
        else:
            print("ℹ️  No tables found. Run: python seed_data.py")
        
        # Get database info
        cursor.execute("SELECT DATABASE();")
        db_name = cursor.fetchone()
        print(f"\n📁 Current database: {db_name[0]}")
        
        cursor.execute("SELECT VERSION();")
        version = cursor.fetchone()
        print(f"🔧 MySQL version: {version[0]}")
        
        cursor.close()
        connection.close()
        
        print("\n✨ Everything looks good!")
        return True
        
    except pymysql.err.OperationalError as e:
        print(f"❌ Connection Error: {e}")
        print("\n💡 Solutions:")
        print("  1. Check if MySQL server is running")
        print("  2. Verify credentials in .env file")
        print("  3. Check firewall settings")
        print("  4. Verify database 'japane' exists")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    test_mysql_connection()

