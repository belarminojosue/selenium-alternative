const { default: axios } = require("axios");
async function getUsers() {
    try {
        const { data, status } = await axios.get('https://github.com/Beljot',);
        console.log('response status is: ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

const intervalId = setInterval(getUsers, 500);
setTimeout(() => {
    //clearInterval(intervalId); // Isso para o setInterval
    console.log("A execução periódica foi interrompida.");
}, 300000000); // Por exemplo, interromper após 30 segundos