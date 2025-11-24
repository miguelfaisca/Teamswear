// ---------- Lista de produtos ----------
const produtos = [
    { time: "Arsenal", preco: 150, img: "https://i.ibb.co/w6Q0ysp/arsenal.png" },
    { time: "Liverpool", preco: 160, img: "https://i.ibb.co/1bgsk7M/liverpool.png" },
    { time: "Manchester City", preco: 180, img: "https://i.ibb.co/ZdYsMH8/city.png" },
    { time: "Chelsea", preco: 170, img: "https://i.ibb.co/Wy6pLZ1/chelsea.png" },
    { time: "Inter de Milão", preco: 199, img: "https://i.ibb.co/1qhWJDP/inter.png" },
    { time: "Milan", preco: 170, img: "https://i.ibb.co/0hqQ6Ck/milan.png" },
    { time: "Juventus", preco: 180, img: "https://i.ibb.co/g97gRyk/juventus.png" },
    { time: "São Paulo", preco: 150, img: "https://i.ibb.co/s2sjfH3/saopaulo.png" },
    { time: "Real Madrid", preco: 199, img: "https://i.ibb.co/wBS1jZh/realmadrid.png" },
    { time: "Barcelona", preco: 190, img: "https://i.ibb.co/y5K82gj/barcelona.png" },
];

// ---------- Renderizar produtos ----------
const lista = document.getElementById("lista-produtos");

produtos.forEach(p => {
    lista.innerHTML += `
        <div class="produto-card">
            <img src="${p.img}" alt="Camisa ${p.time}">
            <h3>${p.time}</h3>
            <p>Tamanhos: P, M, G, GG</p>
            <p><strong>R$ ${p.preco},00</strong></p>
            <button class="btn-add" onclick="addCarrinho('${p.time}', ${p.preco})">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
});

// ---------- Carrinho ----------
let carrinho = [];
const box = document.getElementById("carrinho");
const carrinhoLista = document.getElementById("carrinho-lista");

function addCarrinho(time, preco) {
    carrinho.push({ time, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    carrinho.forEach(item => {
        carrinhoLista.innerHTML += `
            <li>${item.time} — R$ ${item.preco},00</li>
        `;
    });
    box.style.display = "block";
}

function finalizarCompra() {
    const mensagem = encodeURIComponent(
        "Olá! Gostaria de finalizar minha compra:\n\n" +
        carrinho.map(i => `• ${i.time} — R$ ${i.preco},00`).join("\n")
    );

    window.open(`https://wa.me/5516988749041?text=${mensagem}`);

    carrinho = [];
    atualizarCarrinho();
}
