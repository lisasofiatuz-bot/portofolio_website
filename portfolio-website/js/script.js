// =========================================================
// PORTFOLIO JAVASCRIPT — fitur: menu, tema, bahasa, filter,
// animasi, lightbox, dan formulir kontak.
// =========================================================

// 1. Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Menu navigasi untuk layar kecil
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// 3. Dark mode — pilihan tema disimpan di browser
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.body.classList.add("dark");
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';
}

// 4. Terjemahan Indonesia dan Inggris
const translations = {
  id: {
    "nav-home":"Beranda","nav-about":"Tentang","nav-skills":"Keahlian",
    "nav-experience":"Pengalaman","nav-projects":"Proyek","nav-gallery":"Galeri","nav-contact":"Kontak",
    "hero-eyebrow":"PORTOFOLIO DIGITAL SAYA","hero-title":"Halo, saya <em>Nama Kamu.</em>",
    "hero-role":"Mahasiswa Teknik Informatika & Kreator Digital",
    "hero-desc":"Saya tertarik pada pengembangan website, desain UI/UX, pengolahan data, dan fotografi. Saya senang mengubah ide menjadi pengalaman digital yang sederhana dan bermanfaat.",
    "hero-cta":"Jelajahi Karya","download-cv":"<i class='fa-solid fa-download'></i> Unduh CV",
    "profile-note":"Terus belajar, terus berkarya","scroll":"GULIR UNTUK MENJELAJAH",
    "about-kicker":"KENALI SAYA","about-title":"Sedikit cerita <em>tentang saya.</em>",
    "about-p1":"Saya adalah mahasiswa Teknik Informatika yang senang mengeksplorasi teknologi dan kreativitas. Bagi saya, belajar bukan hanya memahami teori, tetapi juga mencoba, membuat, mengevaluasi, dan memperbaiki sesuatu.",
    "about-p2":"Saat ini saya sedang mengembangkan kemampuan di bidang front-end development, UI/UX design, database, data processing, dan visual storytelling melalui fotografi.",
    "about-p3":"Saya terbuka untuk berkolaborasi dalam proyek, kegiatan organisasi, maupun kesempatan belajar yang dapat menambah pengalaman.",
    "about-link":"Mari terhubung","fact-education":"Pendidikan","fact-education-value":"Teknik Informatika",
    "fact-location":"Domisili","fact-location-value":"Indonesia","fact-interest":"Minat","fact-interest-value":"Teknologi & Kreativitas",
    "fact-motto":"Prinsip","fact-motto-value":"Learn by doing","skills-kicker":"KEMAMPUAN",
    "skills-title":"Hal yang sedang <em>saya kuasai.</em>",
    "skills-subtitle":"Daftar berikut adalah contoh. Sesuaikan levelnya dengan kemampuan yang benar-benar kamu miliki.",
    "technical":"Keahlian teknis","soft":"Keahlian nonteknis","tools-title":"Tools yang digunakan",
    "journey-kicker":"PERJALANAN","education-title":"Pendidikan & <em>pengembangan diri.</em>",
    "edu-1-title":"S1 Teknik Informatika","edu-1-desc":"Nama Universitas • Fokus pada pemrograman, basis data, desain, dan teknologi informasi.",
    "edu-2-title":"SMA / SMK","edu-2-desc":"Nama Sekolah • Isi jurusan, kegiatan, atau pencapaian yang relevan.",
    "edu-3-title":"Belajar Mandiri & Pelatihan","edu-3-desc":"Mengikuti tutorial, kelas daring, seminar, dan latihan proyek mandiri.",
    "experience-kicker":"PENGALAMAN","experience-title":"Belajar melalui <em>pengalaman.</em>",
    "experience-subtitle":"Pengalaman organisasi, kepanitiaan, volunteer, magang, atau proyek kelompok dapat ditampilkan di sini.",
    "exp-1-title":"Anggota Divisi / Organisasi","exp-1-desc":"Tuliskan nama organisasi, tanggung jawab, kontribusi, dan hal yang dipelajari.",
    "exp-2-title":"Panitia Kegiatan Kampus","exp-2-desc":"Jelaskan peranmu dalam persiapan acara, koordinasi tim, dan pelaksanaan kegiatan.",
    "exp-3-title":"Kolaborasi Proyek Perkuliahan","exp-3-desc":"Ceritakan proyek kelompok, bagian yang kamu kerjakan, dan hasil akhirnya.",
    "projects-kicker":"KARYA PILIHAN","projects-title":"Proyek yang <em>saya kerjakan.</em>",
    "projects-subtitle":"Pilih kategori untuk melihat karya. Ganti gambar, deskripsi, dan tautan dengan proyek milikmu.",
    "filter-all":"Semua","filter-creative":"Kreatif","gallery-kicker":"SISI KREATIF",
    "gallery-title":"Cerita dalam <em>sebuah gambar.</em>",
    "gallery-subtitle":"Klik foto untuk melihatnya lebih besar. Ganti gambar contoh dengan hasil fotomu sendiri.",
    "certificate-kicker":"PENCAPAIAN","certificate-title":"Sertifikat & <em>penghargaan.</em>",
    "certificate-subtitle":"Dokumentasikan proses belajar dan pencapaian yang relevan.",
    "services-kicker":"YANG BISA SAYA BANTU","services-title":"Minat yang ingin <em>saya kembangkan.</em>",
    "testimonials-kicker":"KATA MEREKA","testimonials-title":"Kolaborasi yang <em>berkesan.</em>",
    "testimonials-subtitle":"Contoh tampilan testimoni. Gunakan hanya komentar asli dan dengan izin pemberi testimoni.",
    "contact-kicker":"MARI TERHUBUNG","contact-title":"Punya ide? Mari <em>berdiskusi.</em>",
    "contact-subtitle":"Saya terbuka untuk pertanyaan, kolaborasi, dan kesempatan belajar bersama.",
    "availability":"Terbuka untuk kolaborasi dan kesempatan baru.",
    "form-name":"Nama","form-email":"Email","form-subject":"Subjek","form-message":"Pesan",
    "send-message":"Kirim pesan","form-note":"Form ini akan membuka aplikasi email. Untuk pengiriman langsung, hubungkan layanan form/backend.",
    "footer-text":"Dibuat dengan rasa ingin tahu dan secangkir kreativitas.","rights":"Hak cipta dilindungi."
  },
  en: {
    "nav-home":"Home","nav-about":"About","nav-skills":"Skills","nav-experience":"Experience",
    "nav-projects":"Projects","nav-gallery":"Gallery","nav-contact":"Contact",
    "hero-eyebrow":"MY DIGITAL PORTFOLIO","hero-title":"Hello, I'm <em>Your Name.</em>",
    "hero-role":"Informatics Student & Digital Creator",
    "hero-desc":"I'm interested in website development, UI/UX design, data processing, and photography. I enjoy turning ideas into simple and useful digital experiences.",
    "hero-cta":"Explore My Work","download-cv":"<i class='fa-solid fa-download'></i> Download CV",
    "profile-note":"Keep learning, keep creating","scroll":"SCROLL TO EXPLORE",
    "about-kicker":"GET TO KNOW ME","about-title":"A little story <em>about me.</em>",
    "about-p1":"I'm an Informatics student who enjoys exploring technology and creativity. To me, learning is not only about understanding theory, but also trying, building, evaluating, and improving things.",
    "about-p2":"I'm currently developing my skills in front-end development, UI/UX design, databases, data processing, and visual storytelling through photography.",
    "about-p3":"I'm open to project collaborations, organizational activities, and learning opportunities that help me grow.",
    "about-link":"Let's connect","fact-education":"Education","fact-education-value":"Informatics",
    "fact-location":"Based in","fact-location-value":"Indonesia","fact-interest":"Interests","fact-interest-value":"Technology & Creativity",
    "fact-motto":"Personal motto","fact-motto-value":"Learn by doing","skills-kicker":"MY ABILITIES",
    "skills-title":"Things I'm <em>learning to master.</em>",
    "skills-subtitle":"These are sample levels. Adjust them to reflect your actual skills.",
    "technical":"Technical skills","soft":"Soft skills","tools-title":"Tools I use",
    "journey-kicker":"MY JOURNEY","education-title":"Education & <em>self development.</em>",
    "edu-1-title":"Bachelor's in Informatics","edu-1-desc":"University Name • Focus on programming, databases, design, and information technology.",
    "edu-2-title":"High School / Vocational School","edu-2-desc":"School Name • Add your major, activities, or relevant achievements.",
    "edu-3-title":"Self-learning & Training","edu-3-desc":"Learning through tutorials, online classes, seminars, and personal projects.",
    "experience-kicker":"EXPERIENCE","experience-title":"Learning through <em>experience.</em>",
    "experience-subtitle":"Showcase your organization, committee, volunteer, internship, or group project experience here.",
    "exp-1-title":"Organization / Division Member","exp-1-desc":"Add the organization name, responsibilities, contributions, and lessons learned.",
    "exp-2-title":"Campus Event Committee","exp-2-desc":"Describe your role in event preparation, team coordination, and execution.",
    "exp-3-title":"Academic Team Project","exp-3-desc":"Tell the story of your group project, your contribution, and its outcome.",
    "projects-kicker":"SELECTED WORK","projects-title":"Projects I've <em>worked on.</em>",
    "projects-subtitle":"Choose a category to explore. Replace images, descriptions, and links with your own work.",
    "filter-all":"All","filter-creative":"Creative","gallery-kicker":"CREATIVE SIDE",
    "gallery-title":"Stories told <em>through images.</em>",
    "gallery-subtitle":"Click a photo to enlarge it. Replace the sample images with your own photography.",
    "certificate-kicker":"ACHIEVEMENTS","certificate-title":"Certificates & <em>awards.</em>",
    "certificate-subtitle":"Document your learning journey and relevant achievements.",
    "services-kicker":"WHAT I CAN OFFER","services-title":"Interests I'd like to <em>develop.</em>",
    "testimonials-kicker":"KIND WORDS","testimonials-title":"Meaningful <em>collaborations.</em>",
    "testimonials-subtitle":"Sample testimonial layout. Use genuine comments with the author's permission.",
    "contact-kicker":"LET'S CONNECT","contact-title":"Have an idea? Let's <em>talk.</em>",
    "contact-subtitle":"I'm open to questions, collaborations, and learning opportunities.",
    "availability":"Open to collaborations and new opportunities.",
    "form-name":"Name","form-email":"Email","form-subject":"Subject","form-message":"Message",
    "send-message":"Send message","form-note":"This form opens your email application. Connect a form service/backend for direct submissions.",
    "footer-text":"Made with curiosity and a touch of creativity.","rights":"All rights reserved."
  }
};
let currentLanguage = "id";
const languageToggle = document.getElementById("languageToggle");
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";
  document.documentElement.lang = currentLanguage;
  languageToggle.textContent = currentLanguage.toUpperCase();
  document.querySelectorAll("[data-id]").forEach(element => {
    const key = element.dataset.id;
    if (translations[currentLanguage][key]) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });
});

// 5. Filter proyek berdasarkan kategori
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

// 6. Animasi saat elemen masuk ke layar
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// 7. Lightbox galeri dan gambar proyek
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxItems = [...document.querySelectorAll("[data-lightbox]")];
let activeImageIndex = 0;

function showLightbox(index) {
  activeImageIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[activeImageIndex];
  lightboxImage.src = item.dataset.lightbox;
  lightboxImage.alt = item.querySelector("img")?.alt || "Portfolio image";
  lightboxCaption.textContent = item.dataset.caption || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
lightboxItems.forEach((item, index) => item.addEventListener("click", () => showLightbox(index)));
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => showLightbox(activeImageIndex - 1));
document.getElementById("lightboxNext").addEventListener("click", () => showLightbox(activeImageIndex + 1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") showLightbox(activeImageIndex + 1);
  if (event.key === "ArrowLeft") showLightbox(activeImageIndex - 1);
});

// 8. Form kontak: validasi lalu buat draft email (tanpa backend)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const destinationEmail = "emailkamu@example.com"; // GANTI dengan email aktifmu
  const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = currentLanguage === "id"
    ? "Aplikasi email akan dibuka untuk mengirim pesan."
    : "Your email application will open to send the message.";
  window.location.href = mailto;
});
