import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import StoryModal from '../components/StoryModal'; 
import { AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    title: "Langit yang Tak Pernah Menutup Jalan", 
    preview: "Sejak SMP, aku sudah menatap satu bintang di langit yang paling tinggi — Institut Teknologi Bandung. Impian itu tumbuh bukan karena gengsi, tapi karena aku ingin membuktikan pada diriku sendiri bahwa kerja keras bisa mengalahkan batas. Aku sudah punya rencana matang: lulus dari SMP Negeri 1 Pasuruan, lanjut ke SMA Negeri 3 Malang — sekolah favorit yang banyak melahirkan mahasiswa ITB. Semua sudah kususun rapi di kepalaku...", 
    fullText: `Sejak SMP, aku sudah menatap satu bintang di langit yang paling tinggi — Institut Teknologi Bandung. Impian itu tumbuh bukan karena gengsi, tapi karena aku ingin membuktikan pada diriku sendiri bahwa kerja keras bisa mengalahkan batas. Aku sudah punya rencana matang: lulus dari SMP Negeri 1 Pasuruan, lanjut ke SMA Negeri 3 Malang — sekolah favorit yang banyak melahirkan mahasiswa ITB. Semua sudah kususun rapi di kepalaku.

Tapi hidup, seperti biasa, punya caranya sendiri untuk menguji manusia.

Tahun terakhir SMP-ku datang bersama pandemi. Aturan PPDB berubah total — jalur luar kota ditutup. Mimpi untuk sekolah di Malang terpaksa dikubur dalam-dalam. Saat itu aku hanya bisa diam, kecewa, dan menatap nilai-nilaiku yang terasa sia-sia. Semua rencana buyar.
Ayahku mencoba menenangkan, “Sekolah di Pasuruan dulu aja, satu semester, nanti kita pindah.”
Aku mengangguk, tapi dalam hati masih terasa getir. Aku anak yang nggak suka membebani, jadi aku terima keputusan itu tanpa banyak protes.

Satu semester kemudian, aku benar-benar pindah ke Malang. Tapi lagi-lagi, SMA impianku penuh. Tidak ada kursi tersisa untuk siswa mutasi. Aku menelan kecewa itu sekali lagi — dan memilih SMA 4 Malang, sekolah kakakku dulu.

Aku pikir hidupku akan datar saja di sana, tapi ternyata Tuhan sedang menyiapkan kejutan.
Di kelas itu, aku bertemu dengan orang-orang yang rasanya ditakdirkan untuk mengisi perjalanan hidupku. Awalnya kupikir mereka hedon, cuek, dan nggak nyambung denganku. Tapi begitu kutahu siapa mereka sebenarnya — semuanya berubah. Ketua kelasnya hangat dan supel, teman-teman cowoknya cuma sepuluh orang tapi solidnya luar biasa. Dari situ terbentuklah lingkaran kecil persahabatan: enam cowok dengan latar belakang agama dan karakter yang berbeda-beda. Dua muslim, tiga katolik, satu protestan — tapi kami satu frekuensi.

Kami bukan anak-anak “paling pintar” di sekolah, tapi kami saling dukung dan rangkul. Kami belajar bareng, curhat bareng, ketawa tanpa alasan, dan jadi pengingat satu sama lain untuk tetap berjalan di jalur yang benar. Mereka bukan sekadar teman sekolah; mereka rumah.
Bahkan, lingkaran kami melebar jadi dua belas orang — enam cowok dan enam cewek — dan dari situ SMA-ku terasa hidup. Tidak ada drama berlebihan, hanya semangat, tawa, dan dukungan tulus.

Di tengah kehangatan itu, aku mulai menyalakan kembali mimpiku: masuk ITB.
Aku bilang pada mereka bahwa aku ingin belajar di sana, dan mereka langsung menyemangati tanpa ragu. Padahal saat itu nilai semesterku jeblok — imbas dari stres gagal masuk SMA impian dulu. Tapi mereka percaya padaku, bahkan ketika aku sendiri ragu.

Sejak itu, aku mulai berjuang lagi.
Belajar tiap malam sampai larut, memaksimalkan setiap tugas, ikut olimpiade meskipun gagal di tingkat provinsi. Tapi setiap kegagalan selalu diikuti oleh tangan-tangan yang menepuk bahu dan suara-suara yang bilang, “Nggak apa-apa, Rif, kamu pasti bisa.”

Lalu aku bangkit. Aku mulai ikut lomba-lomba di universitas-universitas Malang. Beberapa kali menang, beberapa kali kalah, tapi semua jadi bahan bakar.
Dan akhirnya, kerja keras itu berbuah — aku masuk lima besar peringkat sekolah dan jadi siswa eligible untuk SNBP. Hari itu aku menangis bahagia, karena perjalanan panjang itu akhirnya terasa berarti.

Namun lagi-lagi, Tuhan belum selesai menguji.
Aku memilih FTMD ITB sebagai satu-satunya pilihan di SNBP — dan hasilnya: ditolak.
Rasanya hancur. Tapi aku tetap mencoba lewat jalur SNBT, kali ini dengan pilihan tunggal lagi: STEI-K ITB. Aku ingin menantang diri, masuk ke fakultas tersulit di Indonesia. Nilai UTBK-ku 740, tinggi, tapi tetap belum cukup. STEI-K butuh 756 ke atas. Seandainya aku pilih FTTM di pilihan kedua, aku pasti masuk. Tapi hidup nggak bisa diulang. Hari itu aku benar-benar jatuh.

Aku mulai merasa bodoh. Semua teman sudah punya arah, sementara aku masih berdiri di tempat yang sama. Rasanya dunia berhenti sebentar.
Tapi di saat aku ingin menyerah, orang tuaku bilang, “Masih ada jalur mandiri, Rif. Kalau kamu mau, Papa Ibu dukung.”
Aku terdiam lama. Aku tahu biaya jalur mandiri itu besar — dan gengsi dalam diriku menolak untuk membuat mereka menanggungnya. Aku nggak mau hidup manja, nggak mau bergantung pada privilege. Aku ingin berdiri di kakiku sendiri. Tapi akhirnya, dengan keyakinan setengah matang, aku daftar juga.

Dan ternyata, takdir membuka jalan.
Aku diterima di ITB lewat jalur mandiri, pilihan kedua — FTTM ITB. Fakultas yang dulu kupikir cuma cadangan, ternyata jadi tempat aku akan menulis bab baru dalam hidupku.

Namun perjuangan belum selesai. Aku masih punya janji pada diriku sendiri: aku harus mandiri.
Aku daftar berbagai beasiswa — Beasiswa Unggulan, BSI, Grab, Teladan — dan semuanya gagal. Beberapa gugur di tahap administrasi, beberapa di wawancara. Aku mulai lelah. Tapi sekali lagi, aku nggak berhenti. Sampai akhirnya, di ujung waktu, aku daftar Bayan Peduli Scholarship 2024 — dan kali ini, aku diterima.

Full cover sampai lulus. UKT, laptop, uang saku, living cost, wisuda, hingga tugas akhir.
Beban orang tuaku pun terasa lebih ringan. Aku bahkan berhasil menurunkan biaya uang gedung dari 125 juta jadi 55 juta, bisa dicicil sampai lulus.
Hari itu aku sadar: Tuhan memang nggak selalu kasih apa yang kita mau, tapi selalu kasih apa yang kita butuh.

Sekarang, setiap kali aku melangkah di kampus ITB, aku nggak cuma ingat perjuangan panjang itu, tapi juga semua tangan yang pernah menarikku saat hampir jatuh.
Teman-teman SMA, keluarga, dan keyakinanku pada diri sendiri — merekalah alasan aku bisa sampai di sini.

Manusia bisa merencanakan segalanya dengan sangat rapi, tapi pada akhirnya, skenario terbaik tetap milik Allah. Kadang kita kecewa karena hidup tak berjalan sesuai rencana, padahal justru itulah cara Allah menuntun kita ke tempat yang lebih tepat.

Aku dulu sempat kecewa ketika gagal di SNBP dan SNBT, bahkan saat mutasi ke SMA yang bukan pilihanku. Tapi kini aku sadar — jika semua berjalan sesuai keinginanku, mungkin aku tak akan pernah bertemu dengan teman-teman yang luar biasa di SMAN 4 Malang, atau berjuang sampai akhirnya diterima di ITB dan mendapat beasiswa yang mengubah hidupku.

Rencana Allah memang tak selalu mudah dimengerti, tapi selalu berakhir indah. Seperti kata meme yang sering lewat di beranda, “Seng tenang, wonten Gusti Allah.” Karena sungguh, saat aku mencoba mengatur hidupku sendiri, malah berantakan — tapi saat aku belajar percaya, semuanya perlahan masuk logika.

Karena kadang, perjalanan menuju mimpi bukan tentang seberapa cepat kita sampai, tapi seberapa kuat kita bertahan saat semua pintu terasa tertutup.
Dan aku belajar satu hal: langit nggak pernah menutup jalan bagi orang yang mau terus berjalan.`, 
    
    musicUrl: "https://pgvjmlwpbzq5dqte.public.blob.vercel-storage.com/videoplayback.mp3"
  }
];

export default function MyStories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const myStory = stories[0]; 

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-16">
        <div className="text-center">
          <AnimatedTitle text="My Stories" />
        </div>
        
        <div
          key={myStory.id}
          className="card-glass p-6 rounded-xl flex flex-col justify-between
                     cursor-pointer group transform hover:scale-[1.01] transition-transform duration-300" 
          onClick={() => setSelectedStory(myStory)}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{myStory.title}</h3>
            <p className="text-graphite-silver leading-relaxed line-clamp-4">
              {myStory.preview}
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-electric-cyan font-semibold text-sm
                             group-hover:tracking-wider transition-all duration-300">
              Tap to see more →
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <StoryModal 
            story={selectedStory} 
            onClose={() => setSelectedStory(null)} 
          />
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}