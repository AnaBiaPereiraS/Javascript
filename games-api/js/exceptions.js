// Função para lidar com erros nas solicitações fetch
export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};
