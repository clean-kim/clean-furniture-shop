import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Splitting from 'splitting';
import { SearchInput } from '@components/common';
import { MenuList } from '@components/layout/Header';

export const HeaderPC = forwardRef(({ menuList }: MenuList, ref: ForwardedRef<HTMLElement>) => {
  const location = useLocation();
  const [pathname, setPathname] = useState('');

  console.log('HeaderPC:: ', menuList);

  useEffect(() => {
    const target = document.getElementById('menu') as Element;
    Splitting({ target: target });
    setPathname(location.pathname.split('/')[1]);
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
    <header className={`header${pathname !== '' ? ' header--blur' : ''}`} ref={ref}>
      <div className='gnb'>
        <nav>
          <ul className='menu' id='menu'>
            <li onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}><Link to={'#'}>Shop</Link></li>
            <li><Link to={'/'}>Home</Link></li>
          </ul>
        </nav>
        <div className='actions'>
          <div className='search_wrap'>
            <SearchInput />
          </div>
          <Link to={'/cart'} aria-label={'장바구니 가기'} className='cart_btn' />
        </div>
      </div>
      <div className='category' ref={categoryRef} onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}>
        <ul>
          {
            isCategoryHovered && menuList.sort().map(item => {
              return (<li key={item}><Link to={`/category/${item.toLowerCase()}`}>{item}</Link></li>);
            })
          }
        </ul>
      </div>
    </header>
  );
});

HeaderPC.displayName = 'HeaderPC';