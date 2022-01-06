import React, { Component } from "react";

export class Loading extends Component {
  componentWillUnmount() {
    console.log("Componente <Loading /> Desmontado");
  }

  render() {
    return <p>Loading...</p>;
  }
}
