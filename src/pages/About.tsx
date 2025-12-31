import Layout from "@/components/Layout";
import { Heart, Users, Clock, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "บริการด้วยใจ",
      description: "เราบริการลูกค้าทุกคนเหมือนคนในครอบครัว",
    },
    {
      icon: Users,
      title: "เป็นกันเอง",
      description: "บรรยากาศอบอุ่นแบบร้านโชห่วยข้างบ้าน",
    },
    {
      icon: Clock,
      title: "เปิดบริการทุกวัน",
      description: "พร้อมให้บริการตั้งแต่เช้าจรดค่ำ",
    },
    {
      icon: Sparkles,
      title: "ราคาเป็นมิตร",
      description: "สินค้าคุณภาพดีในราคาที่จับต้องได้",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">เกี่ยวกับร้านอาม่า</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ร้านโชห่วยเล็กๆ ที่เปิดให้บริการมาอย่างยาวนาน ด้วยความตั้งใจที่จะเป็นร้านข้างบ้านที่ทุกคนไว้วางใจ
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">👵</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">เรื่องราวของเรา</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">ร้านอาม่า</span> เริ่มต้นจากความตั้งใจอันเรียบง่ายของครอบครัวเรา 
                ที่อยากจะเปิดร้านโชห่วยเล็กๆ เพื่อรับใช้คนในละแวกบ้าน ให้ได้มีที่ซื้อของใช้จำเป็นในชีวิตประจำวัน 
                โดยไม่ต้องเดินทางไปไกล
              </p>
              
              <p>
                ชื่อ "อาม่า" มาจากคุณยายผู้เป็นแรงบันดาลใจ ท่านเป็นคนใจดี เป็นกันเอง และพร้อมช่วยเหลือทุกคนเสมอ 
                เราจึงอยากให้ร้านของเรามีบรรยากาศอบอุ่นเหมือนได้แวะบ้านคุณยาย
              </p>
              
              <p>
                ปัจจุบัน ร้านอาม่าเปิดให้บริการทุกวัน ตั้งแต่เช้าตรู่จนถึงค่ำคืน พร้อมต้อนรับทุกคนด้วยรอยยิ้ม 
                และบริการด้วยใจ เหมือนที่คุณยายเคยทำมาตลอด
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">สิ่งที่เราให้ความสำคัญ</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-3">แวะมาเยี่ยมเราได้นะ!</h2>
          <p className="text-muted-foreground mb-6">เรายินดีต้อนรับทุกคนเหมือนคนในครอบครัว</p>
          <div className="text-3xl">🏪❤️</div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
