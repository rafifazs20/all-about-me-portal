import React from 'react'; 
import { 
  FaRegLightbulb, FaRegStar, FaRegLaugh, FaBrain, 
  FaMusic, FaPencilAlt, FaUserCheck, FaHeart
} from 'react-icons/fa';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

export const reviews = [
  {
    id: 'uts1',
    title: 'UTS 1 - All About Me',
    average: 4.50, 
    summary: 'Tulisan menunjukkan self-awareness dan integrasi konsep interpersonal yang kuat.',
    criteria: [
      { 
        icon: <FaRegLightbulb className="text-yellow-400" />,
        name: 'Orisinalitas',
        score: 5,
        desc: 'Narasi autentik, ambisi + keikhlasan terjalin rapi.'
      },
      { 
        icon: <FaRegStar className="text-blue-400" />,
        name: 'Keterlibatan',
        score: 5,
        desc: 'Pembaca dibawa masuk, ritme puitis tapi lugas.'
      },
      { 
        icon: <FaRegLaugh className="text-pink-400" />,
        name: 'Humor',
        score: 3,
        desc: 'Bukan fokus utama, ada sejumlah kehangatan natural.'
      },
      { 
        icon: <FaBrain className="text-green-400" />,
        name: 'Wawasan (Insight)',
        score: 5,
        desc: 'Refleksi tentang keseimbangan ambisi dan keikhlasan cukup mendalam.'
      },
    ]
  },

  {
    id: 'uts2',
    title: 'UTS 2 - Songs For You',
    average: 4.60, 
    summary: 'Penggunaan musik sebagai cermin emosi efektif dan terhubung baik ke cerita pribadi.',
    criteria: [
      { 
        icon: <FaRegLightbulb className="text-yellow-400" />,
        name: 'Orisinalitas',
        score: 5, 
        desc: 'Interpretasi lagu bersifat personal dan relevan dengan narasi hidup.'
      },
      { 
        icon: <FaRegStar className="text-blue-400" />,
        name: 'Keterlibatan',
        score: 4, 
        desc: 'Setiap track memancing emosi, minus sedikit pada variasi gaya penulisan antar lagu.'
      },
      { 
        icon: <FaRegLaugh className="text-pink-400" />,
        name: 'Humor',
        score: 4, 
        desc: 'Nuansa hangat menjaga keseimbangan emosional.'
      },
      { 
        icon: <FaMusic className="text-purple-400" />, 
        name: 'Inspirasi',
        score: 5, 
        desc: 'Pilihan lagu dan penafsiran memberi sentuhan reflektif yang kuat.'
      },
    ]
  },

  {
    id: 'uts3',
    title: 'UTS 3 - My Stories For You',
    average: 4.80, 
    summary: 'Cerita perjuangan sangat kuat, baik secara emosional maupun pelajaran yang ditarik.',
    criteria: [
      { 
        icon: <FaRegLightbulb className="text-yellow-400" />,
        name: 'Orisinalitas',
        score: 5, 
        desc: 'Kisah hidup disajikan cinematic dan jujur.'
      },
      { 
        icon: <FaRegStar className="text-blue-400" />,
        name: 'Keterlibatan',
        score: 5, 
        desc: 'Alur emosi kuat, pembaca ikut merasakan naik-turunnya.'
      },
      { 
        icon: <FaPencilAlt className="text-orange-400" />, 
        name: 'Pengembangan Narasi',
        score: 4, 
        desc: 'Struktur rapi, beberapa bagian bisa dipadatkan untuk efektivitas.'
      },
      { 
        icon: <FaMusic className="text-purple-400" />,
        name: 'Inspirasi',
        score: 5, 
        desc: 'Motivasi dan pesan akhir menyentuh pembaca.'
      },
    ]
  },

  {
    id: 'uts4',
    title: 'UTS 4 - My Shape',
    average: 4.70, 
    summary: 'SHAPE merepresentasikan dirimu secara kohesif dan actionable.',
    criteria: [
      { 
        icon: <FaRegLightbulb className="text-yellow-400" />,
        name: 'Orisinalitas',
        score: 5, 
        desc: 'Interpretasi SHAPE autentik, menyambungkan pengalaman nyata.'
      },
      { 
        icon: <FaRegStar className="text-blue-400" />,
        name: 'Keterlibatan',
        score: 4, 
        desc: 'Mengundang refleksi, format bisa dibuat lebih ringkas visual agar cepat dicerna.'
      },
      { 
        icon: <FaUserCheck className="text-teal-400" />, 
        name: 'Keauthentican',
        score: 5, 
        desc: 'Piagam terasa nyata dan cocok dengan latar pengalamanmu.'
      },
      { 
        icon: <FaMusic className="text-purple-400" />,
        name: 'Inspirasi',
        score: 5, 
        desc: 'Menunjukkan arah karier dan nilai hidup yang koheren.'
      },
    ]
  },

  {
    id: 'uts5',
    title: 'UTS 5 - My Personal Review',
    average: 4.75,
    summary: 'Evaluasi menyimpulkan bahwa profilmu seimbang antara kompetensi teknis, etika kerja, dan nilai sosial.',
    criteria: [
      { 
        icon: <HiChatBubbleLeftRight className="text-blue-400" />,
        name: 'Pemahaman Konsep Interpersonal',
        score: 5, 
        desc: 'Sangat baik, terlihat empati, kerja tim, dan refleksi relasional.'
      },
      { 
        icon: <FaBrain className="text-green-400" />, 
        name: 'Analisis Kritis Pesan',
        score: 4, 
        desc: 'Analisis tajam, bisa diperdalam dengan data atau contoh konkret proyek.'
      },
      { 
        icon: <FaPencilAlt className="text-orange-400" />, 
        name: 'Argumentasi (Logos)',
        score: 5, 
        desc: 'Logika dan alur argumen jelas dalam pernyataan misi dan narasi.'
      },
      { 
        icon: <FaHeart className="text-pink-400" />,
        name: 'Etos & Empati',
        score: 5, 
        desc: 'Etos kerja dan empati terlihat jelas di setiap bagian.'
      },
    ]
  },
];