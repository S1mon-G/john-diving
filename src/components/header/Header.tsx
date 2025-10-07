import './Header.css';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setShowSubmenu(false);
      }
    }
    if (showSubmenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSubmenu]);

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="submenu" ref={submenuRef}>
            <button
              className="submenu-toggle"
              onClick={() => setShowSubmenu((prev) => !prev)}
              type="button"
              aria-haspopup="true"
              aria-expanded={showSubmenu}
            >
              Nos Plongées
            </button>
            <ul
              className={`submenu-list${showSubmenu ? ' show' : ''}`}
              style={{
                display: showSubmenu ? 'block' : 'none',
                position: 'absolute',
                marginTop: '8px',
                padding: '8px 0',
                borderRadius: '4px',
                minWidth: '180px',
                zIndex: 100,
              }}
            >
              <li><a href="/diving/cenotes">Premières Plongées</a></li>
              <li><a href="/diving/cozumel">Plongeur expérimenté</a></li>
              <li><a href="/diving/reef">Cenotes</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Playa Del Carmen</a></li>
        </ul>
      </nav>
    </header>
  );
}