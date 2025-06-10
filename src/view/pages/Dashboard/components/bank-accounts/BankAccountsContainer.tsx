import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

import { BankAccountsSlide } from './BankAccountsSlide';
import { useUserStore } from '../../../../../lib/user.store';
import { Arrow } from '../../../../components/Arrow';
import { CreateBankAccount } from './CreateBankAccount';

export function BankAccountsContainer() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const bankAccounts = useUserStore((state) => state.bankAccounts);

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
        {bankAccounts.length > 0 && (
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
      <div className="flex items-center justify-center">
        {bankAccounts.length > 0 ? (
          <BankAccountsSlide
            swiperRef={swiperRef}
            setIsBeginning={setIsBeginning}
            setIsEnd={setIsEnd}
            handleSlideChange={handleSlideChange}
          />
        ) : (
          <CreateBankAccount />
        )}
      </div>
    </div>
  );
}
