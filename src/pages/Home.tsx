import { NavBar } from '../components/Navbar';
import { Footer } from '../containers/Footer';
import { HeaderVideoContainer } from '../containers/HeaderVideoContainer';
import { ContactContainer } from '../containers/ContactContainer';
import { WelcomeSectionContainer } from '../containers/WelcomeSectionContainer';
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
            <WelcomeSectionContainer />
            <ServicesContainer />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
