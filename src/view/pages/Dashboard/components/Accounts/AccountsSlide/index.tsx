import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from '../../../../../components/AccountCard';
import { useBankAccountsStore } from '../../../../../../store/BankAccountsStore';

type AccountsSlideProps = {
  swiperRef: React.RefObject<SwiperType | null>;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  handleSlideChange: () => void;
};

export function AccountsSlide({
  swiperRef,
  setIsBeginning,
  setIsEnd,
  handleSlideChange,
}: AccountsSlideProps) {
  const bankAccounts = useBankAccountsStore((state) => state.bankAccounts);

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
          <AccountCard type={acc.type} balance={acc.balance} name={acc.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
