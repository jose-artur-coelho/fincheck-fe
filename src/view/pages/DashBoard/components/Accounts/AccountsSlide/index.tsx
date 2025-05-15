import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from '../../../../../components/AccountCard';
import { Account } from '../../../../../../types/Account';

type AccountsSlideProps = {
  swiperRef: React.RefObject<SwiperType | null>;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  handleSlideChange: () => void;
  contas: Account[];
};

export function AccountsSlide({
  swiperRef,
  setIsBeginning,
  setIsEnd,
  handleSlideChange,
  contas,
}: AccountsSlideProps) {
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
      {contas.map((conta) => (
        <SwiperSlide>
          <AccountCard
            type={conta.type}
            balance={conta.balance}
            name={conta.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
