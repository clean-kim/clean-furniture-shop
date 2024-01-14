import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { HeaderMobile } from '@components/layout/HeaderMobile';
import { HeaderPC } from '@components/layout/HeaderPC';
import { Response } from '@typings/Response';
import { useIsMobile } from '../../utils/useIsMobile';

export interface MenuList {
  menuList: string[];
}

export function Header() {
  const isMobile = useIsMobile();

  const getNavData = async (): Promise<Response<string>> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/nav`);
    const responseList = await response.json();
    return responseList.data;
  };

  const { data: menuList, isSuccess } = useQuery<Response<string>>({
    queryFn: getNavData,
    queryKey: ['nav'],
  });

  useEffect(() => {}, [menuList, isMobile]);

  return (
    <>
      {
        isSuccess && (isMobile ? <HeaderMobile menuList={menuList} /> : <HeaderPC menuList={menuList} />)
      }
    </>
  );
}
