import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Splitting from 'splitting';
import { MenuList } from '@components/layout/Header';

export function HeaderPC({ menuList }: MenuList) {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + 44;
    if (navRef.current) {
      if (scrollPosition >= windowHeight) {
        navRef.current.style.backgroundColor = 'var(--ui-background)';
        navRef.current.style.color = 'var(--text-01)';
      } else {
        navRef.current.style.backgroundColor = 'var(--ui-transparent)';
        navRef.current.style.color = 'var(--text-02)';
      }
    }
  };

  useEffect(() => {
    const target = document.getElementById('menu') as Element;
    Splitting({ target: target });

    if (navRef.current && location.pathname.split('/')[1] !== '') {
      navRef.current.removeAttribute('style');
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [menuList, location.pathname]);

  const categoryRef = useRef<HTMLDivElement>(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const handleMenuMouseEnter = () => {
    setIsCategoryHovered(true);
  };
  const handleMenuMouseLeave = () => {
    setIsCategoryHovered(false);
  };
  const handleCategoryMouseEnter = () => {
    setIsCategoryHovered(true);
  };
  const handleCategoryMouseLeave = () => {
    setIsCategoryHovered(false);
  };

  return (
    <header className={`header${location.pathname.split('/')[1] !== '' ? ' header_color' : ''}`} ref={navRef}>
      <nav>
        <ul className='menu' id='menu'>
          <li onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}><Link to={'/shop'}>Shop</Link></li>
          <li><Link to={'/'}>Home</Link></li>
        </ul>
        <div className='category' ref={categoryRef} onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}>
          <ul>
            {
              isCategoryHovered && menuList &&
              menuList.sort().map(item => {
                return (<li key={item}><Link to={`/category?category=${item.toLowerCase()}`}>{item}</Link></li>);
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}