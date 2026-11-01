# GuacamoleGH • Homelab Portal & Dashboard

Landing page y dashboard público para el homelab y proyectos personales de **GuacamoleGH** (`https://guacamolegh.es`). Diseñado con una estética moderna, minimalista y tecnológica inspirada en dashboards de infraestructura self-hosted y perfiles de desarrollo de alto nivel.

---

## ⚡ Características

- **Diseño Homelab Moderno**: Tema oscuro nativo con sutiles gradientes, acentos visuales y bordes refinados.
- **Acceso Directo a Servicios**:
  - **Hub**: Portal principal y herramientas personales (`https://hub.guacamolegh.es`).
  - **Atlas**: Aplicación y mapas de proyectos (`https://atlas.guacamolegh.es`).
  - **Coche**: Gestión de mantenimiento, revisiones y telemetría (`https://coche.guacamolegh.es`).
  - **Games**: Catálogo web de juegos arcade para navegador (`https://games.guacamolegh.es`).
- **Sección de Infraestructura**: Flujo visual de conexión desde Cloudflare Tunnel hasta los contenedores Docker en Ubuntu Server.
- **Sección de Proyectos**: Repositorios y desarrollos personales alojados en GitHub.
- **100% Configurable**: Toda la información se gestiona de forma centralizada en [`src/data/config.ts`](./src/data/config.ts) o mediante variables en `.env`.
- **Docker Ready**: Multi-stage build con Node 22 y Nginx Alpine optimizado para servir assets estáticos bajo Cloudflare Tunnel.

---

## 🛠️ Tecnologías

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/) + SVG nativos
- **Servidor Web Producción**: [Nginx Alpine](https://hub.docker.com/_/nginx)
- **Contenedores**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## 💻 Flujo de Desarrollo Local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 3. Comprobar tipos y linters
```bash
npm run lint
```

### 4. Construir versión de producción local
```bash
npm run build
npm run preview
```

---

## 🐳 Despliegue en el Servidor Ubuntu (Docker Compose)

### Paso 1: Conectar al servidor Ubuntu
```bash
ssh usuario@tu-servidor-ip
cd /ruta/hacia/guacamolegh
git pull origin main
```

### Paso 2: Levantar o reconstruir el contenedor
```bash
docker compose up -d --build
```

---

## 🌐 Configuración en Cloudflare Tunnel

Para conectar tu dominio `https://guacamolegh.es` con el contenedor:

1. Ve al panel de **Cloudflare Zero Trust** > **Networks** > **Tunnels**.
2. Selecciona tu túnel activo y ve a **Public Hostname**.
3. Añade una nueva regla de entrada:
   - **Subdomain**: *(vacío)*
   - **Domain**: `guacamolegh.es`
   - **Type**: `HTTP`
   - **URL**: `localhost:3080`
4. Guarda los cambios.
