import './App.css'
import Header from './components/filter/Header'
import SearchInput from './components/filter/SearchInput'
import RegionFilter from './components/filter/RegionFilter'

function App() {

  return (
    <>
      <Header />
      <div className="filter-search">
        <SearchInput />
        <RegionFilter />
      </div>
    </>
  )
}

export default App
