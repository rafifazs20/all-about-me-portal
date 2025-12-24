import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import CircularProgress from '../components/CircularProgress';
import ReviewAccordion from '../components/ReviewAccordion';

import { reviews } from '../data/reviewData.jsx';

const peerReviewScore = null; // Disetel null untuk menunggu penilaian asli
const filteredUTS = reviews.slice(0, 4);
const selfReviewScore = filteredUTS.reduce((acc, review) => acc + review.average, 0) / filteredUTS.length;

const finalAverage = peerReviewScore ? (selfReviewScore + peerReviewScore) / 2 : selfReviewScore;

function getRatingScale(score) {
  if (!peerReviewScore) return { text: 'Menunggu Penilaian', range: '3.01 - 4.00', color: 'text-yellow-500' };
  if (score <= 1) return { text: 'Sangat Buruk', range: '0.01 - 1.00', color: 'text-red-500' };
  if (score <= 2) return { text: 'Buruk', range: '1.01 - 2.00', color: 'text-orange-500' };
  if (score <= 3) return { text: 'Cukup', range: '2.01 - 3.00', color: 'text-yellow-500' };
  if (score <= 4) return { text: 'Baik', range: '3.01 - 4.00', color: 'text-green-500' };
  return { text: 'Sangat Baik', range: '4.01 - 5.00', color: 'text-electric-cyan' };
}

const rating = getRatingScale(finalAverage);

export default function MyPersonalReview() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-16">
        <section>
          <div className="text-center mb-6">
            <AnimatedTitle text="My Personal Review" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <CircularProgress score={finalAverage} />
            </div>
            
            <div className="md:col-span-2 card-glass p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">Rata-rata Gabungan</h3>
              <div className={`text-2xl font-semibold mb-1 ${rating.color}`}>
                {peerReviewScore ? rating.text : "Status: Menunggu Peer-Review"}
              </div>
              <p className="text-graphite-silver mb-6">Skala: {rating.range}</p>
              
              <h4 className="text-xl font-semibold text-white mb-3">Rincian Skor</h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-lg p-3 bg-storm rounded-lg">
                  <span className="text-graphite-silver">Self Review (AI)</span>
                  <span className="font-bold text-white">{selfReviewScore.toFixed(2)} / 5.00</span>
                </div>
                <div className="flex justify-between items-center text-lg p-3 bg-storm rounded-lg border border-yellow-500/30">
                  <span className="text-graphite-silver">Peer Review (Teman)</span>
                  <span className="font-bold text-yellow-500 italic">Belum dinilai</span>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-2 font-orbitron">Instruksi Penilaian</h4>
              <p className="text-lg text-graphite-silver mb-8">
                Halaman ini bersifat transparan. Skor akhir akan diperbarui setelah proses 
                <strong> Peer-Assessment</strong> manual dilakukan oleh rekan menggunakan kriteria rubrik yang berlaku.
              </p>
              
              <a 
                href="https://docs.google.com/spreadsheets/d/1ZWl8EUcYPDZgJma_ZEt4RUNo3dfSJ9w7w5c5PiBT6vo/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center px-8 py-3 
                           rounded-lg bg-electric-cyan text-midnight-black 
                           font-semibold hover:bg-white transition-all duration-300"
              >
                Spreadsheet Peer Assessment UTS
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-6">
            <AnimatedTitle text="Detail Self-Review (AI)" />
          </div>
          <ReviewAccordion reviews={filteredUTS} />
        </section>

        <section>
          <div className="text-center mb-6">
            <AnimatedTitle text="Refleksi Proses" />
          </div>
          <div className="card-glass p-8 rounded-xl space-y-4">
            <p className="text-graphite-silver leading-relaxed text-justify">

              {` Mengerjakan rangkaian tugas UTS mulai dari All About Me hingga My Personal Review bukan sekadar proses akademik, tetapi perjalanan pribadi untuk memahami siapa aku sebenarnya bukan dari label, tetapi dari nilai, pola pikir, dan perjalanan yang telah membentukku sampai hari ini.



Pada UTS-1 (All About Me), aku belajar bahwa memperkenalkan diri tidak sesederhana menyebut identitas, melainkan tentang memahami arah hidup yang sedang kutuju. Aku menyadari bahwa “Fast, Future, and Competitive” bukan hanya slogan, melainkan prinsip yang membentuk caraku berpikir dan bergerak. Di tahap ini, aku belajar untuk memandang diriku bukan hanya sebagai pelajar, tapi sebagai pribadi yang sedang tumbuh menuju versi terbaik dari dirinya.



Di UTS-2 (Songs for You), aku menemukan bahwa setiap lagu memiliki resonansi dengan kisah hidup. Lagu-lagu yang kupilih bukan hanya sekadar favorit, tapi cerminan nilai, emosi, dan perjalanan spiritualku. Dari sana aku belajar bahwa ekspresi diri tidak selalu harus logis. Terkadang, justru dari keindahan musiklah manusia bisa memahami makna kehidupan dan rasa syukur.



Masuk ke UTS-3 (My Stories for You), bagian ini menjadi paling reflektif. Menulis cerita pribadi membuatku kembali melihat jejak langkah yang pernah kutempuh, termasuk rencana yang gagal dan jalan hidup yang tidak selalu sesuai harapan. Namun dari situ aku benar-benar menyadari bahwa setiap hal yang tampak “tidak sesuai rencana” ternyata bagian dari skenario Allah yang jauh lebih sempurna. Aku belajar menerima, bukan menyerah dan memahami bahwa setiap kejadian punya makna tersembunyi.



Lalu, UTS-4 (My SHAPE) membantuku menyusun potongan-potongan diriku menjadi satu gambaran utuh. Dari hasil VIA, Piagam Diri, hingga Identity Narrative, aku melihat pola bahwa logika dan visi masa depan yang kuat memang menjadi pusat kekuatanku. Tapi di sisi lain, ada nilai empati dan spiritualitas yang terus mengimbangi semuanya. Di sini aku sadar: menjadi hebat bukan tentang siapa yang paling cepat, tapi siapa yang paling paham arah langkahnya.



Akhirnya, UTS-5 (My Personal Review) menjadi ruang untuk meninjau ulang cara berpikir, berkomunikasi, dan berinteraksi. Aku belajar bahwa refleksi bukan sekadar evaluasi, tapi latihan kesadaran menyadari bagaimana setiap kata, tindakan, dan keputusan mencerminkan siapa aku sebenarnya.



Dari keseluruhan proses ini, aku menyimpulkan bahwa tugas-tugas ini bukan hanya tentang menulis atau menganalisis, tetapi tentang berdamai dengan diri sendiri. Aku belajar bahwa mengenal diri adalah langkah pertama untuk memahami orang lain. Bahwa rencana manusia mungkin sering meleset, tapi rencana Allah tidak pernah salah arah.



Ke depan, aku ingin membawa semangat reflektif ini ke kehidupan nyata, bukan hanya untuk menjadi pribadi yang cepat dan kompetitif, tetapi juga yang bijak, bersyukur, dan sadar bahwa setiap proses adalah bagian dari rencana terbaik-Nya.



“Manusia boleh punya rencana, tapi rencana Allah-lah yang paling indah. Kadang jalan-Nya terlihat berliku, tapi di baliknya selalu ada versi terbaik dari diri yang sedang Ia bentuk.” `}
            </p>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}