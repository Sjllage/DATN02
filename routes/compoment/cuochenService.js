const cuochenModel = require('../Users/CuocHenForUser');

const getAllcuochens = async (page, size) => {
  try {
    return await cuochenModel.find();
  } catch (error) {
    console.log('Get all cuochen error: ', error);
    throw error;
  }
}

const getAllcuochen = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await cuochenModel
    .find({}, 'idKhoa ngay TimeStart TimeEnd')// chi lay 2 truong name va price
    .populate('idKhoa', 'name')// lấy thông tin category
    .sort({ name : 1})// sắp xếp theo tê tăng dần
    .skip(0) // bỏ qua bao nhiêu sản phẩm
    .limit(); // giới hạn số lượng sản phẩm
  } catch (error) {
    console.log('Get all cuochen error: ', error);
    throw error;
  }
}


// Thêm mới sản phẩm vào database
const addNewcuochen = async (idKhoa, ngay, TimeStart, TimeEnd) => {
  try {
    const newdonthuoc = {
      idKhoa, ngay, TimeStart, TimeEnd
    }
    const p = new lichkhamModel(newdonthuoc);
    await p.save();
  } catch (error) {
    console.log('Add new lichkham error: ', error);
    return false;
  }
}

const deletecuochenById = async (id) => {
  try {
    await cuochenModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete cuochen by id error: ', error);
    return false;
  }
}

//Lấy thông tin một sản phẩm theo id
const getcuochenById = async (id) => {
  try {
    return await cuochenModel.findById(id);
  } catch (error) {
    console.log('Get cuochen by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updatecuochenById = async (id, idKhoa, ngay, TimeStart, TimeEnd) => {
  try {
    const cuochen = await cuochenModel.findById(id);
    if (cuochen) {
      cuochen.idKhoa = idKhoa ? idKhoa : cuochen.idKhoa;
      cuochen.ngay = ngay ? ngay : cuochen.ngay;
      cuochen.TimeStart = TimeStart ? TimeStart : cuochen.TimeStart;
      cuochen.TimeEnd = TimeEnd ? TimeEnd : cuochen.TimeEnd;
      // cuochen.category = category ? category : cuochen.category;
      await cuochen.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update cuochen by id error: ', error);
    return false;
  }
}


module.exports = {addNewcuochen, getAllcuochens, deletecuochenById, getcuochenById, updatecuochenById , getAllcuochen };