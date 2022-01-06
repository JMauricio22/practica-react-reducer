import React, { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

export default function UseState() {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    confirm: false,
    deleted: false,
  });

  const onChangeCode = (e) => {
    setState({ ...state, value: e.target.value });
  };

  const onCheck = () => {
    setState({ ...state, loading: true, error: false });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, confirm: false, deleted: false });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirm: true,
    });
  };

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.confirm && !state.deleted) {
    return (
      <div>
        <h1>Eliminar UseState</h1>
        <p>Por favor, escribe el código de seguridad.</p>
        {!state.loading && state.error && (
          <p>Error: el codigo no es correcto.</p>
        )}
        {state.loading && <p>Loading...</p>}
        <input
          placeholder='Código de seguridad'
          value={state.value}
          onChange={onChangeCode}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (state.confirm && !state.deleted) {
    return (
      <div>
        <h1>Eliminar UseState</h1>
        <p>¿Seguro que quieres eliminar UseState?</p>
        <button onClick={onDelete}>Sí, eliminar</button>
        <button onClick={onReset}>No, volver</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>UseState fue eliminado</h1>
        <button onClick={onReset}>Recuperar UseState</button>
      </div>
    );
  }
}
