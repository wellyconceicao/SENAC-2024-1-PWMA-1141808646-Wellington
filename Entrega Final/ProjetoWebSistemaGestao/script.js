



function carregarCompras() {
    const compras = JSON.parse(localStorage.getItem('compras')) || [];
    const tabela = document.querySelector('#tabelaHistorico tbody');
    tabela.innerHTML = '';

    compras.forEach(compra => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${compra.cliente}</td>
            <td>${compra.produto}</td>
            <td>${compra.data}</td>
            <td>${compra.valor}</td>
        `;
        tabela.appendChild(novaLinha);
    });
}


function salvarCompra(compra){
    const compras = JSON.parse(localStorage.getItem('compras')) || [];
    compras.push(compra);
    localStorage.setItem('compras', JSON.stringify(compras));
}



document.getElementById('formCompras').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cliente = document.getElementById('nomeCli').value;
    const produto = document.getElementById('nomeProd').value;
    const data = document.getElementById('dataCompra').value;
    const valor = document.getElementById('valorCompra').value;
    
    const novaCompra = {
        cliente,
        produto,
        data,
        valor
    };
    
   salvarCompra(novaCompra);
carregarCompras();
    
    // Limpar o formulário
    document.getElementById('formCompras').reset();
});

window.addEventListener('load', carregarCompras);


 