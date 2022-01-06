import React, { useReducer, useEffect } from "react";

const SECURITY_CODE = "paradigma";

export default function UseState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onError = () => dispatch({ type: actionTypes.error });
  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onChangeCode = ({ target }) => {
    dispatch({ type: actionTypes.change_code, payload: target.value });
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
        <h1>Eliminar UseReducer</h1>
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
        <p>¿Seguro que quieres eliminar UseReducer?</p>
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

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  reset: "RESET",
  delete: "DELETE",
  check: "CHECK",
  change_code: "CHANGE_CODE",
};

const initialState = {
  value: "",
  error: false,
  loading: false,
  confirm: false,
  deleted: false,
};

const reducerObject = (state, action) => ({
  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    confirm: true,
  },
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  RESET: { ...state, confirm: false, deleted: false },
  DELETE: { ...state, deleted: true },
  CHECK: { ...state, loading: true, error: false },
  CHANGE_CODE: { ...state, value: action.payload },
});

function reducer(state, action) {
  if (reducerObject(state, action)[action.type]) {
    return reducerObject(state, action)[action.type];
  }

  return state;
}
