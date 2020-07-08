import { LISTAR_USUARIOS } from "./usuarioActions";

export const initialState = {
  Usuarios: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LISTAR_USUARIOS:
      return { ...state, Usuarios: payload.Usuarios };
    default:
      return state;
  }
};
