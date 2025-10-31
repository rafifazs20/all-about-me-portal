import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import InteractiveProfile from "../components/InteractiveProfile"; 
import AnimatedTitle from "../components/AnimatedTitle";
import RunningSkills from "../components/RunningSkills"; 
import HobbySection from "../components/HobbySection"; 

export default function AllAboutMe() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-16"> 
        <section>
          <div className="text-center">
            <AnimatedTitle text="All About Me" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-1 relative min-h-[450px]">
              <InteractiveProfile />
            </div>
            <div className="md:col-span-2 space-y-4 card-glass p-6 md:p-8 rounded-xl">

              <p className="text-graphite-silver leading-relaxed text-justify">
                Hi! Namaku Muchammad Rafif Azis Syahlevi, mahasiswa Sistem dan Teknologi Informasi di Institut Teknologi Bandung. Aku punya rasa ingin tahu yang besar dan semangat kompetitif yang hampir nggak pernah padam. Dalam hal apa pun, entah itu akademik, karir, game, atau hal kecil di kehidupan sehari-hari karena aku selalu punya dorongan kuat untuk jadi yang terbaik. Aku nggak suka berada di posisi di bawah orang lain, kalau ada seseorang yang lebih unggul dariku, itu bukan bikin minder, tapi justru memicu obsesiku untuk melampauinya lewat usaha, kerja keras, dan logika yang terarah. Buatku, sesuatu yang baru benar-benar menarik kalau bisa diurai sampai ke akar logika untuk membuktikan bahwa ide gila pun bisa diwujudkan, asal logika dan kreativitas berjalan bareng.
              </p>
              <p className="text-graphite-silver leading-relaxed text-justify">
                Tapi di balik semua ambisi dan kecepatan itu, aku juga seseorang yang sedang belajar untuk lebih ikhlas dalam menjalani hidup. Kadang aku sadar, hidup nggak selalu tentang menang atau jadi nomor satu, tapi juga tentang menikmati proses dan menemukan makna dari setiap rintangan yang muncul. Aku belajar untuk disiplin, bukan cuma dalam akademik, tapi juga dalam hal sederhana seperti tidur tepat waktu, menjaga emosi, menghargai orang lain, dan tetap konsisten meski hasil belum selalu seindah harapan.
              </p>
              <p className="text-graphite-silver leading-relaxed text-justify">
                Aku anak ketiga dari empat bersaudara, dan dari situ aku banyak belajar tentang tanggung jawab dan empati. Kadang capek, kadang kesel, tapi justru di situlah aku paham bahwa hubungan manusia, terutama keluarga, nggak bisa diukur pakai logika doang. Dari situ aku belajar bahwa hidup itu soal keseimbangan antara ambisi dan keikhlasan, logika dan perasaan, tujuan besar dan kebahagiaan kecil yang sering kita lupakan.
              </p>
              <p className="text-graphite-silver leading-relaxed text-justify">
                Mungkin aku bukan siapa-siapa sekarang, tapi aku percaya bahwa setiap langkah kecil yang kujalani dari ide, pengalaman, sampai kegagalan yang aku alami, semuanya sedang mengarah ke sesuatu yang lebih besar. Aku hidup dengan prinsip sederhana, tetap berpikir logis, tetap punya tujuan, tapi jangan lupa untuk tetap manusia.
              </p>

            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <AnimatedTitle text="My Skills" />
          </div>
          
          <div className="mt-6">
            <RunningSkills />
          </div>
        </section>
        
        <section>
          <div className="text-center">
            <AnimatedTitle text="My Hobbies" />
          </div>
          
          <div className="mt-6"> 
            <HobbySection />
          </div>
        </section>

      </div>
    </AnimatedPage>
  );
}