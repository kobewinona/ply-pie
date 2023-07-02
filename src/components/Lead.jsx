import Image from 'next/image';

import leadStyles from './Lead.module.css';


const Lead = () => {
  return (
    <section className={leadStyles.lead}>
      <Image
        src="/cover/secretaire.jpg"
        alt=""
        fill
        style={{
          objectFit: 'cover',
          padding: '40px 0 30px 0'
        }}
        priority
      />
    </section>
  );
};

export default Lead;