import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import BookPage from "./pages/bookPage/BookPage";
import OneBookPage from './pages/oneBookPage/OneBookPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/books/:title" component={OneBookPage} />
          <Route path="/books" component={BookPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
