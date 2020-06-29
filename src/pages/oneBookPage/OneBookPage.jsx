import React, { Component } from "react";
import { getBookByTitle } from "../../services/api";

class OneBookPage extends Component {
  state = {
    numFound: 0,
    error: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params.title);
    const { title } = this.props.match.params;

    getBookByTitle(title)
      .then((data) => {
        // console.log(data)
        this.setState({ numFound: data.numFound });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { numFound } = this.state;

    return (
      <>
        <h2>OneBookPage</h2>
        <h3>{numFound} books</h3>
      </>
    );
  }
}

export default OneBookPage;
