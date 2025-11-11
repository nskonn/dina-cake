import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
  ];

  return (
    <header className="bg-[#E0D0BD] border-b border-[#C9B299] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-[#A67C52] tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>Dina's cake</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#A67C52]'
                    : 'text-gray-700 hover:text-[#A67C52]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-[#A67C52] text-white px-6 py-2 rounded-lg hover:bg-[#8B6640] transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#C9B299]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#A67C52]'
                      : 'text-gray-700 hover:text-[#A67C52]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#A67C52] text-white px-6 py-2 rounded-lg hover:bg-[#8B6640] transition-colors text-center"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
