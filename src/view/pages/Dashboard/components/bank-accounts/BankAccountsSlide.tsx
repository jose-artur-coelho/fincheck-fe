import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useUserStore } from '../../../../../lib/user.store';
import { BankAccountCard } from './BankAccountCard';

type BankAccountsSlideProps = {
  swiperRef: React.RefObject<SwiperType | null>;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  handleSlideChange: () => void;
};

export function BankAccountsSlide({
  swiperRef,
  setIsBeginning,
  setIsEnd,
  handleSlideChange,
}: BankAccountsSlideProps) {
  const bankAccounts = useUserStore((state) => state.bankAccounts);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onSlideChange={handleSlideChange}
      breakpoints={{
        650: {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
      }}
      spaceBetween={16}
      slidesPerView={1.5}
    >
      {bankAccounts.map((acc) => (
        <SwiperSlide key={acc.id}>
          <BankAccountCard
            type={acc.type}
            balance={acc.balance}
            name={acc.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
