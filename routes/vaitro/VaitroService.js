

const vaitroModel = require('./VaitroModel');
const getVaitros = async () => {
    try {
        return vaitroModel.find();
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getVaitros }


