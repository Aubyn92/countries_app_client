import React from "react";

class EditCountry extends React.Component {
  state = {
    name: "",
    description: "",
    airline: "",
    year: "",
    loading: true,
    id: this.props.match.params.id,
  };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, name, description, airline, year } = this.state;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/countries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ country: { name, description, airline, year }}),
    });
    this.props.history.push("/countries");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/countries/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });    
    const { name, description, airline, year } = await response.json();
    this.setState({ name, description, airline, year, loading: false });
  }

  render() {
    console.log(this.state);
    const { name, description, airline, year, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a country</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.onInputChange}
              value={name}
            />
            <label htmlFor="description">Adventures</label>
            <textarea
              name="description"
              id="description"
              onChange={this.onInputChange}
              value={description}
            ></textarea>
            <label htmlFor="airline">Airline</label>
            <input
              type="text"
              name="airline"
              id="airline"
              onChange={this.onInputChange}
              value={airline}
            />
            <label htmlFor="year">Year</label>
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
