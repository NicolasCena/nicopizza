import React from 'react';
import { NavBar } from '../components/Navbar';
import { Footer } from '../containers/Footer';
import { HeaderVideoContainer } from '../containers/HeaderVideoContainer';
import about from '../assets/about.jpg';
import { ContactContainer } from '../containers/ContactContainer';

export const Home = () => {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <HeaderVideoContainer />
            <ContactContainer />

            <div>
              <div>
                <img src={about} alt="About" />
              </div>
              <div>
                <p>Welcome to Pizza a Restaurant</p>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a 
                    thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around 
                    and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious 
                    Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
