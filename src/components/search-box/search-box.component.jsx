import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandlder }) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandlder}
    />
  );
};

export default SearchBox;
