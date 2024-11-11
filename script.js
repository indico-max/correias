// Função para mostrar o modal de uma receita específica
function mostrarReceita(id) {
  document.getElementById(id).style.display = "block";
}

// Função para fechar o modal de uma receita específica
function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
  const modais = document.getElementsByClassName("modal");
  for (let i = 0; i < modais.length; i++) {
    if (event.target == modais[i]) {
      modais[i].style.display = "none";
    }
  }
}
