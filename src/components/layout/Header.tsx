import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { HeaderMobile } from '@components/layout/HeaderMobile';
import { HeaderPC } from '@components/layout/HeaderPC';
import { Response } from '@typings/Response';
import { handleScroll } from '@utils';
import { useIsMobile } from '../../utils/useIsMobile';

export interface MenuList {
  menuList: string[];
}

const getNavData = async (): Promise<Response<string>> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/nav`);
  return await response.json();
};

export function Header() {

  const isMobile = useIsMobile();
  const { data: menuList, isSuccess } = useQuery<Response<string>>({
    queryFn: getNavData,
    queryKey: ['nav'],
  });

  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (headerRef.current) {
      if (location.pathname.split('/')[1] !== '') {
        headerRef.current.removeAttribute('style');
      } else {
        window.addEventListener('scroll', () => handleScroll(headerRef.current as HTMLElement));
        return () => {
          window.removeEventListener('scroll', () => handleScroll(headerRef.current as HTMLElement));
        };
      }
    }
  }, [location.pathname, menuList, isMobile]);

  return (
    <>
      {
        isSuccess && (isMobile ? <HeaderMobile menuList={menuList} ref={headerRef} /> : <HeaderPC menuList={menuList} ref={headerRef} />)
      }
    </>
  );
}
