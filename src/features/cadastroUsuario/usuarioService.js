export const listarUsuarios = () => {
  return JSON.parse(localStorage.getItem("usuarios"));
};

export const ativarUsuario = (usuario, estado) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const indexUsuario = usuarios.findIndex((item) => item.id === usuario.id);
  if (indexUsuario > -1) {
    usuarios[indexUsuario].ativo = estado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};
