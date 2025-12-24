import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import CircularProgress from '../components/CircularProgress';
import ReviewAccordion from '../components/ReviewAccordion';
import { uasReviews } from '../data/uasReviewData';

export default function MyProfessionalReview() {
  const peerReviewScore = null; 

  const filteredUAS = uasReviews.slice(0, 4);
  const selfReviewScore = filteredUAS.reduce((acc, rev) => acc + rev.average, 0) / filteredUAS.length;
  
  const finalAverage = peerReviewScore ? (selfReviewScore + peerReviewScore) / 2 : selfReviewScore;

  const getCPMKLevel = (score) => {
    if (!peerReviewScore) return { lv: "-", text: "Menunggu Peer-Review", color: "text-yellow-500" };
    if (score >= 4.5) return { lv: 4, text: "Melampaui (Excellent)", color: "text-electric-cyan" };
    return { lv: 3, text: "Tercapai (Good)", color: "text-green-400" };
  };

  const level = getCPMKLevel(finalAverage);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-16">
        <section className="text-center">
          <AnimatedTitle text="My Professional Review" />
          <p className="text-graphite-silver mt-4">Audit Kualitas Komunikasi Publik (Berdasarkan Isu Lingkungan 99%)</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center items-center">
            <CircularProgress score={finalAverage} />
          </div>

          <div className="md:col-span-2 card-glass p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron text-left">Professional Status</h3>
            <div className={`text-2xl font-bold mb-6 ${level.color}`}>
              CPMK Level {level.lv}: {level.text}
            </div>

            <h4 className="text-xl font-semibold text-white mb-3 text-left">Rincian Skor (UAS 1-4)</h4>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between items-center text-lg p-3 bg-storm rounded-lg">
                <span className="text-graphite-silver">UAS Self-Assessment (AI)</span>
                <span className="font-bold text-white">{selfReviewScore.toFixed(2)} / 5.00</span>
              </div>
              <div className="flex justify-between items-center text-lg p-3 bg-storm rounded-lg border border-yellow-500/30">
                <span className="text-graphite-silver">UAS Peer-Assessment (Manual)</span>
                <span className="text-yellow-500 font-bold italic">Belum dinilai</span>
              </div>
            </div>

            <a 
              href="https://docs.google.com/spreadsheets/d/1rvyf-dvVSEJNyX_Fw1SHmgxzua498tMiVNwSqwKihpg/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto text-center px-8 py-3 
                         rounded-lg bg-electric-cyan text-midnight-black 
                         font-semibold hover:bg-white transition-all duration-300 mb-6"
            >
              Spreadsheet Peer Assessment UAS
            </a>

            <p className="text-graphite-silver text-sm leading-relaxed border-t border-white/10 pt-4">
              *Evaluasi ini mencakup efektivitas pesan publik mengenai polusi udara yang berdampak pada 99% populasi dunia[cite: 113, 117].
            </p>
          </div>
        </div>

        <section>
          <div className="text-center mb-6">
            <AnimatedTitle text="Detail Self-Review (AI)" />
          </div>
          <ReviewAccordion reviews={filteredUAS} />
        </section>
      </div>
    </AnimatedPage>
  );
}