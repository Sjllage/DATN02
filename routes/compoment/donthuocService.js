const donthuocModel = require('../thuoc/themDonThuoc');

const getAlldonthuocs = async (page, size) => {
  try {
    return await donthuocModel.find();
  } catch (error) {
    console.log('Get all donthuoc error: ', error);
    throw error;
  }
}

const getAlldonthuocs_v2 = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await donthuocModel
    .find({}, 'ten_don_thuoc so_luong_thuoc chi_tiet ten_thuoc tong_tien id_thuoc')// chi lay 2 truong name va price
    .populate('id_thuoc', 'name')// lấy thông tin category
    .sort({ name : 1})// sắp xếp theo tê tăng dần
    .skip(0) // bỏ qua bao nhiêu sản phẩm
    .limit(); // giới hạn số lượng sản phẩm
  } catch (error) {
    console.log('Get all thuoc error: ', error);
    throw error;
  }
}

const deletedonthuocById = async (id) => {
  try {
    await donthuocModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete donthuoc by id error: ', error);
    return false;
  }
}


//Lấy thông tin một sản phẩm theo id
const getdonthuocById = async (id) => {
  try {
    return await donthuocModel.findById(id);
  } catch (error) {
    console.log('Get donthuoc by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updatedonthuocById = async (id, ten_don_thuoc, so_luong_thuoc, chi_tiet, ten_thuoc, tong_tien, id_thuoc) => {
  try {
    const donthuoc = await donthuocModel.findById(id);
    if (donthuoc) {
      donthuoc.ten_don_thuoc = ten_don_thuoc ? ten_don_thuoc : donthuoc.ten_don_thuoc;
      donthuoc.so_luong_thuoc = so_luong_thuoc ? so_luong_thuoc : donthuoc.so_luong_thuoc;
      donthuoc.chi_tiet = chi_tiet ? chi_tiet : donthuoc.chi_tiet;
      donthuoc.ten_thuoc = ten_thuoc ? ten_thuoc : donthuoc.ten_thuoc;
      donthuoc.tong_tien = tong_tien ? tong_tien : donthuoc.tong_tien;
      donthuoc.id_thuoc = id_thuoc ? id_thuoc : donthuoc.id_thuoc;
      await donthuoc.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update donthuoc by id error: ', error);
    return false;
  }
}

// Tìm kiếm sản phẩm theo tên
const searcheddonthuocByName = async (ten_don_thuoc) => {
  try{
    return await thuocModel.find({
      // tên có chứa ... không phân biệt hoa thường
      name: {$regex: ten_don_thuoc, $options: 'i'},
  });
  }catch(error) {
    console.log('Search thuoc by name error: ', error);
  }
  return null;
}

module.exports = { getAlldonthuocs, getAlldonthuocs_v2, deletedonthuocById, getdonthuocById, updatedonthuocById , searcheddonthuocByName };