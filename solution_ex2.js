const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// Sửa lỗi 1: Dùng .shift() để lấy xe ở ĐẦU hàng đợi (FIFO), thay vì .pop() lấy cuối mảng
const xeVaoSac = hangDoiXeCho.shift();
console.log('Xe vào cổng sạc:', xeVaoSac);

// Thêm xe mới vào cuối hàng đợi
hangDoiXeCho.push('43D-88888');

console.log('Danh sách xe chờ sạc cập nhật:');

// Sửa lỗi 2: Dùng điều kiện i < hangDoiXeCho.length để tránh lỗi tràn mảng và in ra dòng undefined
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log('STT ' + (i + 1) + ': ' + hangDoiXeCho[i]);
}