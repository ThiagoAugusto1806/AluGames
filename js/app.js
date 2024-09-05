function alterarStatus(indexJogo) {
  let itemJogo = document.querySelector(`#game-${indexJogo}`);
  let imgJogo = itemJogo.querySelector(".dashboard__item__img");
  let btnJogo = itemJogo.querySelector(".dashboard__item__button");
  let nomeJogo = itemJogo.querySelector('.dashboard__item__name');
  let quantidadeAlugados = document.querySelectorAll(".dashboard__item__img--rented").length

  if (
    imgJogo.classList.contains("dashboard__item__img--rented")
  ) {
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imgJogo.classList.remove("dashboard__item__img--rented");
        btnJogo.classList.remove("dashboard__item__button--return");
        btnJogo.textContent = "Alugar"
        quantidadeAlugados--
    }
    
  } else {
    imgJogo.classList.add("dashboard__item__img--rented");
    btnJogo.classList.add("dashboard__item__button--return");
    btnJogo.textContent = "Devolver"
    quantidadeAlugados++
  }
  console.log(quantidadeAlugados)
}
