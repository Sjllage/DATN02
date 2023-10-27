
const VaitroService = require('./VaitroService');

const getVaitros = async () => {
    try {
        return await VaitroService.getVaitros();
    } catch (error) {
        console.log(error);
    }
}
module.exports = {getVaitros};