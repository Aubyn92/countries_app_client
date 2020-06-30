import React from "react";

class AddCountry extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const body = {
      country: this.state,
    };
    await fetch("http://localhost:3000/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    this.props.history.push("/countries");
  };
  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="title">Name: </label>
          <input type="text" name="name" id="name" />
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description"></textarea>
          <label htmlFor="airline">Airline used: </label>
          <input type="text" name="airline" id="airline" />
          <label htmlFor="year">Year visited: </label>
          <input type="text" name="year" id="year" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddCountry;
