'use client';
import { 
  Button, 
  Navbar, 
  NavbarLink, 
  NavbarToggle, 
  NavbarCollapse, 
  TextInput
} from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Header() {
  const path = usePathname();
  const {theme, setTheme} = useTheme();
  return (
    <Navbar className='border-b-2'>
      <Link
        href='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Akela's
        </span> 
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
         <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === 'light' ? light : dark,
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
             <Button 
            className="from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" outline >
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href='/' active={path === '/'}>
          Home
        </NavbarLink>
        <NavbarLink href='/about' active={path === '/about'}>
          About
        </NavbarLink>
        <NavbarLink href='/projects' active={path === '/projects'}>
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}