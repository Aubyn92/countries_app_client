import React from "react";

class AddCountry extends React.Component {
  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const body = {
      country: this.state,
    };
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/countries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body),
    });
    this.props.history.push("/countries");
  };

  render() {
    return (
      <div className="container">
        <h1>Add a country</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          name="name" 
          id="name"
          onChange={this.onInputChange} 
          />
          <label htmlFor="description">Adventures</label>
          <textarea 
          name="description" 
          id="description"
          onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="airline">Airline</label>
          <input type="text" 
          name="airline" 
          id="airline"
          onChange={this.onInputChange}
          />
          <label htmlFor="year">Year</label>
          <input type="text" 
          name="year" 
          id="year" 
          onChange={this.onInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddCountry;
