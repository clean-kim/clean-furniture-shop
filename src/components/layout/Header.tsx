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

  const scrollEvent = () => handleScroll(headerRef.current as HTMLElement);
  useEffect(() => {
    if (headerRef.current) {
      if (location.pathname.split('/')[1] !== '') {
        window.removeEventListener('scroll', scrollEvent);
      } else {
        window.addEventListener('scroll', scrollEvent);
        return () => {
          window.removeEventListener('scroll', scrollEvent);
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
