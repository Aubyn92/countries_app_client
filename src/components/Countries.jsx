import React from 'react'

class Countries extends React.Component {
  state = { countries: [] }

  getCountries = async () => {
    const response = await fetch("http://localhost:3000/countries")
    const countries = await response.json()
    this.setState({ countries: countries })
  }

  renderCountries = () => {
    return this.state.countries.map((country, index) => {
      return (
        <div key={index}>
          <h3>{country.name}</h3>
          <p>Activities: {country.description}</p>
          <p>Airline used: {country.airline}</p>
          <p>Year visited: {country.year}</p>
          <hr/>
        </div>
      )
    })
  }

  async componentDidMount() {
    this.getCountries()
  }

  render() {
    return (
      <div>
        {this.renderCountries()}
      </div>
    )
  }
}

export default Countries