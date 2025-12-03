import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F5E8DC]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/catalog" element={<Catalog />} />*/}
        </Routes>
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}
