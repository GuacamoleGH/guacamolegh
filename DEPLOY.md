# GuacamoleGH • Homelab Portal & Dashboard

Landing page y dashboard público para el homelab y proyectos personales de **GuacamoleGH** (`https://guacamolegh.es`). Diseñado con una estética moderna, minimalista y tecnológica inspirada en dashboards de infraestructura self-hosted y perfiles de desarrollo de alto nivel.

---

## ⚡ Características

- **Diseño Homelab Moderno**: Tema oscuro nativo con sutiles gradientes, acentos visuales y bordes refinados.
- **Acceso Directo a Servicios**:
  - **Hub**: Portal principal y herramientas personales (`https://hub.guacamolegh.es`).
  - **Atlas**: Aplicación y mapas de proyectos (`https://atlas.guacamolegh.es`).
  - **Coche**: Gestión de mantenimiento, revisiones y telemetría (`https://coche.guacamolegh.es`).
  - **Uptime Kuma**: Panel y página de estado de disponibilidad 24/7.
- **Sección de Monitorización**: Integración segura con Uptime Kuma mediante enlace a la Status Page oficial, sin exponer credenciales ni tokens en el frontend.
- **Sección de Proyectos**: Repositorios y desarrollos personales alojados en GitHub.
- **100% Configurable**: Toda la información (URLs, nombres, descripciones, proyectos y enlaces) se gestiona de forma centralizada en [`src/data/config.ts`](./src/data/config.ts) o mediante variables en `.env`.
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

## 📁 Estructura del Proyecto

```text
guacamolegh/
├── public/
│   ├── favicon.svg          # Favicon vectorial con la identidad GuacamoleGH
│   └── logo.svg             # Logo SVG de la marca
├── src/
│   ├── components/
│   │   ├── DynamicIcon.tsx   # Renderizador tipado de iconos Lucide
│   │   ├── Footer.tsx        # Pie de página con créditos, año dinámico y stack
│   │   ├── GithubIcon.tsx    # Icono SVG accesible de GitHub
│   │   ├── Header.tsx        # Barra de navegación superior con menú responsive
│   │   ├── Hero.tsx          # Presentación principal e insignias de estado
│   │   ├── Logo.tsx          # Componente vectorial de la identidad visual
│   │   ├── ProjectsSection.tsx# Grid de proyectos personales de GitHub
│   │   ├── ServiceCard.tsx   # Tarjeta interactiva accesible para cada servicio
│   │   ├── ServicesSection.tsx# Sección principal de servicios homelab
│   │   └── StatusSection.tsx  # Sección de auditoría y enlace a Uptime Kuma
│   ├── data/
│   │   └── config.ts         # CONFIGURACIÓN CENTRALIZADA (URLs, datos y servicios)
│   ├── types/
│   │   └── index.ts          # Definiciones de tipos TypeScript
│   ├── App.tsx               # Ensamblador principal de la aplicación
│   ├── index.css             # Estilos globales y Tailwind CSS
│   └── main.tsx              # Punto de entrada de la SPA
├── .env.example              # Plantilla de variables de entorno
├── docker-compose.yml        # Configuración para despliegue en servidor
├── Dockerfile                # Multi-stage build optimizado
├── nginx.conf                # Configuración de Nginx (SPA routing, gzip, cache)
├── package.json              # Dependencias y scripts de npm
└── vite.config.ts            # Configuración de Vite y plugin Tailwind
```

---

## ⚙️ Configuración y Personalización

Para modificar cualquier enlace, título o añadir nuevos proyectos o servicios, edita únicamente el archivo:

👉 **[`src/data/config.ts`](./src/data/config.ts)**

También puedes definir variables de entorno en un archivo `.env`:

