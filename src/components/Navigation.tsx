'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Navigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <button
                onClick={() => router.push('/')}
                className="text-xl font-bold text-purple-600 hover:text-purple-500 transition-colors"
              >
                RentWise
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => router.push('/buildings')}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-purple-500 hover:text-purple-700 transition-colors"
              >
                Buildings
              </button>
              <button
                onClick={() => router.push('/neighborhoods')}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-purple-500 hover:text-purple-700 transition-colors"
              >
                Neighborhoods
              </button>
              <button
                onClick={() => router.push('/landlords')}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-purple-500 hover:text-purple-700 transition-colors"
              >
                Landlords
              </button>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {session ? (
              <button
                onClick={() => router.push('/profile')}
                className="inline-flex items-center rounded-md bg-purple-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
              >
                Profile
              </button>
            ) : (
              <>
                <button
                  onClick={() => router.push('/login')}
                  className="text-gray-700 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => router.push('/signup')}
                  className="ml-3 inline-flex items-center rounded-md bg-purple-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <button
              onClick={() => {
                router.push('/buildings');
                setIsMenuOpen(false);
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              Buildings
            </button>
            <button
              onClick={() => {
                router.push('/neighborhoods');
                setIsMenuOpen(false);
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              Neighborhoods
            </button>
            <button
              onClick={() => {
                router.push('/landlords');
                setIsMenuOpen(false);
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              Landlords
            </button>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="space-y-1">
              {session ? (
                <button
                  onClick={() => {
                    router.push('/profile');
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      router.push('/login');
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      router.push('/signup');
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 