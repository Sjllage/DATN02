const lichkhamModel = require('./lichkhamModel');
const getAlllichkhams = async (page, size) => {
  try {
    return await lichkhamModel.find();
  } catch (error) {
    console.log('Get all lichkham error: ', error);
    throw error;
  }
}

const getAlllichkhams_v2 = async (page, size) => {
  let skip = (page -1) * size;
  let limit = size;
  try {
    return await lichkhamModel
    .find({}, 'ngay tgkham doctor')// chi lay 2 truong name va price
    .populate('doctor', 'name')// lấy thông tin category
    .sort({ name : 1})// sắp xếp theo tê tăng dần
    .skip(0) // bỏ qua bao nhiêu sản phẩm
    .limit(); // giới hạn số lượng sản phẩm
  } catch (error) {
    console.log('Get all lichkham error: ', error);
    throw error;
  }
}

const deletelichkhamById = async (id) => {
  try {
    await lichkhamModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete lichkham by id error: ', error);
    return false;
  }
}

// Thêm mới sản phẩm vào database
const addNewlichkham = async ( ngay, tgkham, doctor) => {
  try {
    const lich = await lichkhamModel.find({ngay: ngay});
    if(lich) return false;
    const newlichkham = {
      ngay,
      tgkham,
      doctor
    }
    const p = new lichkhamModel(newlichkham);
    await p.save();
    return true;
  } catch (error) {
    console.log('Add new lichkham error: ', error);
    return false;
  }
}

//Lấy thông tin một sản phẩm theo id
const getlichkhamById = async (id) => {
  try {
    return await lichkhamModel.findById(id);
  } catch (error) {
    console.log('Get lichkham by id error: ', error);
    return null;
  }
}

//cập nhật sản phẩm theo Id
const updatelichkhamById = async (id, name, price, quantity, image) => {
  try {
    const lichkham = await lichkhamModel.findById(id);
    if (lichkham) {
      lichkham.name = name ? name : lichkham.name;
      lichkham.price = price ? price : lichkham.price;
      lichkham.quantity = quantity ? quantity : lichkham.quantity;
      lichkham.image = image ? image : lichkham.image;
      // lichkham.category = category ? category : lichkham.category;
      await lichkham.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log('Update lichkham by id error: ', error);
    return false;
  }
}

// Tìm kiếm sản phẩm theo tên
const searchedlichkhamByName = async (name) => {
  try{
    return await lichkhamModel.find({
      // tên có chứa ... không phân biệt hoa thường
      name: {$regex: name, $options: 'i'},
  });
  }catch(error) {
    console.log('Search lichkham by name error: ', error);
  }
  return null;
}

module.exports = { getAlllichkhams, deletelichkhamById, addNewlichkham, getlichkhamById, updatelichkhamById , searchedlichkhamByName, getAlllichkhams_v2 };