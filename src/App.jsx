import './App.css'
import Header from './components/filter/Header'
import SearchInput from './components/filter/SearchInput'

function App() {

  return (
    <>
      <Header />
      <div className="filter-search">
        <SearchInput />
      </div>
    </>
  )
}

export default App
