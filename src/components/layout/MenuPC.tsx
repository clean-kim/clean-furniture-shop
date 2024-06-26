import { useEffect, useRef, useState } from 'react';
import { Button, SearchInput } from '@components/common';

export function MenuPC() {
  const [navList, setNavList] = useState<string[]>([]);

  async function getNavData() {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/nav');
    const value = await response.json();
    setNavList(value.data);
  }

  const headerRef = useRef<HTMLHeadElement>(null);

  const handleLoginClick = () => {
    console.log('Login Click');
  };

  let prevScrollPos = window.scrollY;
  window.onscroll = function() {
    const curScrollPos = window.scrollY;
    if (headerRef.current) {
      if (prevScrollPos > curScrollPos) {
        headerRef.current.classList.remove('nav_row');
      } else {
        headerRef.current.classList.add('nav_row');
      }
    }
    prevScrollPos = curScrollPos;
  };

  useEffect(() => {
    getNavData();
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <div className='nav_container'>
        <nav className='global_nav'>
          <ul>
            {
              navList.length > 0
                ?
                navList.sort().map(item => {
                  return (<li key={item}><a href={`/${item}`}>{item}</a></li>);
                })
                :
                <li>no data</li>
            }
          </ul>
        </nav>
      </div>
      <div className='global_items'>
        <div><Button style={'btn_primary'} onClick={handleLoginClick}>로그인</Button></div>
        <div>
          <SearchInput />
        </div>
      </div>
      <span className="menu"></span>
    </header>
  );
}