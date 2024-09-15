const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT ;

app.listen(PORT, (error) => {
    if (error) {
        console.log("Erro!");
    return;
    }
    console.log(`Servidor rodando na porta ${PORT}!`)
});