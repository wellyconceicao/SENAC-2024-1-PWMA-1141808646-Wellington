const key_bd = '@clientes'

let listaRegistros = {
    clientes: [

    ]
}


function inserir(nome, sobrenome, data, cpf, rua, cidade, telefoneFixo, celular, email) {
    listaRegistros.clientes.push({

        nome, sobrenome, data, cpf, rua, cidade, telefoneFixo, celular, email

    })
    gravarDados()
    exibir()
    visualizar('lista')

}

function gravarDados() {
    localStorage.setItem(key_bd, JSON.stringify(listaRegistros))
}

function lerDados() {
    const data = localStorage.getItem(key_bd)

    if (data) {
        listaRegistros = JSON.parse(data)
    }

    exibir()




}





function exibir() {
    const tbody = document.getElementById('listadeRegistros')
    if (tbody) {
        tbody.innerHTML = listaRegistros.clientes
            .sort((a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map(cliente => {
                return `<tr>
                        <td>${cliente.nome}</td>
                        <td>${cliente.sobrenome}</td>
                        <td>${cliente.data}</td>
                        <td>${cliente.cpf}</td>
                        <td>${cliente.rua}</td>
                        <td>${cliente.cidade}</td>
                        <td>${cliente.telefoneFixo}</td>
                        <td>${cliente.celular}</td>
                        <td>${cliente.email}</td>
                    <tr>`
            }).join('')
    }
}

function limparCampos() {
    document.getElementById('nomeCli').value = ''
    document.getElementById('sobrenomeCli').value = ''
    document.getElementById('data_nasc').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('rua').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('telFixo').value = ''
    document.getElementById('cel').value = ''
    document.getElementById('emailCli').value = ''

}

function visualizar(pagina, novo = false) {
    document.body.setAttribute('page', pagina)



    if (pagina === 'cadastro') {
        if (novo) limparCampos()


        document.getElementById('nomeCli').focus()
    }
}

function cadastrar(e) {

    e.preventDefault()


    const data = {
        nome: document.getElementById('nomeCli').value,
        sobrenome: document.getElementById('sobrenomeCli').value,
        data: document.getElementById('data_nasc').value,
        cpf: document.getElementById('cpf').value,
        rua: document.getElementById('rua').value,
        cidade: document.getElementById('cidade').value,
        telefoneFixo: document.getElementById('telFixo').value,
        celular: document.getElementById('cel').value,
        email: document.getElementById('emailCli').value,

    }


    inserir(data.nome, data.sobrenome, data.data, data.cpf, data.rua, data.cidade, data.telefoneFixo, data.celular, data.email)




}

window.addEventListener('load', () => {
    lerDados()

    document.getElementById('cadastroCliente').addEventListener('submit', cadastrar)
})