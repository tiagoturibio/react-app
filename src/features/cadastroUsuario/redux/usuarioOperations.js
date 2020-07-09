import * as UsuarioManager from "../usuarioManager";
import * as actions from "./usuarioActions";
import * as notificacaoActions from "../../notificacao/redux/notificacaoActions";

export const listarUsuarios = () => async (dispatch) => {
  try {
    const usuarios = UsuarioManager.listarUsuarios();
    dispatch(actions.listarUsuarios(usuarios));
  } catch (error) {
    dispatch(actions.listarUsuarios([]));
    dispatch(notificacaoActions.notificar("Erro ao listar usuarios"));
  }
};

export const ativarUsuario = (usuario, estado) => async (dispatch) => {
  try {
    UsuarioManager.ativarUsuario(usuario, estado);
    const usuarios = UsuarioManager.listarUsuarios();
    dispatch(actions.listarUsuarios(usuarios));
  } catch (error) {
    dispatch(actions.listarUsuarios([]));
    dispatch(notificacaoActions.notificar("Erro ao ativar usuario"));
  }
};

export const excluirUsuario = (usuario) => async (dispatch) => {
  try {
    UsuarioManager.excluirUsuario(usuario);
    const usuarios = UsuarioManager.listarUsuarios();
    throw new Error();
    dispatch(actions.listarUsuarios(usuarios));
  } catch (error) {
    //dispatch(actions.listarUsuarios([]));
    dispatch(notificacaoActions.notificar("Erro ao excluir usuario"));
  }
};
