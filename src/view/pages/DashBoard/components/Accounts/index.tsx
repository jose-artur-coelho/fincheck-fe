import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Arrow } from '../../../../components/Arrow';
import { AccountsSlide } from './AccountsSlide';
import { Account } from '../../../../../types/Account';
import { CreateAccount } from './CreateAccount';

const contas: Account[] = [{ name: 'Nubank', balance: 1234, type: 'ash' }];

export function Accounts() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function handleSlideChange() {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <p className="text-white text-[14px] md:text-[18px] font-medium ">
          Minhas Contas
        </p>
        {contas.length > 0 && (
          <div className="flex items-center gap-7">
            <Arrow
              direction="left"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            />
            <Arrow
              direction="right"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            />
          </div>
        )}
      </div>
      {contas.length > 0 ? (
        <AccountsSlide
          contas={contas}
          swiperRef={swiperRef}
          setIsBeginning={setIsBeginning}
          setIsEnd={setIsEnd}
          handleSlideChange={handleSlideChange}
        />
      ) : (
        <CreateAccount />
      )}
    </div>
  );
}
