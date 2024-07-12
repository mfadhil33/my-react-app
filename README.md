# My React App

Ini adalah aplikasi React yang dibangun dengan Vite, menggunakan Tailwind CSS untuk styling dan ESLint untuk linting kode.

## Prasyarat

Pastikan Anda telah menginstal Node.js dan npm sebelum memulai proyek ini.

## Instalasi

1. Klon repositori ini ke direktori lokal Anda.
   ```sh
   git clone https://github.com/mfadhil33/my-react-app.git
   ```
2. pindah ke direktory proyek
   ```sh
   cd my-react-app
   ```
3. Instal dependensi dengan npm.
   ```sh
   npm install
   ```

## Script

Berikut ini adalah beberapa script npm yang tersedia dalam proyek ini

```
1. npm run dev => menjalankan aplikasi dalam mode pengembangan vite
2. npm run build => Membangun aplikasi  untuk produksi
3. npm run lint => menjalankan Eslint  untuk memekrisa kode
4. npm run preview => menjalnkan aplikasi yang telah di bangun dalan mode preview  menggunakan vite

```

## Struktur Proyek

Berikut adalah struktur proyek

```
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Elements/
│   │   │   └── Button.jsx
│   │   └── Fragments/
│   │       ├── CardProduct.jsx
│   │       └── Counter.jsx
│   ├── pages/
│   │   └── products.jsx
│   ├── App.jsx
│   ├── main.jsx
├── .eslintrc.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js



```

Penggunaan

1. Jalankan aplikasi dalam mode pengembangan
   ``npm run dev
` `
2. Buka <http://localhost:5173> di browser Anda untuk melihat aplikasi.

Dependensi
