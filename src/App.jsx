import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import ContactUs from './pages/ContactUs';
import Main from './layouts/Main';
import Post from './pages/Post';
import { useDarkTheme } from './hooks/useDarkTheme';
import useDocumentTitle from './hooks/useDocumentTitle';
import useDebounce from './hooks/useDebounce';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  useDarkTheme();
  const [searchQuery, setSearchQuery] = useState('');

const debouncedSearchQuery = useDebounce(searchQuery, 9000);

  useDocumentTitle(`My Custom Title - ${debouncedSearchQuery}`);

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 dark:bg-slate-800 dark:text-orange-300">
      <RouterProvider router={router} />
      {/**/}
      <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Пошук..."/>
    </div>

  );
}

export default App;