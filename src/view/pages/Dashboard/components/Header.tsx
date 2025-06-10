import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useUserStore } from '../../../../lib/user.store';
import { formatName } from '../../../../utils/format-name';
import { Logo } from '../../../components/Logo';

export function Header() {
  const formatedName = formatName(useUserStore((state) => state.name));
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);
  const userOptionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isUserOptionsOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        userOptionsRef.current &&
        !userOptionsRef.current.contains(event.target as Node)
      ) {
        setIsUserOptionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserOptionsOpen]);

  return (
    <header className="flex justify-between">
      <Logo size="sm" color="teal-9" />
      <div
        ref={userOptionsRef}
        className=" flex items-center justify-center text-teal-9 text-[14px] font-medium rounded-full h-12 w-12 bg-teal-0 relative cursor-pointer"
        onClick={() => setIsUserOptionsOpen((prev) => !prev)}
      >
        {formatedName}
        <AnimatePresence>
          {isUserOptionsOpen && (
            <motion.div
              className="absolute right-1 top-14 bg-teal-0 flex rounded-2xl cursor-default"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav>
                <ul className="flex flex-col items-center justify-between p-5 h-24 ">
                  <li className="hover:decoration-1 hover:underline cursor-pointer">
                    Configurações
                  </li>
                  <li className="hover:decoration-1 cursor-pointer hover:underline ">
                    Sair
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
