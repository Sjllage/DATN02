
const lichkhamService = require('../lichkham/lichkhamService');

const getAlllichkhams = async (page, size) => {
    return await lichkhamService.getAlllichkhams_v2();
}
const deletelichkhamById = async (id) => {
    try {
        return await lichkhamService.deletelichkhamById(id);
    } catch (error) {
        console.log('Get all lichkham error: ', error);
        throw error;
    }
}

const addNewlichkham = async (ngay, tgkham, doctor) => {
    try {
        return await lichkhamService.addNewlichkham(ngay, tgkham, doctor);
    } catch (error) {
        return false;
    }
}

const getlichkhamById = async(id) => {
    try {
        return await lichkhamService.getlichkhamById(id);
    } catch (error) {
        return null;
    }

}
const updatelichkhamById = async(id, ngay, tgkham, doctor)=> {
    try {
        return await lichkhamService.updatelichkhamById(id, ngay, tgkham, doctor);
    } catch (error) {
        return false;
    }
}
const searchedlichkhamByName = async (name) => { 
    try {
        return await lichkhamService.searchedlichkhamByName(name);
    }catch(error){
        console.log('Search lichkham by name error: ', error);
    }
    return null;
}


module.exports = { getAlllichkhams, deletelichkhamById, addNewlichkham, getlichkhamById, updatelichkhamById, searchedlichkhamByName };