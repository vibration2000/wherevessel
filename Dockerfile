FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY cloud_server.py index.html app.js style.css leaflet.js leaflet.css splash_image.jpg vessels.json ./
ENV PORT=10000 PYTHONUNBUFFERED=1 DATA_DIR=/tmp/wherevessel
EXPOSE 10000
CMD ["python", "cloud_server.py"]
