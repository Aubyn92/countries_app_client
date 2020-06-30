import React from "react";

class EditCountry extends React.Component {
  state = { name: "", description: "", airline: "", year: "", loading: true, id: this.props.match.params.id };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, name, description, airline, year } = this.state
    await fetch(`http://localhost:3000/countries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, airline, year }),
    });
    this.props.history.push("/countries");
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/countries/${id}`);
    const { name, description, airline, year } = await response.json();
    this.setState({ name, description, airline, year, loading: false });
  }

  render() {
    const { name, description, airline, year, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a country</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.onInputChange}
              value={name}
            />
            <label htmlFor="description">Description: </label>
            <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
            value={description}
            ></textarea>
            <label htmlFor="airline">Airline used: </label>
            <input
              type="text"
              name="airline"
              id="airline"
              onChange={this.onInputChange}
              value={airline}
            />
            <label htmlFor="year">Year visited: </label>
            <input
              type="text"
              name="year"
              id="year"
              onChange={this.onInputChange}
              value={year}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

export default EditCountry;