const puppeteer = require('puppeteer');

async function fetchPageResources() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto('https://github.com/Beljot');
        await page.waitForSelector('body');
        const imageUrl = 'https://profile-counter.glitch.me/{beljot}/count.svg';
        const imageResponse = await page.goto(imageUrl);
        if (imageResponse.ok()) {
            console.log(`Solicitação para a imagem ${imageUrl} concluída com sucesso.`);
        } else {
            console.error(`Erro ao solicitar a imagem ${imageUrl}: ${imageResponse.status()}`);
        }
    } catch (error) {
        console.error("Erro ao buscar recursos da página:", error);
    } finally {
        await browser.close();
    }
}

const intervalId = setInterval(fetchPageResources, 0);
setTimeout(() => {
    //clearInterval(intervalId); // Isso para o setInterval
    console.log("A execução periódica foi interrompida.");
}, 300000000); // Por exemplo, interromper após 30 segundos