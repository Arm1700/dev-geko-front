import LanguageSwitcher from './LanguageSwitcher';
import Menu from './Menu';
import {BsTelephone} from 'react-icons/bs';
import {LuMailCheck} from 'react-icons/lu';
import {useState} from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className=" flex flex-col">
            <div className=" bg-secondary">
                <div className="py-[10px] text-pseudo flex items-center  justify-between max:px-5 max-w-[1200px] mx-auto">
                    <div className="w-70   flex items-center gap-3 justify-between">
                        <BsTelephone/>
                        <span className="hidden md:block">(+374) 98 03 33 94</span>
                        <LuMailCheck/>
                        <span className="hidden md:block">gekoeducation@gmail.com</span>
                    </div>
                    <LanguageSwitcher/>
                </div>
            </div>
            <div>
                <Menu toggleMenu={toggleMenu} showMenu={showMenu}/>
            </div>
            <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu}/>
        </header>
    );
}
