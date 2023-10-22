const thuocModel = require('./thuocModel');
const getAllthuocs = async (page, size) => {
  try {
    return await thuocModel.find();
  } catch (error) {
    console.log('Get all thuoc error: ', error);
    throw error;
  }
}

const getAllthuocs_v2 = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await thuocModel
    .find({}, 'name price quantity')// chi lay 2 truong name va price
    //.populate('category', 'name')// lấy thông tin category
    .sort({ name : 1})// sắp xếp theo tê tăng dần
    .skip(0) // bỏ qua bao nhiêu sản phẩm
    .limit(); // giới hạn số lượng sản phẩm
  } catch (error) {
    console.log('Get all thuoc error: ', error);
    throw error;
  }
}

const deletethuocById = async (id) => {
  try {
    await thuocModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete thuoc by id error: ', error);
    return false;
  }
}

// Thêm mới sản phẩm vào database
const addNewthuoc = async (name, price, quantity, image) => {
  try {
    const newthuoc = {
      name,
      price,
      quantity,
      image
    }
    const p = new thuocModel(newthuoc);
    await p.save();

  } catch (error) {
    console.log('Add new thuoc error: ', error);
    return false;
  }
}

//Lấy thông tin một sản phẩm theo id
const getthuocById = async (id) => {
  try {
    return await thuocModel.findById(id);
  } catch (error) {
    console.log('Get thuoc by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updatethuocById = async (id, name, price, quantity, image) => {
  try {
    const thuoc = await thuocModel.findById(id);
    if (thuoc) {
      thuoc.name = name ? name : thuoc.name;
      thuoc.price = price ? price : thuoc.price;
      thuoc.quantity = quantity ? quantity : thuoc.quantity;
      thuoc.image = image ? image : thuoc.image;
      // thuoc.category = category ? category : thuoc.category;
      await thuoc.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update thuoc by id error: ', error);
    return false;
  }
}

// Tìm kiếm sản phẩm theo tên
const searchedthuocByName = async (name) => {
  try{
    return await thuocModel.find({
      // tên có chứa ... không phân biệt hoa thường
      name: {$regex: name, $options: 'i'},
  });
  }catch(error) {
    console.log('Search thuoc by name error: ', error);
  }
  return null;
}

module.exports = { getAllthuocs, deletethuocById, addNewthuoc, getthuocById, updatethuocById , searchedthuocByName, getAllthuocs_v2 };