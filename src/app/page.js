import Header from './components/Header/Header';
import Lead from './components/Lead/Lead';
import ItemList from './components/ItemList/ItemList';
import Slogan from './components/Slogan/Slogan';
import About from './components/About/About';
import Order from './components/Order/Order';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Responsive from './components/Shared/Responsive';


const Page = () => {
  const breakpoint = 768;
  
  return (
    <>
      <Header />
      <Responsive element={NavBar} breakpoint={breakpoint} />
      <main>
        <Lead />
        <ItemList />
        <Slogan place="main-page" />
        <About />
        <Order />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Page;