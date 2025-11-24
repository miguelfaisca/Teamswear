// Função para adicionar ao carrinho
let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    exibirCarrinho();
}

// Função para exibir os itens do carrinho
function exibirCarrinho() {
    const carrinhoElement = document.getElementById("itensCarrinho");
    carrinhoElement.innerHTML = ""; // Limpa a lista

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        carrinhoElement.appendChild(li);
    });

    // Exibe o carrinho
    const carrinhoContainer = document.getElementById("carrinho");
    carrinhoContainer.style.display = 'block';
}

// Função para finalizar compra
function finalizarCompra() {
    alert("Compra finalizada. Em breve entraremos em contato.");
    carrinho = [];
    exibirCarrinho();
}

// Função para inicializar o mapa (localização)
function initMap() {
    const localizacao = { lat: -21.1795, lng: -47.8104 }; // Coordenadas de Ribeirão Preto
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: localizacao,
    });
    const marker = new google.maps.Marker({
        position: localizacao,
        map: map,
    });
}
