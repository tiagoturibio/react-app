//jimport { notifyError, notifySuccess } from "../../../actions/notificacaoActions";
import * as UsuarioManager from "../usuarioManager";
import * as actions from "./usuarioActions";

export const listarUsuarios = () => async (dispatch) => {
  try {
    const usuarios = UsuarioManager.listarUsuarios();
    dispatch(actions.listarUsuarios(usuarios));
  } catch (error) {
    dispatch(listarUsuarios([]));
  }
};
