// ========================================
// CONFIGURACIÓN DEL PORTAFOLIO
// ========================================

// EmailJS Configuration
const EMAIL_CONFIG = {
    publicKey: 'D-Lk7Hwfa0-o1Ep8p',
    serviceId: 'service_06d3ujg',
    templateId: 'template_um8398s'
};

// Información de contacto
const CONTACT_INFO = {
    email: 'joanchan082@gmail.com',
    phone: '+52 998 144 7597',
    location: 'Mérida, Yucatán'
};

// Redes sociales
const SOCIAL_LINKS = {
    github: 'https://github.com/JoanMiam',
    linkedin: 'https://www.linkedin.com/in/joan-miam-55614a257',
    instagram: 'https://www.instagram.com/solutions_in_software_hardware?igsh=d2hucHp4eXZhZWtx&utm_source=qr',
    youtube: 'https://youtube.com/@jowdev-r9h?si=zvfc5YCv3DOSrYYq',
    facebook: 'https://www.facebook.com/share/1DgRpVzZj3/?mibextid=wwXIfr'
};

// Animaciones
const ANIMATION_CONFIG = {
    carouselAutoplayInterval: 5000, // 5 segundos
    particleCount: 80,
    typingSpeed: 80,
    deletingSpeed: 40
};

// Inicializar EmailJS cuando se cargue el DOM
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAIL_CONFIG.publicKey);
}
