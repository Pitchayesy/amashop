import { Link } from "react-router-dom";
import { Store, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Store className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-light">ร้านอาม่า</h3>
                <p className="text-sm opacity-80">Ama Shop</p>
              </div>
            </div>
            <p className="text-sm opacity-80 text-center md:text-left">
              ร้านโชห่วยข้างบ้านที่พร้อมบริการทุกวัน<br />
              ด้วยความเป็นกันเองและราคาเป็นมิตร
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gold-light mb-4">เมนูหลัก</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-gold-light transition-colors">หน้าแรก</Link>
              <Link to="/categories" className="hover:text-gold-light transition-colors">สินค้าทั้งหมด</Link>
              <Link to="/about" className="hover:text-gold-light transition-colors">เกี่ยวกับเรา</Link>
              <Link to="/contact" className="hover:text-gold-light transition-colors">ติดต่อเรา</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gold-light mb-4">ติดต่อเรา</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-light" />
                <span>08X-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-light" />
                <span>123 ซอยสุขใจ แขวงบางนา</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-light" />
                <span>เปิดทุกวัน 06:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© 2024 ร้านอาม่า - Ama Shop. สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
