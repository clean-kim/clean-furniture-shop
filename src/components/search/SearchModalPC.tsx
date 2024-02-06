import { ForwardedRef, forwardRef, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { SearchRank } from '@typings/Model';
import { Response } from '@typings/Response';
import { Storage } from '@utils';

type ModalProps = {
  handleMouseLeave: () => void;
}

const getSearchRank = async (): Promise<Response<SearchRank>> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/searchRank`);
  return await response.json();
};

export const SearchModalPC = forwardRef((props: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {

  const { data: rankList, isSuccess } = useQuery<Response<SearchRank>>({
    queryFn: getSearchRank,
    queryKey: ['search_rank'],
  });

  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const getRecentSearch = useCallback(() => {
    setSearchHistory(Storage().getArray('search').reverse());
  }, []);

  const removeHistory = (value: string) => {
    Storage().removeArray('search', value);
    getRecentSearch();
  };

  // 검색 내역 전체 삭제
  const handleClickRemoveAllHistory = () => {
    Storage().remove('search');
    getRecentSearch();
  };
  // 검색 내역 개별 삭제
  const handleClickRemoveHistory = (e: MouseEvent<HTMLButtonElement>) => {
    removeHistory(e.currentTarget.value);
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const { lastChild } = e.currentTarget;
    if(lastChild && lastChild.textContent) {
      Storage().setArray('search', lastChild.textContent);
      getRecentSearch();
    }
  };

  useEffect(() => {
    getRecentSearch();
  }, []);

  return (
    <div className='search_modal' ref={ref} onMouseLeave={props.handleMouseLeave}>
      <div className='search_container'>
        <div className='header_container'>
          <div className="list_title">최근 검색어</div>
          { searchHistory.length > 0 && <button className="rm_all_btn" onClick={handleClickRemoveAllHistory}>전체삭제</button>}
        </div>
        <ul className='mt10'>
          {
            searchHistory.length > 0 ?
              searchHistory.map((item) => {
                return (
                  <li key={item} className='keyword'>
                    <div className='keyword_container'>
                      <Link to={`/search?keyword=${item}`} onClick={handleClick}>
                        <p>{item}</p>
                      </Link>
                      <button className='search_rm_btn' value={item} onClick={handleClickRemoveHistory}>삭제</button>
                    </div>
                  </li>
                );
              })
              :
              <li className='keyword'>최근 검색어 내역이 없습니다.</li>
          }
        </ul>
      </div>
      <div className='search_container'>
        <div className="list_title">인기 검색어</div>
        <ul className='mt10'>
          {
            isSuccess && rankList.map((item: SearchRank) => {
              return (
                <li key={item.value} className='keyword'>
                  <Link to={`/search?keyword=${item.value}`} onClick={handleClick}>
                    <em>{item.rank}</em>
                    <p>{item.value}</p>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
});

SearchModalPC.displayName = 'SearchModalPC';