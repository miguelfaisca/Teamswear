/* LISTA DE PRODUTOS */
const produtos=[
 {time:"Arsenal",preco:150,img:"https://i.ibb.co/j9zTmhyw/arsenal.jpg"},
 {time:"Liverpool",preco:160,img:"https://i.ibb.co/FqDQrgyt/liv.jpg"},
 {time:"Manchester City",preco:180,img:"https://i.ibb.co/7t9hmVqt/download.jpg"},
 {time:"Chelsea",preco:170,img:"https://i.ibb.co/xdX6nm0/chelsea.jpg"},
 {time:"Inter de Milão",preco:199,img:"https://i.ibb.co/M51v61vk/int.jpg"},
 {time:"Milan",preco:170,img:"https://i.ibb.co/LzPH1YcH/milanb.jpg"},
 {time:"Juventus",preco:180,img:"https://i.ibb.co/zTpWmkp0/juv.jpg"},
 {time:"São Paulo",preco:150,img:"https://i.ibb.co/mF0Dk7Mz/spfc.jpg"},
 {time:"Real Madrid",preco:199,img:"https://i.ibb.co/xSS6X3B7/download.jpg"},
 {time:"Barcelona",preco:190,img:"https://i.ibb.co/FkGtTTk2/barcelona.jpg"},
];

const lista=document.getElementById("lista-produtos");

/* RENDERIZAR PRODUTOS */
produtos.forEach(p=>{
 lista.innerHTML+=`
 <div class="produto-card">
     <img src="${p.img}">
     <h3>${p.time}</h3>
     <p><strong>R$ ${p.preco},00</strong></p>

     <select id="tamanho-${p.time}" class="tamanho-select">
         <option value="">Selecione o tamanho</option>
         <option value="P">P</option>
         <option value="M">M</option>
         <option value="G">G</option>
         <option value="GG">GG</option>
     </select>

     <button class="btn-add" onclick="addCarrinho('${p.time}',${p.preco})">
         Adicionar ao Carrinho
     </button>
 </div>`;
});

/* CARRINHO */
let carrinho=[];

function addCarrinho(time,preco){

    const tamanho=document.getElementById(`tamanho-${time}`).value;

    if(tamanho===""){
        alert("Selecione o tamanho!");
        return;
    }

    carrinho.push({time,preco,tamanho});
    atualizarCarrinho();
}

function atualizarCarrinho(){
    const box=document.getElementById("carrinho");
    const ul=document.getElementById("carrinho-lista");

    ul.innerHTML="";
    carrinho.forEach(i=>{
        ul.innerHTML+=`<li>${i.time} (${i.tamanho}) — R$ ${i.preco},00</li>`;
    });

    box.style.display="block";
}

function finalizarCompra(){
    let msg="Olá! Gostaria de finalizar minha compra:\n\n";
    carrinho.forEach(i=>msg+=`• ${i.time} - Tamanho ${i.tamanho} — R$ ${i.preco},00\n`);

    window.open("https://wa.me/5516988749041?text="+encodeURIComponent(msg));
}
