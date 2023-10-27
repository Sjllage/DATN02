
const DoctorService = require('./DoctorService');

const getAllDoctors = async (page, size) => {
    return await DoctorService.getAllDoctors_v2();
}
const deleteDoctorById = async (id) => {
    try {
        return await DoctorService.deleteDoctorById(id);
    } catch (error) {
        console.log('Get all Doctor error: ', error);
        throw error;
    }
}

const addNewDoctor = async (name, email, sdt, password, mota, image, vaitro) => {
    try {
        return await DoctorService.addNewDoctor(name, email, sdt, password, mota, image, vaitro);
    } catch (error) {
        return false;
    }
}

const getDoctorById = async(id) => {
    try {
        return await DoctorService.getDoctorById(id);
    } catch (error) {
        return null;
    }

}
const updateDoctorById = async(id, name, email, sdt, password, mota, image, vaitro)=> {
    try {
        return await DoctorService.updateDoctorById(id, name, email, sdt, password, mota, image, vaitro);
    } catch (error) {
        return false;
    }
}
const searchedDoctorByName = async (name) => { 
    try {
        return await DoctorService.searchedDoctorByName(name);
    }catch(error){
        console.log('Search Doctor by name error: ', error);
    }
    return null;
}


module.exports = { getAllDoctors, deleteDoctorById, addNewDoctor, getDoctorById, updateDoctorById, searchedDoctorByName };