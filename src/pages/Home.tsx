import { NavBar } from '../components/Navbar';
import { Footer } from '../containers/Footer';
import { HeaderVideoContainer } from '../containers/HeaderVideoContainer';
import { ContactContainer } from '../containers/ContactContainer';
import { WelcomeSectionContainer } from '../containers/WelcomeSectionContainer';
import { ServicesContainer } from '../containers/ServicesContainer';
import { StadisticsContainer } from '../containers/StadisticsContainer';

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
            <StadisticsContainer />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
