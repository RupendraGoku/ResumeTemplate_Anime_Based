import TopRight from './TopRight';
import BottomRight from './BottomRight';

const RightSection = () => {
  return (
    <>
      {/* Top Section */}
      <div className="h-[50%] bg-[#c8af4f] text-white px-8 py-6 flex flex-col justify-between relative">
        {/* White translucent overlay */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />

        {/* Keep flex layout untouched */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <TopRight />
        </div>
      </div>

      {/* Bottom Section with image background */}
      <div className="h-[50%] relative bg-[url(./Image/kafka.jpg)] bg-cover bg-center">
        {/* White translucent overlay */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none z-0" />

        <div className="relative z-10 h-full">
          <BottomRight />
        </div>
      </div>
    </>
  );
};

export default RightSection;
