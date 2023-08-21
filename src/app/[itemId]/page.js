import Header from '../components/Header/Header';
import Order from '../components/Order/Order';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import Slogan from '../components/Slogan/Slogan';
import Responsive from '@/app/components/Shared/Responsive';


const Page = ({ params }) => {
  const breakpoint = 768;
  
  return (
    <>
      <Header />
      <Responsive element={NavBar} breakpoint={breakpoint} />
      <Slogan place="item-page" />
      <Order />
      <Footer />
    </>
  );
};

export default Page;