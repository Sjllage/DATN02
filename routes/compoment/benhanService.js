const benhanModel = require('../Users/BenhAn');

const getAllbenhans = async (page, size) => {
  try {
    return await benhanModel.find();
  } catch (error) {
    console.log('Get all thuoc error: ', error);
    throw error;
  }
}

const getAllbenhan = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await benhanModel
    .find({}, 'ten_benh_nhan gioi_tinh phongKham ngay_nhap_vien ngay_xuat_vien benh_an thuoc_da_ke_don trang_thai ngay_tao_benh_an')
    .sort({ name : 1})
    .skip(0)
    .limit();
  } catch (error) {
    console.log('Get all thuoc error: ', error);
    throw error;
  }
}

const deletebenhanById = async (id) => {
  try {
    await benhanModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete thuoc by id error: ', error);
    return false;
  }
}

//Lấy thông tin một sản phẩm theo id
const getbenhanById = async (id) => {
  try {
    return await benhanModel.findById(id);
  } catch (error) {
    console.log('Get thuoc by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updatebenhanById = async (id,ten_benh_nhan,gioi_tinh,phongKham,ngay_nhap_vien,ngay_xuat_vien,benh_an,thuoc_da_ke_don,trang_thai,ngay_tao_benh_an) => {
  try {
    const benhan = await benhanModel.findById(id);
    if (benhan) {
        benhan.ten_benh_nhan = ten_benh_nhan ? ten_benh_nhan : benhan.ten_benh_nhan;
        benhan.gioi_tinh = gioi_tinh ? gioi_tinh : benhan.gioi_tinh;
        benhan.phongKham = phongKham ? phongKham : benhan.phongKham;
      benhan.ngay_nhap_vien = ngay_nhap_vien ? ngay_nhap_vien : benhan.ngay_nhap_vien;
      benhan.ngay_xuat_vien = ngay_xuat_vien ? ngay_xuat_vien : benhan.ngay_xuat_vien;
      benhan.benh_an = benh_an ? benh_an : benhan.benh_an;
      benhan.thuoc_da_ke_don = thuoc_da_ke_don ? thuoc_da_ke_don : benhan.thuoc_da_ke_don;
      benhan.trang_thai = trang_thai ? trang_thai : benhan.trang_thai;
      benhan.ngay_tao_benh_an = ngay_tao_benh_an ? ngay_tao_benh_an : benhan.ngay_tao_benh_an;
      await benhan.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update thuoc by id error: ', error);
    return false;
  }
}

// Tìm kiếm sản phẩm theo tên
const searchedbenhanByName = async (ten) => {
  try{
    return await benhanModel.find({
      // tên có chứa ... không phân biệt hoa thường
      name: {$regex: ten, $options: 'i'},
  });
  }catch(error) {
    console.log('Search thuoc by name error: ', error);
  }
  return null;
}

module.exports = { getAllbenhans, deletebenhanById, getbenhanById, updatebenhanById , searchedbenhanByName, getAllbenhan };