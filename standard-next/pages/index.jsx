import Head from 'next/head'
import Image from 'next/image'
import useDarkMode from '../hooks/useDarkMode';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaPoo,
} from 'react-icons/fa';
import { useState } from 'react'
import Script from 'next/script'


const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaPoo size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

export default function Home() {
  return (
    <main className="text-center font-black text-emerald-300 dark:text-blue-300 mt-52">
      <h1 className="text-8xl">hello, world!</h1>
      <p className='text-blue-300 text-5xl py-20'>
        blue is dark
      </p>
      <p className='text-emerald-300 text-5xl'>
        emerald is light
      </p>
      <ThemeIcon></ThemeIcon>
    </main>
  )
}