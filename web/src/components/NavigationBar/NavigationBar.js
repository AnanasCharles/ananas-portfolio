import { Link, NavLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const NavigationBar = () => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to={routes.home()} className="flex items-center">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-yellow-500">
            Ananas Charles
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <NavLink
                to={routes.home()}
                className="block rounded-full px-4 py-1 transition duration-500 ease-in-out hover:bg-yellow-500/20"
                activeClassName="text-yellow-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.blog()}
                className="block rounded-full px-4 py-1 transition duration-500 ease-in-out hover:bg-yellow-500/20"
                activeClassName="text-yellow-500"
              >
                Blog
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => logOut()}
                  className="block rounded-full px-4 py-1 transition duration-500 ease-in-out hover:bg-gray-700"
                >
                  Logout
                </button>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
