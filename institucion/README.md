# Backend - CRUD Fullstack

Requisitos:
- Python 3.x
- pip
- Virtualenv (opcional)
- SQLite (por defecto)

Configuración:

```bash
cd institucion
python -m venv venv       # crear entorno virtual
# activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env      # crear archivo de entorno
python manage.py migrate
python manage.py runserver
