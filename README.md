# 💼 Portafolio Personal - Desarrollador de Software

Portafolio personal moderno y profesional para desarrolladores. Diseñado con HTML, CSS y JavaScript puro, completamente responsive y listo para personalizar.

![Portafolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portafolio+Preview)

## ✨ Características

- ✅ **100% Responsive** - Funciona perfectamente en todos los dispositivos
- ✅ **Diseño Moderno** - UI/UX profesional con gradientes y animaciones suaves
- ✅ **Optimizado para SEO** - Meta tags configurados para mejor posicionamiento
- ✅ **Accesible** - Buenas prácticas de accesibilidad (ARIA labels, semántica HTML)
- ✅ **Sin frameworks** - HTML, CSS y JavaScript puro (fácil de entender y modificar)
- ✅ **Fácil personalización** - Variables CSS y código bien comentado
- ✅ **Animaciones suaves** - Efectos visuales profesionales
- ✅ **Formulario de contacto** - Con validación integrada
- ✅ **Listo para desplegar** - Compatible con Vercel, Netlify, GitHub Pages

## 📁 Estructura del Proyecto

```
portafolio/
│
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos completos con variables CSS
├── js/
│   └── main.js             # JavaScript para interactividad
├── assets/
│   └── images/             # Carpeta para tus imágenes
└── README.md               # Este archivo
```

## 🎨 Secciones Incluidas

1. **Hero** - Presentación con nombre, rol y llamadas a la acción
2. **Sobre Mí** - Biografía, foto de perfil y tecnologías
3. **Proyectos** - Showcase de proyectos con cards interactivas
4. **Habilidades** - Barras de progreso animadas por categorías
5. **Contacto** - Formulario funcional y métodos de contacto
6. **Footer** - Información de copyright

## 🚀 Instalación y Uso

### Opción 1: Descarga Directa

1. Descarga o clona este repositorio:
```bash
git clone https://github.com/tuusuario/portafolio.git
cd portafolio
```

2. Abre `index.html` en tu navegador o usa Live Server

### Opción 2: Live Server (Recomendado)

Si usas VS Code:

1. Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## ⚙️ Personalización

### 1. Información Personal

Edita `index.html` y busca las siguientes secciones:

```html
<!-- Nombre y título -->
<h1 class="hero-title">
    <span class="hero-name">Tu Nombre</span>
</h1>

<!-- Email y redes sociales -->
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="https://github.com/tuusuario">GitHub</a>
```

### 2. Colores y Estilos

Modifica las variables CSS en `css/styles.css`:

```css
:root {
    /* Cambia estos colores según tu preferencia */
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... más variables */
}
```

### 3. Foto de Perfil

Reemplaza el placeholder en la sección "Sobre Mí":

```html
<!-- En index.html, línea ~186 -->
<img src="assets/images/mi-foto.jpg" alt="Tu Nombre - Foto de perfil">
```

### 4. Proyectos

Edita las tarjetas de proyectos en `index.html`:

```html
<article class="project-card">
    <div class="project-image">
        <img src="tu-imagen.jpg" alt="Proyecto">
    </div>
    <div class="project-info">
        <h3 class="project-title">Tu Proyecto</h3>
        <p class="project-description">Descripción...</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <!-- Más tags -->
        </div>
    </div>
</article>
```

### 5. Habilidades

Modifica los porcentajes y nombres en `index.html`:

```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Tu Habilidad</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

El diseño se adapta a diferentes tamaños de pantalla:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Funcionalidades JavaScript

El archivo `main.js` incluye:

- ✅ Navegación móvil con menú hamburguesa
- ✅ Scroll suave entre secciones
- ✅ Detección de sección activa en navegación
- ✅ Animaciones de entrada (scroll-triggered)
- ✅ Efecto typing en el subtítulo
- ✅ Validación de formulario de contacto
- ✅ Botón "Volver arriba" dinámico
- ✅ Animación de barras de progreso

## 🌐 Despliegue

### Vercel (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Instala Vercel CLI:
```bash
npm i -g vercel
```
3. Despliega:
```bash
vercel
```

### GitHub Pages

1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu sitio estará en `https://tuusuario.github.io/repositorio`

### Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. ¡Listo! Tu sitio está en línea

## 🔧 Configuración de Formulario

El formulario actualmente simula el envío. Para hacerlo funcional:

### Opción 1: Formspree

```html
<form action="https://formspree.io/f/tu-form-id" method="POST">
    <!-- Campos del formulario -->
</form>
```

### Opción 2: EmailJS

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Agrega el SDK en `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

4. Modifica `main.js` para usar EmailJS

### Opción 3: Backend propio

Crea tu propia API y modifica la función `simulateFormSubmission()` en `main.js`

## 📝 SEO y Meta Tags

No olvides personalizar los meta tags en `index.html`:

```html
<meta name="description" content="Tu descripción">
<meta name="keywords" content="tus, palabras, clave">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="Tu Título">
<!-- etc. -->
```

## 🎨 Paleta de Colores

El diseño usa esta paleta por defecto:

- **Primary**: `#667eea` (Azul-morado)
- **Secondary**: `#764ba2` (Morado)
- **Accent**: `#f093fb` (Rosa)

Puedes generar tu propia paleta en [Coolors](https://coolors.co)

## 🚨 Solución de Problemas

### Las animaciones no funcionan
- Asegúrate de que `main.js` esté cargando correctamente
- Verifica la consola del navegador para errores

### El menú móvil no se cierra
- Revisa que los IDs en HTML coincidan con los del JavaScript
- Verifica que no haya errores en la consola

### El formulario no envía
- Por defecto está en modo "simulación"
- Configura un servicio real (ver sección de Formulario)

## 📚 Recursos Adicionales

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com)
- [Coolors (Paletas de color)](https://coolors.co)
- [CSS Gradient Generator](https://cssgradient.io)
- [Placeholder Images](https://placeholder.com)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tu portafolio personal.

## 👤 Autor

**Tu Nombre**

- GitHub: [@tuusuario](https://github.com/tuusuario)
- LinkedIn: [@tuusuario](https://linkedin.com/in/tuusuario)
- Email: tu@email.com

## ⭐ Créditos

- Iconos por [Font Awesome](https://fontawesome.com)
- Inspiración de diseño de diversos portafolios de desarrolladores

---

⌨️ con ❤️ por [Tu Nombre](https://github.com/tuusuario)

**¿Te gusta el proyecto? ¡Dale una ⭐️!**
