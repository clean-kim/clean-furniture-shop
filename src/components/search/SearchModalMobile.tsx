import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import ReactModal, { Styles } from 'react-modal';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { SearchRank } from '@typings/Model';
import { Response } from '@typings/Response';
import { Storage } from '@utils';

interface SearchModalMobileProps {
  isModalOpen: boolean;
  onRequestClose(): void;
}

const getSearchRank = async (): Promise<Response<SearchRank>> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/searchRank`);
  return await response.json();
};

export const SearchModalMobile = ({ isModalOpen, onRequestClose }: SearchModalMobileProps) => {

  const [searchValue, setSearchValue] = useState<string | number | readonly string[]>('');

  const { data: rankList, isSuccess } = useQuery<Response<SearchRank>>({
    queryFn: getSearchRank,
    queryKey: ['search_rank'],
  });
  
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const getRecentSearch = () => {
    setSearchHistory(Storage().getArray('search').reverse());
  };

  useEffect(() => {
    getRecentSearch();
  }, []);

  const removeHistory = (value: string) => {
    Storage().removeArray('search', value);
    getRecentSearch();
  };

  // 검색 내역 삭제
  const handleClickRemoveHistory = (e: MouseEvent<HTMLButtonElement>) => {
    removeHistory(e.currentTarget.value);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const { lastChild } = e.currentTarget;
    if(lastChild && lastChild.textContent) {
      Storage().setArray('search', lastChild.textContent);
      getRecentSearch();
    }
    onRequestClose();
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = (e.target as HTMLInputElement);
    return setSearchValue(value);
  };

  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const onSearchButtonClick = () => {
    if (searchValue) {
      Storage().setArray('search', searchValue);
    }
    navigate('/search');
    // dispatch(setCurrentSearchValue(searchValue.toString()));
    onRequestClose();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('');
      onSearchButtonClick();
    }
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      contentLabel={'Search Mobile Modal'}
      ariaHideApp={false}
      style={ModalStyle}
    >
      <div className='search_container'>
        <form className='search_modal__form'>
          <div>
            <input type='text' placeholder={'Search'} value={searchValue} onKeyPress={handleKeyPress} onChange={handleInputChange} />
          </div>
          <button className="rm_all_btn" onClick={onRequestClose}>취소</button>
        </form>
        <div className='search_container'>
          <div className='list_title'>최근 검색어</div>
          <ul className='history_list'>
            {
              searchHistory.length > 0
                ?
                searchHistory.map((item) => {
                  return (
                    <li key={item} className='history_item' onClick={handleClick}>
                      <div className='keyword_container'>
                        <Link to={`/search?keyword=${item}`}>
                          <p>{item}</p>
                        </Link>
                        <button className='search_rm_btn' value={item} onClick={handleClickRemoveHistory} />
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
          <ul className='history_list popular'>
            {
              isSuccess && rankList.map((item: SearchRank) => {
                return (
                  <li key={item.value} className='keyword' onClick={handleClick}>
                    <Link to={`/search?keyword=${item.value}`}>
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
    </ReactModal>
  );
};

const ModalStyle: Styles = {
  content: {
    borderTop: '1px solid var(--border100)',
    height: '100%',
    inset: 0,
    padding: 0,
    width: '100%',
  },
  overlay: {
    background: 'var(--ui-background)',
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    touchAction: 'none',
    width: '100%',
    zIndex: 99,
  },
};