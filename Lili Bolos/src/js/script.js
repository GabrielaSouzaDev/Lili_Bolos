/*============ MENU HAMBURGUER ============*/
// Mostrar ou esconder a lista 
const botao = document.querySelector('.menu-hamburguer')
const lista = document.querySelector('.navegacao-lista')
const itens = document.querySelectorAll('.item-menu')


botao.addEventListener('click', () => {
    lista.classList.toggle('ativo')

    // condição para alterar as ☰ por ✕
    if (lista.classList.contains('ativo')) {
        botao.textContent = '✕' // menu aberto
    } else {
        botao.textContent = '☰' // menu fechado
    }
})

// Fecha ao clicar em um link 
itens.forEach(item => {
    item.addEventListener('click', () => {
        lista.classList.remove('ativo')
        botao.innerHTML = '☰'
    })
})
/*============ MENU HAMBURGUER ============*/