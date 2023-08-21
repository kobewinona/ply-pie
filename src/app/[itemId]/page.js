import Header from '../components/Header/Header';
import Order from '../components/Order/Order';
import Responsive from '@/app/components/Shared/Responsive';
import NavBar from '../components/NavBar/NavBar';
import Slogan from '../components/Slogan/Slogan';
import ItemInfo from '../components/ItemInfo/ItemInfo';
import Footer from '../components/Footer/Footer';


const Page = ({params}) => {
  const breakpoint = 768;
  
  return (
    <>
      <Header />
      <Responsive element={NavBar} breakpoint={breakpoint} />
      <Slogan place="item-page" />
      <ItemInfo itemId={params.itemId} />
      <Order />
      <Footer />
    </>
  );
};

export default Page;