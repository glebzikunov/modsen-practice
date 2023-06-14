import React, {useState} from 'react'
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";
import BooksSection from './components/BooksSection/BooksSection';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <header className='App-header'>
        <SearchForm onSearch={handleSearch}/>
      </header>
      <main className='App-main'>
        <BooksSection searchValue={searchValue}/>
      </main>
      <footer className='App-footer'>
        Pod
      </footer>
    </div>
  );
}

export default App;
