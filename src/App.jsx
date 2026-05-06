import './App.css'
import Header from './components/filter/Header'
import SearchInput from './components/filter/SearchInput'
import RegionFilter from './components/filter/RegionFilter'
import HomePage from './components/pages/Home'

function App() {

  return (
    <>
      <Header />
      <div className="filter-search">
        <SearchInput />
        <RegionFilter />
      </div>
      <HomePage />
    </>
  )
}

export default App
