import Header from '../components/Header/Header';
import Responsive from '@/app/components/Shared/Responsive';
import NavBar from '../components/NavBar/NavBar';
import Slogan from '../components/Slogan/Slogan';
import Order from '../components/Order/Order';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';


const Page = () => {
  const breakpoint = 768;
  
  return (
    <>
      <Header />
      <Responsive element={NavBar} breakpoint={breakpoint} />
      <Slogan place="item-page" />
      <Order />
      <Contacts />
      <Footer />
    </>
  );
};

export default Page;