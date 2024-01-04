import { Link } from 'react-router-dom';
import { MenuList } from '@components/layout/Header';

export function HeaderMobile({ menuList }: MenuList) {
  return (
    <header className='header'>
      <nav>
        <ul className='menu' id='menu'>
          <li><Link to={'/shop'}>Shop</Link></li>
          <li><Link to={'/'}>Home</Link></li>
        </ul>
        <div className='category'>
          <ul>
            {
              menuList.length > 0 &&
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