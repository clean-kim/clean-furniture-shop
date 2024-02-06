import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchModalPC } from '@components/search/SearchModalPC';
import { Storage } from '@utils';
import styles from './search_input.module.scss';

export interface Search {
  keyword: string;
  handleSearch: (keyword: string) => void;
}

export function SearchInput() {
  // const {keyword, handleSearch} = props;
  const [query, setQuery] = useState('');
  const handleInputChange = (e: ChangeEvent) => {
    const { target } = e;
    setQuery((target as HTMLInputElement).value);
  };

  useEffect(() => {
    // setQuery(keyword);
  // }, [props]);
  }, []);

  const searchBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    if(modalRef.current) {
      modalRef.current.style.visibility = 'hidden';
      modalRef.current.style.opacity = '0';
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBtnRef.current?.click();
    }
  };
  const handleInputClick = () => {
    if(modalRef.current) {
      modalRef.current.style.visibility = 'visible';
      modalRef.current.style.opacity = '1';
    }
  };

  const navigate = useNavigate();
  const handleSearchButtonClick = () => {
    Storage().setArray('search', query);
    navigate(`/search?keyword=${query}`);
  };

  return (
    <div className={styles.search_input__container}>
      <input type='search'
        autoComplete='off'
        name='search'
        className={styles.search__input}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onKeyPress={handleKeyPress}
        value={query}
        placeholder='상품 검색'/>
      <button type='button'
        ref={searchBtnRef}
        onClick={handleSearchButtonClick}
        className={`${styles.btn_icon} ${styles.icon_search}`}
        aria-label='검색' />
      <SearchModalPC ref={modalRef} handleMouseLeave={handleCloseModal}/>
    </div>
  );
}