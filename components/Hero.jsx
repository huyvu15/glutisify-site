import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden flex items-center bg-black">
      <audio ref={audioRef} src="/vhuy.mp3" />

      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-[1]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/70 z-[2]" />
      </div>

      <div className="container-custom relative z-10 w-full flex items-center justify-center">
        {/* Play Button - Centered and Minimalist */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 shadow-2xl backdrop-blur-sm ${isPlaying
              ? 'bg-[#009245]/90 scale-110 shadow-green-500/30'
              : 'bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 shadow-black/20'
            }`}
        >
          <div className={`transition-all duration-300 ${isPlaying ? 'scale-90' : 'scale-100'}`}>
            {isPlaying ? (
              <div className="flex space-x-1 items-end h-5">
                <div className="w-1 bg-white animate-music-bar-1" />
                <div className="w-1 bg-white animate-music-bar-2" />
                <div className="w-1 bg-white animate-music-bar-3" />
              </div>
            ) : (
              <Play size={24} className="text-white ml-1" fill="white" />
            )}
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows - Minimalist */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-8 pointer-events-none">
        <button className="w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all flex items-center justify-center backdrop-blur-md pointer-events-auto">
          <ChevronLeft size={24} />
        </button>
        <button className="w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all flex items-center justify-center backdrop-blur-md pointer-events-auto">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 cursor-pointer transition-all duration-300 rounded-full ${i === 0 ? 'w-16 bg-[#009245]' : 'w-8 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
