import { NavBar } from '../components/Navbar';
import { Footer } from '../containers/Footer';
import { HeaderVideoContainer } from '../containers/HeaderVideoContainer';
import { ContactContainer } from '../containers/ContactContainer';
import { WelcomeSection } from '../containers/WelcomeSection';
import { ServicesContainer } from '../containers/ServicesContainer';

export const Home = () => {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <HeaderVideoContainer />
            <ContactContainer />
            <WelcomeSection />
            <ServicesContainer />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
