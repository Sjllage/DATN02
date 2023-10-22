
const thuocService = require('../thuoc/thuocService');

const getAllthuocs = async (page, size) => {
    return await thuocService.getAllthuocs_v2();
}
const deletethuocById = async (id) => {
    try {
        return await thuocService.deletethuocById(id);
    } catch (error) {
        console.log('Get all thuoc error: ', error);
        throw error;
    }
}

const addNewthuoc = async (name, price, quantity, image) => {
    try {
        return await thuocService.addNewthuoc(name, price, quantity, image);
    } catch (error) {
        return false;
    }
}

const getthuocById = async(id) => {
    try {
        return await thuocService.getthuocById(id);
    } catch (error) {
        return null;
    }

}
const updatethuocById = async(id, name, price, quantity, image)=> {
    try {
        return await thuocService.updatethuocById(id, name, price, quantity, image);
    } catch (error) {
        return false;
    }
}
const searchedthuocByName = async (name) => { 
    try {
        return await thuocService.searchedthuocByName(name);
    }catch(error){
        console.log('Search thuoc by name error: ', error);
    }
    return null;
}


module.exports = { getAllthuocs, deletethuocById, addNewthuoc, getthuocById, updatethuocById, searchedthuocByName };