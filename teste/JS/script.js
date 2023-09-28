const apiUrl = 'https://api.github.com/users/WendellpAlmeida/repos';
const ctx = document.getElementById('meuGrafico').getContext('2d');

async function fetchAndRenderGraph() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

       
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}


window.addEventListener('load', fetchAndRenderGraph);

const myChart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ['Jan','Fev', 'Mar','Abr','Mai','Jun',], 
        datasets: [{
            label: 'Repositórios Criados', 
            data: [0,11,15, 20, 10,40,], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        }],
    },
    options: {
        
    },
});
