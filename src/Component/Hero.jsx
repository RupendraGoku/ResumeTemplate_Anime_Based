import LeftSection from './LeftSection';
import RightSection from './RightSection';
import hero from '../Image/hero.png'; // your character-style image
import sakamoto from '../Image/sakamoto.png'
import r1 from '../Image/r1.png';
import k1 from '../Image/k1.png';
import k2 from '../Image/k2.png';
import r2 from '../Image/r2.png';
import r3 from '../Image/r3.png';
import r4 from '../Image/r4.png';
import saka from '../Image/saka.png'
import saka1 from '../Image/saka1.png'



const Hero = () => {
  return (
    <div className="h-screen w-full flex font-sans bg-[#f9f7f2] overflow-hidden relative">
      
      {/* Left Section */}
      <div className="w-[60%] px-16 py-12 flex flex-col justify-between bg-[url(./Image/kaiju.jpg)] bg-cover bg-center relative">
        
        {/* Translucent white overlay */}
        <div className="absolute inset-0 bg-white/95 z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <LeftSection />
        </div>
      </div>

      {/* Right Section */}
      
      <div className="w-[40%] flex flex-col">
        <RightSection />
      </div>

      {/* Character Image */}
      <img
        src={k1}
        alt="Character"
        className="absolute left-1/2 top-1/2 transform -translate-x-15.5 -translate-y-1/2 h-[80%] rounded-full object-contain z-20 pointer-events-none drop-shadow-[-18px_8px_4px_rgba(0,0,0,0.7)]"
      />
    </div>
  );
};

export default Hero;
