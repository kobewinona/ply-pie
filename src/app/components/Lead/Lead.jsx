import Image from 'next/image';

import leadStyles from './Lead.module.css';


const Lead = () => {
  return (
    <section className={leadStyles.lead}>
      <Image
        src="/cover/secretaire.jpg"
        alt=""
        fill
        style={{objectFit: 'cover'}}
        priority
      />
    </section>
  );
};

export default Lead;