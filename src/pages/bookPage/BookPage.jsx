import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/api";

class BookPage extends Component {
  state = {
    listBooks: null,
    inputValue: "",
    error: null,
  };

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search).get(
      "category"
    );

    // console.log(getBooks());

    if (search) {
      this.getBooksByCategory(search);
    }
  }

  handleChange = ({ target }) => this.setState({ inputValue: target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.getBooksByCategory(inputValue);
  };

  getBooksByCategory = (inputValue) => {
    const { history, location } = this.props;
    getBooks(inputValue)
      .then((data) => {
        console.log(data);
        const listBooks = data.works.map((book) => {
          const title = book.title.split(" ").join("+");
          return { ...book, titleSearch: title };
        });

        this.setState({ listBooks });
        history.push({
          ...location,
          search: `category=${inputValue}`,
        });
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    // console.log(this.props);
    const { match } = this.props;
    const { listBooks, inputValue } = this.state;

    return (
      <>
        <h2>BookPage</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="category"
            placeholder="enter category of book"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Find</button>
        </form>

        {listBooks && (
          <ul>
            {listBooks.map(({ title, cover_id: id, titleSearch }) => (
              <li key={id}>
                <Link to={`${match.path}/${titleSearch}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default BookPage;
