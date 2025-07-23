import Goku from '../Image/Goku.png'
import goku from '../Image/goku1.png'
const LeftSection = () => {
  return (
    <>
      {/* Navigation */}
      <div className="flex items-center gap-8 text-sm font-semibold uppercase text-[#1d1d1d]">
        {/* <span className="text-lg font-bold">
        </span> */}
                  <img src={goku} className='w-1/14 rounded-full bg-gray-500' alt="" />
        <nav className="flex gap-6">
          <a href="#home">Home</a>
          <a href="#main">Projects</a>
          <a href="#ongoing" className="border-b-2 border-[#c8af4f] pb-1">
            Ongoing
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Main Text */}
      <div className="text-left mt-10">
        <h1 className="text-5xl font-bold text-[#1d1d1d]">Rupendra Kumar</h1>
        <h2 className="text-3xl text-[#c8af4f] font-semibold mt-1">Frontend Developer</h2>

        <button className="text-[8px] md:text-[14px] mt-6 inline-flex items-center gap-2 border-2 border-[#c8af4f] text-[#1d1d1d] font-semibold px-2 py-1.5 md:px-6 md:py-3 rounded-full hover:bg-[#c8af4f] hover:text-white transition cursor-pointer">
          DOWNLOAD RESUME <span className="md:ml-2">→</span>
        </button>
      </div>

      {/* Footer Note */}
      <div className="text-sm mt-10 italic text-[#3f3f3f]">
        Hi, I’m <strong>Rupendra</strong>
      </div>
    </>
  );
};

export default LeftSection;
