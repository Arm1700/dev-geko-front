import LanguageSwitcher from './LanguageSwitcher';
import Menu from './Menu';
import { BsTelephone } from 'react-icons/bs';
import { LuMailCheck } from 'react-icons/lu';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex flex-col ">
      <div className="py-[10px] bg-secondary text-pseudo flex items-center  justify-between lg:px-20 px-5">
        <div className="w-70   flex items-center gap-3 justify-between">
          <BsTelephone />
          <span className="hidden md:block">phone number</span>
          <LuMailCheck />
          <span className="hidden md:block">mail@hh.com</span>
        </div>
        <LanguageSwitcher />
      </div>
      <Menu toggleMenu={toggleMenu} showMenu={showMenu} />
      <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
}
