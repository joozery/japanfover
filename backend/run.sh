#!/bin/bash

# Japanese For Everyday API - Run Script

echo "🌸 Starting Japanese For Everyday API..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo "✅ .env created. Please edit it with your configuration."
    else
        echo "❌ .env.example not found. Creating default .env..."
        cat > .env << EOF
DATABASE_URL=sqlite:///./japanese_for_everyday.db
SECRET_KEY=$(openssl rand -hex 32)
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
EOF
    fi
fi

# Run the server
echo "🚀 Starting server on http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

