import React from 'react'
import { NavBar } from '../components/Navbar'
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { changeLog, selectGlobals } from '../features/globalsSlice';
import YouTube, { YouTubeProps } from 'react-youtube';


export const Home = () => {
  const { nameUser, isLoged} = useAppSelector(selectGlobals);
  const dispatch = useAppDispatch();

  const checkStatusUserLocal = () => {
    let userIsLoged = localStorage.getItem('userIsLoged');

    !!userIsLoged && dispatch(changeLog(true));
  };
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1
    }
  };

  return (
    <>
      <header>
        <NavBar />

      </header>
      <main>

        <div>
            <div>
            <YouTube videoId="0E7lZMwhGcA" opts={videoOptions} />
            </div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h2>OUR SERVICES</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div>insertar cardservices</div>
            </div>
            <div>
              <h2>OUR MENU PRICING</h2>
              <span>HR</span>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div>insertar pizzaServices</div>
            </div>
            <div>
              Stadistics
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>Paginacion</div>

              </div>
            </div>

        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}
