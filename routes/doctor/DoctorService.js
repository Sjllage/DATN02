const DoctorModel = require('./DoctorModel');

const getAllDoctors = async (page, size) => {
  try {
    return await DoctorModel.find();
  } catch (error) {
    console.log('Get all Doctor error: ', error);
    throw error;
  }
}

const getAllDoctors_v2 = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await DoctorModel
    .find({}, 'name email sdt mota vaitro')// chi lay 2 truong name va vaitro
    .populate('vaitro', 'name')// lấy thông tin category
    .sort({ name : 1})// sắp xếp theo tê tăng dần
    .skip(0) // bỏ qua bao nhiêu sản phẩm
    .limit(); // giới hạn số lượng sản phẩm
  } catch (error) {
    console.log('Get all Doctor error: ', error);
    throw error;
  }
}

const deleteDoctorById = async (id) => {
  try {
    await DoctorModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete Doctor by id error: ', error);
    return false;
  }
}

// Thêm mới sản phẩm vào database
const addNewDoctor = async (name, email, sdt, password, mota, image, vaitro) => {
  try {
    const newDoctor = {
      name,
      email,
      sdt,
      password,
      mota,
      image,
      vaitro
    }
    const p = new DoctorModel(newDoctor);
    await p.save();
  } catch (error) {
    console.log('Add new Doctor error: ', error);
    return false;
  }
}

//Lấy thông tin một sản phẩm theo id
const getDoctorById = async (id) => {
  try {
    return await DoctorModel.findById(id).populate('vaitro', 'name');

  } catch (error) {
    console.log('Get Doctor by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updateDoctorById = async (id, name, email, sdt, password, mota, vaitro, image) => {
  try {
    const Doctor = await DoctorModel.findById(id);
    if (Doctor) {
      Doctor.name = name ? name : Doctor.name;
      Doctor.email = email ? email : Doctor.email;
      Doctor.sdt = sdt ? sdt : Doctor.sdt;
      Doctor.password = password ? password : Doctor.password;
      Doctor.mota = mota ? mota : Doctor.mota;
      Doctor.image = image ? image : Doctor.image;
      Doctor.vaitro = vaitro ? vaitro : Doctor.vaitro;
      await Doctor.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update Doctor by id error: ', error);
    return false;
  }
}

// Tìm kiếm sản phẩm theo tên
const searchedDoctorByName = async (name) => {
  try{
    return await DoctorModel.find({
      // tên có chứa ... không phân biệt hoa thường
      name: {$regex: name, $options: 'i'},
  });
  }catch(error) {
    console.log('Search Doctor by name error: ', error);
  }
  return null;
}

const login = async (name, password) => {
  try {
      const doctor = await DoctorModel.findOne({name: name});
      if(doctor){
          const result = await DoctorModel.find({password: password});
          if(result) {
              return result ? doctor : false;
          }
      }
  } catch (error) {
      console.log('Login error: ', error);
  }
  return false;
}

const getdoctors = async () => {
  try {
      return DoctorModel.find();
  } catch (error) {
      console.log(error);
  }
}

module.exports = { login, getAllDoctors, deleteDoctorById, addNewDoctor, getDoctorById, updateDoctorById , searchedDoctorByName, getAllDoctors_v2, getdoctors };

