// definindo um array de alunos
let alunos = [
    { 
        nome: "Aninhha", 
        email: "ninha@gmail.com", 
        telefone: 21935484773, 
        profissao: "frontend" 
    },
    { nome: "Jaque", email: "jaque@gmail.com", telefone: 21974450073, profissao: "backend" },
    { nome: "Julinha", email: "juju@msn.com", telefone: 21979984073, profissao: "fullstack" },
    { nome: "Lucao", email: "lucao@hotmail.com", telefone: 21954454075, profissao: "mobile" },
    { nome: "Inacio", email: "inacio@yahoo.com", telefone: 21977458473, profissao: "mobile" },
    { nome: "Maurao", email: "maurao@hotmail.com", telefone: 21944488576, profissao: "frontend" },
    { nome: "Ramonzao", email: "monzao@gmail.com", telefone: 2173484973, profissao: "frontend" },
    { nome: "Davizao", email: "davi@msn.com", telefone: 21975584073, profissao: "frontend" },
  
];

// carregar os dados do array na tabela
window.onload = (event) => {
    let tbody = document.querySelector("#myTable");
alunos.forEach((aluno, index) => {
    let tr = document.createElement("tr");

    let tdCod = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdTelefone = document.createElement("td");
    let tdProfissao = document.createElement("td");
    let tdBotao = document.createElement("td");

    tdCod.textContent = index;
    tdNome.textContent = aluno.nome;
    tdEmail.textContent = aluno.email;
    tdTelefone.textContent = aluno.telefone;
    tdProfissao.textContent = aluno.profissao;
    tdBotao.innerHTML = `<button class="btn-remover" onclick="remover(this)" >Remover</button>`

    tr.appendChild(tdCod);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdProfissao);
    tr.appendChild(tdBotao);

    tbody.appendChild(tr);


});
}
function remover(id){
    let row = id.parentNode.parentNode.id;
    row = document.getElementById (row);
    row.parentNode.removerChild(row);

}
