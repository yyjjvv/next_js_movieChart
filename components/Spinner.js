import Image from 'next/image';
import spinnerImg from '@/public/spinner.svg';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <Image
          className={`${styles.spinner}`}
          src={spinnerImg}
          width={45}
          height={45}
          alt="로딩 중...."
        />
      );
}

export default Spinner