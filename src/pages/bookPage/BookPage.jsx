import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/api";

class BookPage extends Component {
  state = {
    listBooks: null,
    error: null,
  };

  componentDidMount() {
    console.log(getBooks());

    getBooks()
      .then((data) => {
        console.log(data);
        this.setState({ listBooks: data.works });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    console.log(this.props);
    const { match } = this.props;
    const { listBooks } = this.state;

    return (
      <>
        <h2>BookPage</h2>

        {listBooks && (
          <ul>
            {listBooks.map(({ title, cover_id: id }) => (
              <li key={id}>
                <Link to={`${match.path}/${title}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default BookPage;
