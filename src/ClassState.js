import React, { Component } from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }

  onChangeCode(event) {
    this.setState({ value: event.target.value });
  }

  checkCode() {
    this.setState({ loading: true });
    setTimeout(() => {
      if (this.state.value === SECURITY_CODE) {
        this.setState({
          loading: false,
          error: false,
        });
      } else {
        this.setState({
          loading: false,
          error: true,
        });
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>Eliminar ClassState</h1>
        <p>Por favor, escribe el código de seguridad.</p>
        {!this.state.loading && this.state.error && (
          <p>Error: el codigo no es correcto.</p>
        )}
        {this.state.loading && <Loading />}
        <input
          placeholder='Código de seguridad'
          onChange={(e) => this.onChangeCode(e)}
        />
        <button onClick={() => this.checkCode()}>Comprobar</button>
      </div>
    );
  }
}
