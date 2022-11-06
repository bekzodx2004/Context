import React, { Component } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Card from "./Card/Card";
import "./Content.scss";
export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      quti: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?delay=3")
      .then((response) => response.json())
      .then((mal) => {
        return this.setState({
          quti: mal.data,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }
  render() {
    return (
      <div className="content">
        <Header />
        {!this.state.loading ? (
          <div className="cards p-5">
            {this.state.quti.map((user) => {
              return (
                <Card rasm={user.avatar} ism={user.first_name} p={user.email} />
              );
            })}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
