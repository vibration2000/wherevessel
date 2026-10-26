FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN python -m playwright install --with-deps chromium
COPY cloud_server.py marinetraffic_service.py vessel_search.py vessel_enrichment.py research_documents.py route_service.py index.html app.js cloud-status.js style.css leaflet.js leaflet.css splash_image.jpg vessels.json ./
ENV PORT=10000 PYTHONUNBUFFERED=1 DATA_DIR=/tmp/wherevessel
EXPOSE 10000
CMD ["python", "cloud_server.py"]
