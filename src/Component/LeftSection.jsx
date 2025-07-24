import goku from '../Image/goku1.png';
import Rupendra22_5 from '../File/Rupendra22_5.pdf';
import Magnet from './Magnet';
import BlurText from './BlurText'; 
import { Link } from 'react-router-dom';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const LeftSection = () => {
  return (
    <>
      {/* Navigation */}
      <div className="flex items-center gap-8 text-sm font-semibold uppercase text-[#1d1d1d]">
        <img src={goku} className="w-12 h-12 rounded-full bg-gray-500" alt="logo" />
        <nav className="flex gap-6">
  <Link to="/">Home</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/ongoing" className="border-b-2 border-[#c8af4f] pb-1">Ongoing</Link>
  <Link to="/contact">Contact</Link>
</nav>

      </div>

      {/* Main Text */}
      <div className="text-left mt-10">
        <BlurText
          text="Rupendra Kumar"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold text-[#1d1d1d]"
          onAnimationComplete={handleAnimationComplete}
        />

        <BlurText
          text="Frontend Developer"
          delay={300}
          animateBy="words"
          direction="top"
          className="text-3xl text-[#c8af4f] font-semibold mt-1"
        />

        {/* Magnet-enhanced Download Resume Button */}
        <Magnet padding={100} magnetStrength={3}>
          <a
            href={Rupendra22_5}
            download="Rupendra_Kumar_Resume.pdf"
            className="inline-block"
          >
            <button className="text-[8px] md:text-[14px] mt-6 inline-flex items-center gap-2 border-2 border-[#c8af4f] text-[#1d1d1d] font-semibold px-2 py-1.5 md:px-6 md:py-3 rounded-full hover:bg-[#c8af4f] hover:text-white transition cursor-pointer">
              DOWNLOAD RESUME <span className="md:ml-2">→</span>
            </button>
          </a>
        </Magnet>
      </div>

      {/* Footer Note */}
      <div className="text-sm mt-10 italic text-[#3f3f3f]">
        Hi, I’m <strong>Rupendra</strong>
      </div>
    </>
  );
};

export default LeftSection;
