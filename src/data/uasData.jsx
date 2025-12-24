import React from 'react';
import { FaTree, FaGavel, FaExclamationTriangle, FaSearch } from 'react-icons/fa';

export const uasData = {
    //UAS-1
  concept: {
    title: "The Reactive Accountability Concept",
    phenomenon: "Tragedi banjir bandang Sumatera (November 2025) yang menyeret gelondongan kayu hasil penebangan liar. Fenomena ini mengungkap bahwa 99% dampak kerusakan lingkungan di daerah aliran sungai disebabkan oleh pembiaran penebangan hutan demi kepentingan segelintir elit, yang baru direspon pemerintah setelah jatuhnya korban jiwa massal.",
    
    // Logika Mesin (K & B)
    logicMachine: {
      beban: "Inersia hukum dan kooptasi regulasi oleh kepentingan elit (penebangan ilegal yang diproteksi 'orang penting' selama bertahun-tahun).",
      kekuatan: "Kekuatan audit bencana (Nature's Audit) yang mengubah bukti tersembunyi menjadi bukti fisik (gelondongan kayu) yang memaksa akuntabilitas publik.",
    },
    
    essence: "Disaster is the only auditor when regulators choose to be blind.",
    
    analogy: "Ibarat alarm kebakaran yang sengaja dimatikan demi aktivitas ilegal; pemerintah baru beraksi membawa pemadam saat gedung sudah rata dengan tanah. Bencana hanyalah 'suara keras' dari alarm yang selama ini dibungkam.",
    
    type: "Mechanism Concept",
  },
  //UAS-2
  opinion: {
    title: "Bencana Bukan Panggung Sandiwara: Kritik Atas Akuntabilitas Publik",
    
    // 1. Informasi (Fakta)
    information: "Banjir bandang Sumatera November 2025 bukan sekadar bencana alam, melainkan kegagalan sistemik. Penemuan kayu gelondongan di pemukiman warga adalah bukti empiris adanya penebangan liar yang terstruktur. Fakta bahwa pengungsi mengalami krisis pangan dan air bersih menunjukkan ketidaksiapan mitigasi jangka panjang.",
    
    // 2. Nilai-nilai (Prinsip)
    values: "Keadilan lingkungan dan keselamatan nyawa warga negara harus berada di atas kepentingan ekonomi segelintir 'orang penting'. Integritas pemerintah diuji bukan lewat dokumentasi bantuan (pansos), melainkan lewat penegakan hukum terhadap aktor deforestasi.",
    
    // 3. Perasaan (Emosi Kritis)
    feelings: "Ada kemarahan yang logis ketika melihat bantuan pemerintah terasa seperti konten promosi di tengah kondisi pengungsi yang mencekam. Sangat mengecewakan melihat negara baru 'terjaga' setelah nyawa melayang, sementara peringatan bertahun-tahun dianggap angin lalu.",
    
    // 4. Pengalaman (Perspektif)
    experience: "Mengamati pola penanganan bencana selama ini menunjukkan tren reaktif. Kita melihat bantuan masif dikirimkan saat kamera menyala, namun penegakan hukum terhadap dalang penebangan hutan di Sumatera seolah 'hilang' begitu air surut.",

    summary: "Opini saya: Pemerintah tidak boleh hanya menjadi pemadam kebakaran yang haus perhatian, melainkan harus menjadi arsitek keselamatan yang berani membongkar proteksi elit pada industri penebangan liar."
  },
  // UAS-3
  innovation: {
    title: "SaksiHijau: Platform Audit Publik & Transparansi Deforestasi",
    problemStatement: "Selama ini, penebangan hutan oleh 'orang penting' terlindungi oleh dinding birokrasi yang tertutup. Masyarakat hanya menjadi korban reaktif saat bencana terjadi.",
    
    // Konsep Inovasi Nilai
    valueInnovation: {
      core: "Mendemokrasikan pengawasan hutan melalui integrasi citra satelit dan pelaporan warga secara real-time.",
      coCreation: "Mahasiswa dan aktivis berperan sebagai 'Need Creators' (menganalisis area rawan), sementara warga lokal sebagai 'Value Creators' (mengunggah bukti foto/video di lapangan).",
    },

    // Fitur Utama
    features: [
      { 
        id: 1, 
        name: "Trace-The-Log", 
        desc: "Sistem tagging berbasis QR/GPS untuk memetakan kayu yang ditebang, sehingga asal-usul kayu tidak bisa dimanipulasi.",
        icon: "FaSearchLocation"
      },
      { 
        id: 2, 
        name: "Transparency Dashboard", 
        desc: "Menampilkan data perizinan penebangan yang bisa diakses publik untuk dibandingkan dengan fakta di lapangan.",
        icon: "FaEye"
      },
      { 
        id: 3, 
        name: "Crowdsourced Disaster Alert", 
        desc: "Sistem peringatan dini yang digerakkan oleh laporan warga mengenai kenaikan debit air dan pergerakan tanah.",
        icon: "FaBell"
      }
    ],

    summary: "SaksiHijau mengubah masyarakat dari penonton bencana menjadi pengawas aktif yang memiliki kapasitas untuk menekan pemerintah melakukan tindakan preventif, bukan sekadar respons pansos."
  },
  //UAS-4
  knowledge: {
    title: "Environmental Crisis Taxonomy: Deforestation & Accountability",
    
    // Peta Pengetahuan Primitif (Level 1-2)
    primitiveMap: {
      focus: "Mata Kuliah Inti: Ekologi Politik & Rekayasa Lingkungan",
      definitions: [
        { term: "Deforestasi", desc: "Penghilangan hutan atau tegakan pohon dari lahan yang kemudian dikonversi menjadi penggunaan non-hutan." },
        { term: "Banjir Bandang", desc: "Banjir yang datang secara tiba-tiba dengan debit air yang besar akibat terhambatnya resapan di daerah hulu." },
        { term: "PM2.5 & Polusi", desc: "Partikel halus yang dihasilkan dari pembakaran dan kerusakan alam yang berdampak pada 99% penduduk dunia (Data WHO)." }
      ]
    },

    // 7 Level Taksonomi Bloom (Implementasi Kasus Sumatera)
    bloomLevels: [
      { level: 1, label: "Remember", task: "Mengenali bukti gelondongan kayu di pemukiman sebagai hasil penebangan hutan." },
      { level: 2, label: "Understand", task: "Mengklasifikasikan bahwa bencana ini bukan murni 'faktor alam', tapi 'human-made disaster'." },
      { level: 3, label: "Apply", task: "Memprediksi bahwa tanpa reboisasi, curah hujan tinggi di bulan Desember akan memicu longsor susulan." },
      { level: 4, label: "Analyze", task: "Mengurai kaitan antara proteksi elit terhadap 'orang penting' dengan macetnya regulasi kehutanan." },
      { level: 5, label: "Synthesize", task: "Menyusun variabel data (titik koordinat, foto drone, izin lahan) menjadi bukti hukum yang solid." },
      { level: 6, label: "Evaluate", task: "Menilai bahwa bantuan 'pansos' pemerintah tidak bernilai ekonomi jangka panjang dibanding pencegahan deforestasi." },
      { level: 7, label: "Create", task: "Merancang sistem SaksiHijau untuk mengotomasi audit publik terhadap luas hutan secara real-time." }
    ]
  }

};