import Goku from '../Image/Goku.png'

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-[60px] bg-gray-900 text-white flex justify-between items-center px-10 z-50 shadow">
      <h1 className="text-xl font-bold tracking-wider">YOUR NAME</h1>
      <nav className="space-x-8 uppercase text-sm">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#ongoing" className="border-b-2 border-yellow-400 pb-1">Ongoing</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
