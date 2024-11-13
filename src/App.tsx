import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './components/Contact';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
]);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <main>
        <RouterProvider router={router} />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;