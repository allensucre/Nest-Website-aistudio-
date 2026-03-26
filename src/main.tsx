import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import UpdatesPage from './pages/UpdatesPage.tsx';
import BlogPublicBetaPage from './pages/BlogPublicBetaPage.tsx';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

const renderPage = () => {
  if (pathname === '/updates') return <UpdatesPage />;
  if (pathname === '/updates/blog/public-beta') return <BlogPublicBetaPage />;
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {renderPage()}
  </StrictMode>,
);
