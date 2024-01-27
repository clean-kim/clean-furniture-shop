import { ChangeEvent, useEffect, useState } from 'react';
import styles from './search_input.module.scss';

export interface Search {
  keyword: string;
  handleSearch: (keyword: string) => void;
}

// export function SearchInput(props: Search) {
export function SearchInput() {
  // const {keyword, handleSearch} = props;
  const [query, setQuery] = useState('');
  const handleInputChange = (e: ChangeEvent) => {
    const { target } = e;
    setQuery((target as HTMLInputElement).value);
  };
  const handleClick = () => {
    // handleSearch(query);
  };
  useEffect(() => {
    // setQuery(keyword);
  // }, [props]);
  }, []);

  return (
    <div className={styles.search_input__container}>
      <input type='search'
        name='search'
        className={styles.search__input}
        onChange={handleInputChange}
        value={query}
        placeholder='상품 검색'/>
      <button type='button' className={`${styles.btn_icon} ${styles.icon_search}`} onClick={handleClick} aria-label='검색' />
    </div>
  );
}