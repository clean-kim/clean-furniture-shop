import { ForwardedRef, forwardRef, useReducer, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuList } from '@components/layout/Header';
import { SearchModalMobile } from '@components/search/SearchModalMobile';

export const HeaderMobile = forwardRef(({ menuList }: MenuList, ref: ForwardedRef<HTMLElement>) => {
  const location = useLocation();
  const [open, toggleOpen] = useReducer((v) => !v, true);

  const handleToggle = () => {
    toggleOpen();
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleRequestClose = () => {
    setModalOpen(false);
  };
  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={`side_menu${!open ? ' open' : ''}`}>
        <button className='close_btn' onClick={handleToggle} />
        <div className="home_btn">
          <span className="button" />
          <Link to={'/'} onClick={handleToggle}><span className='icon_home'/></Link>
        </div>
        <h1 className='m_title mt30'>SHOP</h1>
        <h3 className='m_sub_title mt40'>CATEGORY</h3>
        <ul className='category mt30'>
          {
            menuList &&
            menuList.sort().map(item => {
              return (<li key={item}><Link to={`/category/${item.toLowerCase()}`} onClick={handleToggle}>{item}</Link></li>);
            })
          }
        </ul>
      </div>
      <header className={`header${location.pathname.split('/')[1] !== '' ? ' header--blur' : ''}`} ref={ref}>
        <nav>
          {/*<div className='menu_btn_wrap'>*/}
          <button className='menu_btn' onClick={handleToggle}>
            <span />
            <span />
            <span />
          </button>
          {/*</div>*/}
          <div className='flex--center'>
            <button className='icon_search' aria-label='검색' onClick={handleClick} />
            {isModalOpen && <SearchModalMobile isModalOpen={isModalOpen} onRequestClose={handleRequestClose}/>}
            <span className='cart_container'>
              <Link to={'/cart'} aria-label={'장바구니 가기'} className='cart_btn' />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
});

HeaderMobile.displayName = 'HeaderMobile';