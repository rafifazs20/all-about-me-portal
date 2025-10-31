import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import SongModal from '../components/SongModal'; 
import { AnimatePresence } from 'framer-motion';

const songs = [
  {
    id: 1,
    title: "Godspeed",
    artist: "Frank Ocean",
    youtubeId: "P18g4rKns6Q",
    songMeaning: "Lagu ini adalah sebuah 'ucapan selamat jalan' yang tulus untuk seseorang dari masa lalu, mendoakan mereka kebahagiaan dan keselamatan ('Godspeed') dalam perjalanan hidup baru mereka.",
    fullLyrics: "[Intro]\nI will always love you\nHow I do\nLet go of a prayer for you\nJust a sweet word\nThe table is prepared for you\n\n[Verse]\nWishing you godspeed, glory\nThere will be mountains you won't move\nStill, I'll always be there for you\nHow I do\nI let go of my claim on you, it's a free world\nYou look down on where you came from sometimes\nBut you'll have this place to call home, always\n\n[Outro]\nThis love will keep us through blinding of the eyes (oh)\nSilence in the ears, darkness of the mind (until it's time)\nThis love will keep us through blinding of the eyes (oh, oh-oh)\nSilence in the ears, darkness of the mind (oh, oh-oh, oh)\nThis love will keep us through blinding of the eyes (oh, until it's time we die)\nSilence in the ears, darkness of the mind\nHmm-oh-oh, oh, oh-oh\nI'll always love you until the time we die\nOh-oh, hmm"
  },
  {
    id: 2,
    title: "No. 1 Party Anthem",
    artist: "Arctic Monkeys",
    youtubeId: "mGUjVbsYG6E",
    songMeaning: "Tentang momen sinematik di sebuah pesta, saat musik melambat dan dua orang asing saling menemukan. Sebuah ironi romantis tentang 'lagu pesta' yang justru paling pelan.",
    fullLyrics: "[Verse 1]\nSo you're on the prowl wondering whether\nShe left already or not\nLeather jacket, collar popped like Cantona\nNever knowing when to stop\nSunglasses indoor is par for the course\nLights in the floors and sweat on the walls\nCages and poles\n\n[Verse 2]\nCall off the search for your soul\nOr put it on hold again\nShe's having a sly indoor smoke\nAnd she calls the folks who run this, her oldest friends\n\n[Pre-Chorus]\nSipping a drink and laughing at imaginary jokes\nAs all the signals are sent, her eyes invite you to approach\nAnd it seems as though those lumps in your throat\nThat you just swallowed have got you going\n\n[Chorus]\nCome on, come on, come on\nCome on, come on, come on\nNumber one party anthem\n\n[Verse 3]\nShe's a certified mind blower\nKnowing full, well, that I don't\nMay suggest there's somewhere from which I might know her\nJust to get the ball to roll\n\n[Pre-Chorus]\nDrunken monologues, confused because\nIt's not like I'm falling in love, I just want ya\nTo do me no good\nAnd you look like you could\n\n[Chorus]\nCome on, come on, come on\nCome on, come on, come on\nNumber one party anthem\nCome on, come on, come on\nBefore the moment's gone\nNumber one party anthem, yeah, yeah\n\n[Bridge]\nThe look of love, the rush of blood\nThe \"She's with me\" is the Gallic shrug\nThe shutterbugs, the Camera Plus\nThe black and white and the color dodge\nThe good time girls, the cubicles\nThe house of fun, the number one\nParty anthem, oh\n\n[Outro]\nCome on, come on, come on\nCome on, come on, come on\nCome on, come on, come on\nCome on, come on, come on\nBefore the moment's gone\nNumber one party anthem\nNumber one party anthem\nNumber one party anthem\nYeah, yeah"
  },
  {
    id: 3,
    title: "Gone, Gone, Gone",
    artist: "Phillip Phillips",
    youtubeId: "oozQ4yV__Vw",
    songMeaning: "Sebuah janji kesetiaan yang mutlak. Lagu ini adalah sumpah untuk selalu ada di sisi seseorang, menjadi 'batu penjuru' mereka, bahkan 'lama setelah mereka tiada'.",
    fullLyrics: "[Verse 1]\nWhen life leaves you high and dry\nI'll be at your door tonight\nIf you need help, if you need help\nI'll shut down the city lights\nI'll lie, cheat, I'll beg and bribe\nTo make you well, to make you well\n\n[Verse 2]\nWhen enemies are at your door\nI'll carry you way from war\nIf you need help, if you need help\n\n[Pre-Chorus]\nYour hope dangling by a string\nI'll share in your suffering\nTo make you well, to make you well\nGive me reasons to believe\nThat you would do the same for me\n\n[Chorus]\nAnd I would do it for you, for you\nBaby, I'm not moving on\nI'll love you long after you're gone\nFor you, for you\nYou will never sleep alone\nI'll love you long after you're gone\nAnd long after you're gone, gone, gone\n\n[Verse 3]\nWhen you fall like a statue\nI'm gon' be there to catch you\nPut you on your feet, you on your feet\nAnd if your well is empty\nNot a thing will prevent me\nTell me what you need\nWhat do you need?\n\n[Pre-Chorus]\nI surrender honestly\nYou've always done the same for me\n\n[Chorus]\nSo, I would do it for you, for you\nBaby, I'm not movin' on\nI'll love you long after you're gone\nFor you, for you\nYou will never sleep alone\nI'll love you long after you're gone\nAnd long after you're gone, gone, gone\n\n[Bridge]\nYou're my backbone\nYou're my cornerstone\nYou're my crutch when my legs stop moving\nYou're my headstart\nYou're my rugged heart\nYou're the pulse that I've always needed\nLike a drum, baby, don't stop beating\nLike a drum, baby, don't stop beating\nLike a drum, baby, don't stop beating\nLike a drum, my heart never stops beating\n\n[Chorus]\nFor you, for you\nBaby, I'm not moving on\nI'll love you long after you're gone\nFor you, for you\nYou will never sleep alone\nI'll love you long after you're gone\nFor you, for you\nBaby, I'm not movin' on\nI'll love you long after you're gone\nFor you, for you\nYou will never sleep alone\nI'll love you long, long after you're gone\n\n[Outro]\nLike a drum, baby, don't stop beating\nLike a drum, baby, don't stop beating\nLike a drum, baby, don't stop beating\nLike a drum, my heart never stops beating for you\nAnd long after you're gone, gone, gone\nI'll love you long after you're gone, gone, gone"
  }
];

export default function MySongs() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-12">
        
        <section className="text-center">
          <AnimatedTitle text="Songs for You" />
          <p className="text-xl text-graphite-silver max-w-2xl mx-auto mt-4">
            "Music is the moonlight in the gloomy night of life." – John Paul Friedrich Richter
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {songs.map(song => (
            <div
              key={song.id}
              className="card-glass rounded-xl flex flex-col justify-between
                         cursor-pointer group transform hover:scale-[1.03] transition-transform duration-300
                         overflow-hidden"
              onClick={() => setSelectedSong(song)}
            >
              <div>
                <img 
                  src={`https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`} 
                  alt={song.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{song.title}</h3>
                  <h4 className="text-lg text-graphite-silver/80 mb-4">{song.artist}</h4>
                  
                  <div className="text-graphite-silver leading-relaxed line-clamp-4">
                    <p>{song.songMeaning}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 p-6 border-t border-white/10">
                <span className="text-electric-cyan font-semibold text-sm
                                 group-hover:tracking-wider transition-all duration-300">
                  Tap to see more →
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>

      <AnimatePresence>
        {selectedSong && (
          <SongModal 
            song={selectedSong} 
            onClose={() => setSelectedSong(null)} 
          />
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}