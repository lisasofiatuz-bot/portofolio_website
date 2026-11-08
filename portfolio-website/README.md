# Personal Portfolio Website — Cream & Lavender

Website portofolio satu halaman menggunakan HTML, CSS, dan JavaScript murni.

## Fitur
- Responsive layout untuk laptop, tablet, dan HP
- Dark mode (preferensi tema tersimpan di localStorage)
- Toggle bahasa Indonesia / English
- Filter proyek berdasarkan kategori
- Animasi reveal saat scroll
- Lightbox foto dengan tombol panah dan keyboard
- Tombol download CV
- Form kontak dengan validasi dan `mailto:`
- Bagian About, Skills, Education, Experience, Projects, Photography, Certificates, Services, Testimonials, Contact

## 1. Menjalankan di VS Code
1. Ekstrak ZIP.
2. Buka folder `portfolio-website` melalui VS Code: File > Open Folder.
3. Pasang ekstensi **Live Server**.
4. Klik kanan `index.html` > **Open with Live Server**.

## 2. Hal yang WAJIB diganti sebelum dipublikasikan
Cari dan ganti teks contoh berikut di `index.html`:
- `Nama Kamu`
- `emailkamu@example.com`
- `+62 800-0000-0000`
- `linkedin.com/in/username`
- Link Instagram, GitHub, WhatsApp
- Nama universitas/sekolah, tahun, pengalaman, sertifikat, dan testimoni

Di `js/script.js`, ganti:
- `destinationEmail = "emailkamu@example.com"` dengan email aktifmu.

Ganti file contoh di folder `images/` dengan foto/karya milikmu. Usahakan nama file tetap sama, atau ubah juga `src` dan `data-lightbox` pada HTML.

### Foto profil
Ganti `images/profile.svg` dengan foto sendiri. Jika menggunakan JPG, ubah baris HTML:
`<img src="images/profile.svg" ...>` menjadi `images/profile.jpg`.

### CV
Letakkan CV PDF milikmu di `documents/CV.pdf`. Tombol Unduh CV sudah mengarah ke lokasi tersebut.
Jangan mengunggah data pribadi yang tidak ingin dibagikan secara publik.

### Form kontak
Form saat ini memvalidasi isian lalu membuka aplikasi email pengguna melalui `mailto:`. Form ini TIDAK menyimpan pesan di server. Agar pesan terkirim langsung tanpa aplikasi email, hubungkan ke layanan form/backend (misalnya Formspree) dan ikuti petunjuk layanan tersebut.

## 3. Upload ke GitHub
Buat repository baru bernama `portfolio-website` di GitHub. Pilih Public.
Buka Terminal di VS Code pada folder proyek, lalu jalankan:

```bash
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-website.git
git push -u origin main
```
Ganti `USERNAME` dengan username GitHub kamu. Jika diminta, login/otorisasi GitHub.

Jika remote sudah pernah ditambahkan, jangan ulangi `git remote add origin`. Untuk melihat remote:
`git remote -v`

## 4. Aktifkan GitHub Pages
1. Buka repository di GitHub.
2. Klik Settings > Pages.
3. Pada Build and deployment, pilih Source: Deploy from a branch.
4. Branch: `main`; folder: `/ (root)`.
5. Klik Save dan tunggu proses deployment.
6. Website akan tersedia di:
`https://USERNAME.github.io/portfolio-website/`

## 5. Update website
Setiap selesai mengubah file:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
GitHub Pages akan memperbarui website setelah deployment selesai.

## Catatan
- GitHub Pages hanya meng-host file statis. HTML, CSS, dan JavaScript dapat berjalan; backend/database tidak disediakan.
- File `README.md` ini dapat dipakai sebagai dokumentasi repository.
