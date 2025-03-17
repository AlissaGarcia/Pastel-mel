let produtos = [
    { nome: "Pastel de Carne", preco: 6.00, imagem: "assets/pastel_de_carne.png" },
    { nome: "Pastel de Frango", preco: 5.50, imagem: "assets/pastel_de_frango.jpg" },
    { nome: "Pastel de Queijo", preco: 5.00, imagem: "assets/pastel_de_queijo.jpg" },
    { nome: "Coxinha", preco: 3.50, imagem: "assets/coxinha.webp" },
    { nome: "Empada de Frango", preco: 4.00, imagem: "assets/empada_de_frango.jpg" },
    { nome: "Refrigerante", preco: 3.00, imagem: "assets/refri.jpg" }
];

let total = 0;

function exibirProdutos() {
    let produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = "";
    produtos.forEach((produto, index) => {
        let div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${index})">Adicionar</button>
        `;
        produtosDiv.appendChild(div);
    });
}

function adicionarAoCarrinho(index) {
    let quantidade = parseInt(prompt(`Quantos ${produtos[index].nome} deseja?`));
    if (!isNaN(quantidade) && quantidade > 0) {
        total += produtos[index].preco * quantidade;
        document.getElementById("total").innerText = total.toFixed(2);
    } else {
        alert("Quantidade inválida!");
    }
}

function finalizarPedido() {
    alert(`Pedido finalizado! Total a pagar: R$ ${total.toFixed(2)}`);
}

function novoPedido() {
    total = 0;
    document.getElementById("total").innerText = total.toFixed(2);
}

exibirProdutos();
