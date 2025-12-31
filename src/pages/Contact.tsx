import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "โทรศัพท์",
      value: "08X-XXX-XXXX",
      description: "โทรหาเราได้ทุกวัน",
      action: "โทรเลย",
      href: "tel:08XXXXXXXX",
    },
    {
      icon: MapPin,
      title: "ที่อยู่ร้าน",
      value: "123 ซอยสุขใจ",
      description: "แขวงบางนา เขตบางนา กรุงเทพฯ 10260",
      action: "ดูแผนที่",
      href: "#map",
    },
    {
      icon: Clock,
      title: "เวลาเปิด-ปิด",
      value: "06:00 - 22:00",
      description: "เปิดบริการทุกวัน ไม่มีวันหยุด",
      action: null,
      href: null,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ติดต่อเรา</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            มีคำถามหรืออยากสอบถามสินค้า? ติดต่อเราได้เลย เรายินดีให้บริการครับ
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-medium text-muted-foreground mb-1">{info.title}</h3>
                <p className="text-xl font-bold text-foreground mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                {info.action && info.href && (
                  <a href={info.href}>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      {info.action}
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div id="map" className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">แผนที่ร้าน</h2>
          <div className="bg-muted rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">แผนที่ Google Maps</p>
              <p className="text-sm text-muted-foreground">(จะแสดงเมื่อเพิ่มพิกัดจริง)</p>
            </div>
          </div>
        </div>

        {/* LINE Contact */}
        <div className="max-w-xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-[#00B900] flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">ติดต่อผ่าน LINE</h2>
          <p className="text-muted-foreground mb-4">แอดไลน์เพื่อสอบถามสินค้าหรือสั่งซื้อได้ง่ายๆ</p>
          <Button className="bg-[#00B900] hover:bg-[#00A000] text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            แอดไลน์ @amashop
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
