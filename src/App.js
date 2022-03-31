import { useState, useEffect } from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [digimons, setDigimons] = useState([]);
  const [filteredDigimons, setFilteredDigimons] = useState(digimons);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(users => setDigimons(users));
  }, []);

  useEffect(() => {
    const newfilteredDigimons = digimons.filter((digimon) => {
      return digimon.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredDigimons(newfilteredDigimons);
  }, [digimons, searchField])

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
        <h1 className='app-title'>Digimon Directory</h1>
        <SearchBox 
          onChangehandler={onSearchChange} 
          placeholder='search digimons'
          className='digimon-search-box' 
        />
        <CardList digimons={filteredDigimons} />
      </div>
  );
};

export default App;
