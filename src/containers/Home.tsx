import React from 'react'
import { Navbar } from '../components/Navbar'
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { changeLog, selectGlobals } from '../features/globalsSlice';
import { UserNotLoged } from '../components/UserNotLoged'

export const Home = () => {
  const { nameUser, isLoged} = useAppSelector(selectGlobals);
  const dispatch = useAppDispatch();

  const checkStatusUserLocal = () => {
    let userIsLoged = localStorage.getItem('userIsLoged');

    !!userIsLoged && dispatch(changeLog(true));
  };

  return (
    <div>
        { isLoged && <Navbar /> }
        { !isLoged && <UserNotLoged />}
    </div>
  )
}
