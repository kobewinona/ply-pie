import footerStyles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <img className={footerStyles.logo} src="/logo_light_big.svg" alt="Логотип."/>
      <ul className={footerStyles['socials-container']}>
        <li>
          <a href="#">
            <img className={footerStyles['socials-logo']} src="/pictograms/telegram.png" alt="Телеграм."/>
          </a>
        </li>
        <li>
          <a href="#">
            <img className={footerStyles['socials-logo']} src="/pictograms/instagram.png" alt="Инстаграм."/>
          </a>
        </li>
        <li>
          <a href="#">
            <img className={footerStyles['socials-logo']} src="/pictograms/pinterest.png" alt="Пинтерест."/>
          </a>
        </li>
      </ul>
      <nav>
        <ul className={footerStyles['nav-container']}>
          <li><a className={footerStyles['nav-link']} href="">О нас</a></li>
          <li><a className={footerStyles['nav-link']} href="">Подписка</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;