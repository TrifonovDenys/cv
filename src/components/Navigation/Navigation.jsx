import ContactMe from '../Buttons/ContactMe';
import Burger from './Svg/Burger';
import { Collapse } from 'flowbite';
import ToggleTheme from '../Buttons/ToggleTheme';

const Navigation = () => {
  // set the target element that will be collapsed or expanded (eg. navbar menu)
  const $targetEl = document.getElementById('targetEl');

  // optionally set a trigger element (eg. a button, hamburger icon)
  const $triggerEl = document.getElementById('triggerEl');

  // optional options with default values and callback functions
  const options = {
    onCollapse: () => {
      console.log('element has been collapsed');
    },
    onExpand: () => {
      console.log('element has been expanded');
    },
    onToggle: () => {
      console.log('element has been toggled');
    },
  };

  const instanceOptions = {
    id: 'targetEl',
    override: true,
  };

  const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);

  return (
    <nav className='bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 gap-8 '>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <ContactMe />
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <Burger />
          </button>
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                aria-current='page'
              >
                Hero
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Project
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Experience
              </a>
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