```bash
# Copia la plantilla
cp .env.example .env
```

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `PORT` | Puerto en el host para Docker Compose | `3080` |
| `VITE_GITHUB_URL` | Enlace a tu perfil de GitHub | `https://github.com/guacamolegh` |
| `VITE_HUB_URL` | URL del servicio Hub | `https://hub.guacamolegh.es` |
| `VITE_ATLAS_URL` | URL del servicio Atlas | `https://atlas.guacamolegh.es` |
| `VITE_COCHE_URL` | URL del servicio Coche | `https://coche.guacamolegh.es` |
| `VITE_UPTIME_KUMA_URL` | URL del panel o status page de Uptime Kuma | `https://status.guacamolegh.es` |
| `VITE_UPTIME_STATUS_PAGE_URL`| URL pública de estado para visitantes | `https://status.guacamolegh.es` |

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

## 🚀 Subir Cambios a GitHub

Si aún no has vinculado el repositorio con GitHub:

```bash
# 1. Inicializar repositorio git local (si no lo has hecho)
git init

# 2. Añadir todos los archivos
git add .

# 3. Realizar el commit inicial
git commit -m "feat: landing page completa para guacamolegh.es"

# 4. Configurar rama principal
git branch -M main

# 5. Asociar tu repositorio remoto de GitHub (sustituye tu usuario/organización)
git remote add origin https://github.com/guacamolegh/guacamolegh.git

# 6. Subir los cambios a GitHub
git push -u origin main
```

Para cambios posteriores:
```bash
git add .
git commit -m "update: ajustes de diseño y configuración"
git push
```

---

## 🐳 Despliegue en el Servidor Ubuntu (Docker Compose)

Este contenedor está diseñado para funcionar en segundo plano sin entrar en conflicto con tus otros contenedores (**Hub**, **Atlas**, **Coche** o **Uptime Kuma**).

### Paso 1: Conectar al servidor Ubuntu
```bash
ssh usuario@tu-servidor-ip
```

### Paso 2: Clonar o actualizar el repositorio
Si es la primera vez:
```bash
cd /opt  # o tu carpeta habitual de proyectos homelab
git clone https://github.com/guacamolegh/guacamolegh.git
cd guacamolegh
```

Si ya existe y solo deseas actualizar:
```bash
cd /ruta/hacia/guacamolegh
git pull origin main
```

### Paso 3: Configurar el puerto (opcional)
Por defecto, la web se expondrá en el puerto `3080` del host (mapeado al puerto `80` interno de Nginx). Si deseas cambiarlo para que no coincida con ningún servicio existente:

```bash
echo "PORT=3080" > .env
```

### Paso 4: Levantar o reconstruir el contenedor
```bash
# Construye la imagen y levanta el contenedor en segundo plano
docker compose up -d --build
```

Para verificar que está corriendo:
```bash
docker compose ps
docker compose logs -f
```

---

## 🌐 Configuración en Cloudflare Tunnel

Para conectar tu dominio `https://guacamolegh.es` con el contenedor:

1. Ve al panel de **Cloudflare Zero Trust** > **Networks** > **Tunnels**.
2. Selecciona tu túnel activo y ve a **Public Hostname**.
3. Añade una nueva regla de entrada (*Add a public hostname*):
   - **Subdomain**: *(déjalo vacío para el dominio raíz)* o `www`
   - **Domain**: `guacamolegh.es`
   - **Type**: `HTTP`
   - **URL**: `localhost:3080` (o `127.0.0.1:3080`)
4. Guarda los cambios. En pocos segundos, `https://guacamolegh.es` estará disponible en todo el mundo con certificado SSL automático y protección DDoS de Cloudflare.

---

## 🔄 Flujo de Actualización Futura (1 comando)

Cada vez que hagas un cambio en tu PC y lo subas a GitHub, en tu servidor solo necesitas ejecutar:

```bash
git pull && docker compose up -d --build
```

Esto descargará el código nuevo, reconstruirá la imagen estática optimizada y reiniciará únicamente el contenedor `guacamolegh-landing` sin ninguna interrupción en los demás servicios.
