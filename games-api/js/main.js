document.addEventListener('DOMContentLoaded', () => {
    // pegando a div com id="data-container"
    const dataContainer =
        document.getElementById('data-container');
    // Função para lidar com erros nas solicitações fetch
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response);
        }
        return response;
    };
    // Função para buscar e exibir dados da API
    const fetchData = async () => {
        try {
            // Fazendo uma solicitação GET para obter produtos da AP
            const response =
                await fetch('http://localhost:3000/jogos');
            //lidando com oerros na resposta
            handleErrors(response);

            //converter os dados para json
            const data = await response.json();
            console.log(data);
            
            //exibir os dados na pagina html
            data.forEach(jogo => {
                const tagDiv = document.createElement('div');
                console.log(tagDiv)
                tagDiv.innerHTML = `<strong>${jogo.nome}</strong><p>${jogo.preco}</p>`;
                dataContainer.appendChild(tagDiv)
            });

        } catch (error) {
            console.log('Error >>>', error);
        }
    };

    // Chamando a função para buscar e exibir dados ao carregar a página
    fetchData();
});

const createGame= ()=>{
const jogoTeste =   {
    "id": 1,
    "nome": "The legend of Zelda",
    "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    "preco": 300
  };
  fetch ('http://localhost:3000/jogos', {
      method:'POST',
      headers: {
          'Content-Type': 'aplication/json'
      },
      body: JSON.stringify (jogoTeste)
    })
    .then(response => response.json())
    .then(data => console.log('sucesso: ', data))
    .catch((error) => console.log('Erro: ', error));

};