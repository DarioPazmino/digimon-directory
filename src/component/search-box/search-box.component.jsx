import './search.box.styles.css';

const SearchBox = ({ className, placeholder, onChangehandler }) => (
  <input 
    className={`search-box ${className}`}
    type='search' 
    placeholder={placeholder}
    onChange={onChangehandler} 
  />
);

export default SearchBox;