import React from 'react';
import { FaGavel, FaBullhorn, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export const uasReviews = [
  {
    id: 'uas1',
    title: 'UAS-1: My Concepts',
    average: 4.80,
    summary: 'Konsep "Reactive Accountability" dinilai sangat kuat dalam menyaring esensi masalah deforestasi Sumatera.',
    criteria: [
      { icon: <FaGavel className="text-blue-400" />, name: 'Logos (Logika)', score: 5, desc: 'Mesin logika K & B sangat sinkron dengan fenomena audit bencana.' },
      { icon: <FaLightbulb className="text-yellow-400" />, name: 'Abstraksi', score: 4.5, desc: 'Mampu menarik masalah lokal Aceh ke tingkat konsep operasional.' }
    ]
  },
  {
    id: 'uas2',
    title: 'UAS-2: My Opinions',
    average: 4.70,
    summary: 'Opini tajam dan kritis terhadap respons pemerintah, menggunakan komponen rebusan (stew) secara lengkap.',
    criteria: [
      { icon: <FaBullhorn className="text-red-400" />, name: 'Pathos (Emosi)', score: 4.8, desc: 'Penyampaian kemarahan rakyat terhadap "pansos" pemerintah sangat persuasif.' },
      { icon: <FaShieldAlt className="text-green-400" />, name: 'Ethos (Kredibilitas)', score: 4.6, desc: 'Argumen didukung oleh data realitas pengungsian di lapangan.' }
    ]
  },
  {
    id: 'uas3',
    title: 'UAS-3: My Innovations',
    average: 4.90,
    summary: 'Platform SaksiHijau merupakan contoh nyata dari Value Co-creation.',
    criteria: [
      { icon: <FaChartLine className="text-purple-400" />, name: 'Inovasi Nilai', score: 5, desc: 'Membangun kapasitas masyarakat untuk melakukan audit mandiri.' },
      { icon: <FaLightbulb className="text-yellow-400" />, name: 'Aplikabilitas', score: 4.8, desc: 'Desain fitur sangat relevan dengan kebutuhan transparansi saat ini.' }
    ]
  },
  {
    id: 'uas4',
    title: 'UAS-4: My Knowledge',
    average: 4.85,
    summary: 'Taksonomi Bloom disusun secara hierarkis dan logis.',
    criteria: [
      { icon: <FaGavel className="text-blue-400" />, name: 'Akurasi Bloom', score: 5, desc: 'Setiap level mencerminkan kemampuan kognitif yang tepat terhadap isu lingkungan.' }
    ]
  }
];