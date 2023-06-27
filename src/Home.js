import React from "react";
import currencies from "./utils/currencies";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      base: "USD",
      rates: null,
    };
  }

  changeBase = (event) => {
    this.setState({ base: event.target.value });
  };
  render() {
    const { base, rates } = this.state;
    return (
      <>
        <form className="p-3 bg-light form-inline justify-content-center">
          <h3 className="mb-2">
            Base currency: <b className="mr-2">1</b>
          </h3>
          <select
            value={base}
            onChange={this.changeBase}
            className="form-control form-control-lg mb-2"
          >
            {Object.keys(currencies).map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </form>
      </>
    );
  }
}
export default Home;
