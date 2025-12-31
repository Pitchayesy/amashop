import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { categories, featuredProducts } from "@/data/products";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-background py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">ยินดีต้อนรับสู่ร้านอาม่า</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-shadow-vintage animate-fade-in" style={{ animationDelay: "0.1s" }}>
              ร้าน<span className="text-primary">อาม่า</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              ร้านโชห่วยข้างบ้านที่พร้อมบริการทุกวัน<br className="hidden sm:block" />
              ด้วยความเป็นกันเองและราคาเป็นมิตร
            </p>
            
            <Link to="/categories">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: "0.3s" }}>
                ดูสินค้าทั้งหมด
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">หมวดหมู่สินค้า</h2>
            <p className="text-muted-foreground">เลือกดูสินค้าตามหมวดหมู่ที่ต้องการ</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">สินค้าแนะนำ</h2>
              <p className="text-muted-foreground">สินค้ายอดนิยมของร้าน</p>
            </div>
            <Link to="/categories" className="hidden sm:block">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                ดูทั้งหมด
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link to="/categories">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                ดูสินค้าทั้งหมด
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">มาแวะร้านอาม่ากันนะ!</h2>
            <p className="mb-6 opacity-90">เปิดบริการทุกวัน 06:00 - 22:00 น.</p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-lg">
                ดูที่อยู่ร้าน
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
