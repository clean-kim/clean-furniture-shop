import * as process from 'process';
import { useEffect, useState } from 'react';
import { HeaderMobile } from '@components/layout/HeaderMobile';
import { HeaderPC } from '@components/layout/HeaderPC';
import { useIsMobile } from '../../utils/useIsMobile';

export interface MenuList {
  menuList: string[];
}

export function Header() {
  const isMobile = useIsMobile();

  const [menuList, setMenuList] = useState<string[]>([]);

  async function getNavData() {
    console.log(import.meta.env, 'import.meta.env.VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL, process.env.VITE_API_BASE_URL);
    const response = await fetch(import.meta.env.VITE_URL + '/nav');
    const value = await response.json();
    setMenuList(value.data);
  }

  useEffect(() => {
    getNavData();
  }, [menuList, isMobile]);

  return (
    <>
      {
        !isMobile ?
          <HeaderPC menuList={menuList} /> :
          <HeaderMobile menuList={menuList} />
      }
    </>
  );
}
