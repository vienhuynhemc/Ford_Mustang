import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id = 0;
  ten = "";
  diachi = "";
  tien = 0;
  chieudai = "";
  chieurong = "";
  phongngu = "";
  phongtam = "";
  thongtinchitiet = "";

  arrayRoot = [
    {
      "id": 1,
      "ten": "Phòng trọ sinh viên",
      "dienTich": "20m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "1",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "7",
      "chieuRong": "5",
      "phongNgu": "1",
      "phongTam": "1",
      "loGioi": "2",
      "thongTinChiTiet": "Chính chủ cho thuê nhà xưởng tại số 751 Nguyễn Khoái, phù hợp nhiều loại hình kinh doanh, giá ưu đãi nhất. Nhà chính chủ mặt tiền 16,5m hướng Tây. Cách hồ Hoàn Kiếm 6km, có 2 nguồn điện sinh hoạt và 3 pha, sử dụng nước sạch và nước giếng khoan. Diên tích mặt sàn khoảng 800m2, bao gồm sân trước 120m2, tiếp đến nhà 2 tầng 150m2, có 6 phòng. Kho chính rộng 400m2, sau cùng là sân có mái tôn khoảng 100m2. Phù hợp làm nhà xưởng, garo oto, kho bãi. Hợp đồng cho thuê lâu dài, giá thuê thỏa thuận",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 2,
      "ten": "Phòng trọ mới xây, khang trang",
      "dienTich": "20m2",
      "gia": 2100000,
      "tinh": "TPHCM",
      "quan": "2",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "15",
      "chieuRong": "5",
      "phongNgu": "4",
      "phongTam": "5",
      "loGioi": "4",
      "thongTinChiTiet": "Cho thuê nhà mặt tiền đường Đặng Văn Ngữ, Phường 11, Phú Nhuận. Thông tin nhà cho thuê: Diện tích: 5x17m Kết cấu: Hầm, trệt, lầu, sân thượng. Có sân rộng Nhà nằm ngay vị trí đắc địa, trục chính trung tâm quận Phú Nhuận, giao thông thuận tiện di chuyển các quận 1,3, Tân Bình... Các sân bay 15 phút đi xe. Thuận tiện làm công ty, nha khoa, phòng công chứng, lớp học, thẩm mỹ viện... Giá cho thuê: 35 triệu/tháng.",
      "tienIch": "1,2,4"
    },
    {
      "id": 3,
      "ten": "Cho thuê nhà nguyên căn ",
      "dienTich": "15m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "3",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/3/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "* Diện tích 8x20m 1 trệt, 3 lầu. Giá thuê: 50 triệu/tháng. Đường trước nhà lớn khu kinh doanh sâm đông đúc nhộn nhịp vị trí đẹp để kinh doanh địa chỉ dễ tìm, thích hợp thuê làm văn phòng công ty, trường học, trung tâm Anh ngữ, spa... Ưu tiên khách hàng thiện chí thuê nhanh & lâu dài.",
      "tienIch": "1,3,4"
    },
    {
      "id": 4,
      "ten": "Phòng trọ giá tốt",
      "dienTich": "20m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "4",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "Khu vực sầm uất, tập trung nhiều văn phòng, gần siêu thị, bệnh viện, trường học, ngân hàng, vị trí thích hợp để ở, làm văn phòng công ty, trung tâm đào tạo, mầm non, spa, thẩm mỹ, tiện kinh doanh mọi ngành nghề..",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 5,
      "ten": "Phòng trọ giá rẻ",
      "dienTich": "30m2",
      "gia": 3000000,
      "tinh": "TPHCM",
      "quan": "9",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Nằm ngay trung tâm quận Tân Bình (xem hình thật). Nhà 2 mặt tiền hẻm to nhà ra đường LÝ THƯỜNG KIỆT 100m. Nằm cách Trường Đại Học BÁCH KHOA 700m, cách chợ Ông Địa 100m, nằm sau lưng trường Nguyễn Thái Bình, trung tâm thể dục thể thao Tân Bình sát bên nhà.",
      "tienIch": "1,2,3"
    },
    {
      "id": 6,
      "ten": "Cho thuê phòng trọ giá rẻ",
      "dienTich": "18m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng cho thuê ngay ngã tư Bảy Hiền mới xây giá chỉ từ 4triệu. Tòa nhà mới xây bao gồm camera an ninh, cửa vân tay, thang máy, k chung chủ, giờ giấc tự do. Phòng rộng 25 - 30m2 có giường, nệm, tủ, ban công, kệ bếp.",
      "tienIch": "1,2,3"
    },
    {
      "id": 7,
      "ten": "Phòng trọ sinh viên quận Thủ Đức",
      "dienTich": "12m2",
      "gia": 900000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "12/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Cho thuê phòng trọ có tổng diện tích 20 m2, vị trí đặt tọa lạc tại Quận Tân Bình, Hồ Chí Minh. Thuê ngay với giá thị trường chỉ 4 triệu/tháng, thuận mua vừa bán.",
      "tienIch": "1,2,3"
    },
    {
      "id": 8,
      "ten": "Phòng trọ sinh viên, an ninh, gần trường Nông Lâm",
      "dienTich": "30m2",
      "gia": 3500000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, thoáng mát, sạch sẽ, không chung chủ. Mỗi phòng đều có ban công, cửa sổ, nhà tắm + nhà vệ sinh riêng. Chỗ để xe rộng rãi, có bảo vệ 24/24",
      "tienIch": "1,2,3"
    },
    {
      "id": 9,
      "ten": "Phòng trọ sinh viên trong làng đại học",
      "dienTich": "21m2",
      "gia": 2200000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Gần chợ, tiện ích siêu thị, gym, trường học, công viên, ... Phòng có gác có thể ở tối đa 4 người. Thích hợp sinh viên ở ghép, gia đình nhỏ, nhân viên văn phòng... Nội thất cơ bản: máy lạnh, tắm nóng lạnh, bếp từ, kệ dép, quạt, bàn ghế ăn...Và set up full nội thất",
      "tienIch": "1,2,3"
    },
    {
      "id": 10,
      "ten": "Cho thuê phòng trọ gần nhà văn hóa sinh viên ",
      "dienTich": "25m2",
      "gia": 2700000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "07/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, khang trang, sạch đẹp, có gác. Tiện nghi đầy đủ, tiêu chuẩn (free wifi, nước nóng). Hệ thống an ninh tốt ( camera 24/24, cửa khoá từ ). Giờ giấc tự do, chủ nhà thân thiện cởi mở.",
      "tienIch": "1,2,3"
    }
  ];

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    for (let i = 0; i < this.arrayRoot.length; i++) {
      if (this.arrayRoot[i].id == this.id) {
        this.ten = this.arrayRoot[i].ten;
        this.diachi = this.arrayRoot[i].quan + ' ' + this.arrayRoot[i].phuong + " " + this.arrayRoot[i].tinh;
        this.tien = this.arrayRoot[i].gia;
        this.chieurong = this.arrayRoot[i].chieuRong;
        this.chieudai = this.arrayRoot[i].chieuDai;
        this.thongtinchitiet = this.arrayRoot[i].thongTinChiTiet;
        this.phongngu = this.arrayRoot[i].phongNgu;
        this.phongtam = this.arrayRoot[i].phongTam;
        break;
      }
    }
  }

}
