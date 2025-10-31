export async function buscarCep(cep){
    const soDigitos = String(cep).replace(/\D/g, '');
    if (soDigitos.length !== 8) {
        throw new Error('CEP inválido: use 8 dígitos.');
    }

    const endpoint = `https://viacep.com.br/ws/${soDigitos}/json`;

    try{
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}