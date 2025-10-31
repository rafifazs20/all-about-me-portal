import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import ShapeCard from '../components/ShapeCard';
import ShapeModal from '../components/ShapeModal';
import { AnimatePresence } from 'framer-motion';
import { FaHeart, FaGift, FaBolt } from 'react-icons/fa';
import { HiSparkles, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { GiSkills } from 'react-icons/gi';

const shapeData = [
  {
    key: "S",
    title: "Signature Strengths",
    icon: <HiSparkles />,
    description: "Berpikir kritis, visioner, dan pantang menyerah.\n\nMampu mengubah kegagalan menjadi pijakan untuk bangkit, melihat peluang di tengah keterbatasan, dan berpikir jauh ke depan dengan landasan logika yang kuat."
  },
  {
    key: "H",
    title: "Heart",
    icon: <FaHeart />,
    description: "Tertarik pada pengembangan teknologi, khususnya AI dan blockchain, untuk membawa perubahan nyata bagi Indonesia.\n\nMemiliki keyakinan bahwa kemajuan bangsa lahir dari generasi muda yang berani bermimpi besar dan berusaha tanpa henti."
  },
  {
    key: "A",
    title: "Aptitudes & Acquired Skills",
    icon: <GiSkills />,
    description: "Pemrograman (Python, C++), analisis sistem, product thinking, riset, dan public communication.\n\nTerampil dalam memadukan kemampuan teknis dengan empati sosial, menjembatani ide teknologi dengan kebutuhan manusia nyata. Berpengalaman dalam presentasi, UX analysis, dan pembuatan proposal berbasis inovasi digital."
  },
  {
    key: "P",
    title: "Personality",
    icon: <HiChatBubbleLeftRight />,
    description: "INTJ - Pemikir strategis yang fokus pada solusi dan masa depan.\n\nReflektif, kompetitif, dan berorientasi pada hasil. Cenderung bekerja optimal dalam situasi menantang, di mana logika, kreativitas, dan determinasi diuji bersamaan."
  },
  {
    key: "E",
    title: "Experiences",
    icon: <FaGift />,
    description: "Pernah menjadi finalis kompetisi UX FindIT UGM, aktif di organisasi kampus sebagai staf fundraising, dan memiliki perjalanan hidup yang ditempa oleh banyak kegagalan dan kebangkitan, dari ditolak di SNBP dan SNBT hingga akhirnya diterima di ITB lewat jalur mandiri dan memperoleh Beasiswa Bayan Peduli 2024 dengan full cover sampai lulus. Juga pernah menjadi medalis perunggu OSN saat SD dan juara Karya Ilmiah Remaja se-Kota Pasuruan."
  }
];

export default function MyShape() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-16">

        <section>
          <div className="text-center">
            <AnimatedTitle text="SHAPE" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            {shapeData.map((item) => (
              <ShapeCard 
                key={item.key}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="text-center">
            <AnimatedTitle text="Pernyataan Misi" />
          </div>
          <div className="mt-6 card-glass p-8 rounded-xl">
            <blockquote className="relative border-l-4 border-electric-cyan pl-6 
                                     shadow-[0_0_20px_theme('colors.electric-cyan/30%')]">
              <p className="text-2xl md:text-3xl font-semibold italic text-white leading-relaxed">
                “Saya berkomitmen untuk menciptakan inovasi teknologi yang bermanfaat bagi manusia dan kemajuan Indonesia. Dengan semangat pantang menyerah dan integritas, saya ingin menjadi bukti bahwa kegagalan bukan akhir dari perjalanan, melainkan bahan bakar untuk melangkah lebih jauh, lebih bijak, dan lebih berdampak.”
              </p>
              <footer className="mt-4 text-lg text-graphite-silver">
                - Muchammad Rafif Azis Syahlevi
              </footer>
            </blockquote>
          </div>
        </section>

        <section>
          <div className="text-center">
            <AnimatedTitle text="Identitas Naratif" />
          </div>
          <div className="mt-6 card-glass p-8 rounded-xl space-y-4">

            
            <p className="text-graphite-silver leading-relaxed text-justify">
            Aku adalah seseorang yang selalu belajar dari perjalanan bukan dari kenyamanan.
            Bagiku, setiap kegagalan adalah bagian dari desain Tuhan untuk menguatkan arah hidupku. Aku pernah jatuh berkali-kali, gagal masuk sekolah impian, gagal di SNBP dan SNBT, bahkan ditolak berbagai beasiswa. Tapi setiap kali terjatuh, aku menemukan satu hal yang tidak pernah hilang, tekadku untuk tetap berjalan.

            Aku percaya bahwa hidup bukan soal siapa yang paling cepat, tapi siapa yang paling kuat bertahan. Dari situ aku belajar untuk berpikir strategis, memecahkan masalah dengan logika, dan terus menantang diriku agar tidak berhenti di zona nyaman.

            Teknologi bagiku bukan sekadar alat, melainkan bahasa masa depan, medium untuk mewujudkan ide dan membawa manfaat bagi banyak orang. Aku ingin menjadi bagian dari perubahan itu, menghadirkan inovasi yang bukan hanya keren secara teknis, tapi juga bermakna secara sosial.

            Aku bekerja paling baik saat diberi ruang untuk berpikir bebas dan bereksperimen.
            Aku bukan tipe yang puas dengan jawaban instan, aku lebih suka mencari akar masalah dan menciptakan solusi yang berkelanjutan. Dalam tim, aku menghargai kolaborasi yang tulus dan penuh tujuan bukan sekadar ramai, tapi saling menguatkan.

            Dan pada akhirnya, aku ingin dikenal bukan karena aku cepat berhasil, tapi karena aku tidak pernah berhenti berjuang.
            Karena aku percaya, rencana Tuhan selalu lebih besar dari rencanaku dan selama aku terus berjalan, langit tidak akan pernah menutup jalannya.
            </p>
            
          </div>
        </section>

        <AnimatePresence>
          {selectedItem && (
            <ShapeModal 
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </AnimatedPage>
  );
}