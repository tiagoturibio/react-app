export const listarUsuarios = () => {
  return JSON.parse(localStorage.getItem("usuarios"));
};
