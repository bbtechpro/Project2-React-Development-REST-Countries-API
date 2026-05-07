import { useCountryContext } from '../../backend/context/CountryContext.jsx'
import { useNavigate } from 'react-router-dom'

function TestCard({ country }) {
  const navigate = useNavigate()

  const handleClick = () => {
    alert('TEST CARD CLICKED: ' + country.name.common)
    navigate(`/country/${country.cca3}`)
  }

  return (
    <div 
      onClick={handleClick}
      style={{
        backgroundColor: 'lime',
        border: '5px solid red',
        padding: '20px',
        margin: '20px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: 'bold'
      }}
    >
      TEST CARD - CLICK ME!
      <br />
      {country.name.common}
    </div>
  )
}

export default TestCard
