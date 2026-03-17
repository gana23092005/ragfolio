#!/usr/bin/env bash
# exit on error
set -o errexit

# 1. Build Frontend
echo ">>> Building Frontend..."
cd frontend
npm install
npm run build
cd ..

# 2. Install Backend Dependencies
echo ">>> Installing Backend Dependencies..."
pip install -r requirements.txt

# 3. Build RAG Vector Store
echo ">>> Vectorizing Resume Data..."
# Ensure we have the data directory ready
mkdir -p rag/chroma_db
# Run the ingestion script to create the DB from resume.txt
python rag/create-embeddings.py

echo ">>> Build Complete!"
