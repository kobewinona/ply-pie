import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles['layout']}>
      <img className={styles['logo']} src="/logo_light_big.svg" alt="Логотип."/>
      <ul className={styles['socials-container']}>
        <li>
          <a href="#">
            <img className={styles['socials-logo']} src="/pictograms/telegram_light.png" alt="Телеграм."/>
          </a>
        </li>
        <li>
          <a href="#">
            <img className={styles['socials-logo']} src="/pictograms/instagram_light.png" alt="Инстаграм."/>
          </a>
        </li>
        <li>
          <a href="#">
            <img className={styles['socials-logo']} src="/pictograms/pinterest_light.png" alt="Пинтерест."/>
          </a>
        </li>
      </ul>
      <nav>
        <ul className={styles['nav-container']}>
          <li><a className={styles['nav-link']} href="">О нас</a></li>
          <li><a className={styles['nav-link']} href="">Подписка</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;