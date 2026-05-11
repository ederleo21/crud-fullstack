# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [1.0.0] - 2026-05-11

### ✨ Agregado
- Sistema CRUD completo para gestión académica (Carreras y Modalidades)
- Backend Django REST Framework con API robusta
- Frontend React con Redux Toolkit para gestión de estado
- Diseño responsivo con Tailwind CSS y Flowbite
- Validación de formularios con Formik y Yup
- Sistema de notificaciones con React Toastify
- Pipeline de Integración Continua con GitHub Actions

### 🎨 Mejorado
- Diseño de paneles principales con gradientes de color
- Interfaz de usuario más intuitiva y moderna
- Mejora en la experiencia del usuario con colores distintivos para cada módulo
- Arquitectura modular del frontend para mejor mantenibilidad
- Configuración centralizada de API con Axios

### 🐛 Corregido
- Validación mejorada en API backend
- Corrección en restricciones de base de datos
- Mejora en manejo de relaciones CASCADE

### 🔧 Tecnología
- **Backend**: Django 4.2.27, djangorestframework 3.16.1
- **Frontend**: React 19.2.0, Vite 7.2.5, Redux Toolkit 2.11.2
- **Styling**: Tailwind CSS 3.4.19, Flowbite 4.0.1
- **Validación**: Formik 2.4.9, Yup 1.7.1
- **API**: Axios 1.13.2
- **Herramientas**: GitHub Actions para CI, ESLint para quality

### 📋 Características de la Versión 1.0.0

#### Funcionalidades Académicas
- Gestión completa de Carreras (Create, Read, Update, Delete)
- Gestión completa de Modalidades (Create, Read, Update, Delete)
- Relación entre Carreras y Modalidades
- Filtros avanzados por nombre, estado y modalidad
- Estados activo/inactivo para recursos

#### Control de Versiones
- Repositorio Git con estructura de ramas por funcionalidad
- Políticas de commit consistentes
- Historial de cambios documentado
- 3 ramas de desarrollo + main

#### Integración Continua
- Pipeline CI/CD automatizado
- Validación de código frontend (ESLint)
- Build automatizado de frontend (Vite)
- Validación de backend (Django checks)
- Reporte de construcción automático

#### Arquitectura
- Separación de responsabilidades
- Componentes reutilizables
- API RESTful bien documentada
- Manejo centralizado de estado

### 🚀 Instalación Rápida

```bash
# Clonar repositorio
git clone https://github.com/ederleo21/crud-fullstack.git

# Backend
cd institucion
pip install -r ../requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd ../frontend
npm install
npm run dev
```

### 📝 Notas
- Primera versión estable del sistema CRUD fullstack
- Listo para uso en producción con ajustes menores
- Documentación completa incluida

### 🔗 Enlaces
- Repositorio: https://github.com/ederleo21/crud-fullstack
- Documentación: Ver README.md en cada carpeta
- Issues: https://github.com/ederleo21/crud-fullstack/issues
