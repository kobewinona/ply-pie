import Header from './components/Header/Header';
import Lead from './components/Lead/Lead';
import ItemList from './components/ItemList/ItemList';
import Slogan from './components/Slogan/Slogan';
import About from './components/About/About';
import Order from './components/Order/Order';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


const Page = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Lead />
        <ItemList />
        <Slogan />
        <About />
        <Order />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Page;