// api-fetch.js

// === INTEROPERABILIDADE COM APIs EXTERNAS ===
// Vamos usar o fetch para consumir uma API externa.

console.log('=== INTEROPERABILIDADE COM APIs EXTERNAS ===');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Função para buscar dados da API
async function fetchPosts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const posts = await response.json();
        console.log('Posts recebidos:', posts.slice(0, 3)); // Mostra apenas os 3 primeiros posts
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

fetchPosts();
