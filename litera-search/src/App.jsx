import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";
import BooksSection from './components/BooksSection/BooksSection';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <SearchForm />
      </header>
      <main className='App-main'>
        <BooksSection />
      </main>
      <footer className='App-footer'>
        Podval
      </footer>
    </div>
  );
}

export default App;
