import Image from 'next/image';

import styles from './About.module.css';
import Title from '../Shared/Title';
import Text from '../Shared/Text';
import Button from '../Shared/Button';


const About = () => {
  return (
    <section id="about" className={styles['layout']}>
      <div className={styles['line']}></div>
      <div className={styles['image']}>
        <Image
          src='/about/about.jpeg'
          alt=""
          fill
          style={{objectFit: 'cover'}}
          priority
        />
      </div>
      <Title text="О нас" place="about" gridOrder="2" />
      <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum." place="about" gridOrder="3" />
      <Button text="Узнать еще" place="about" gridOrder="4"/>
    </section>
  );
};

export default About;