import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">สินค้าทั้งหมด</h1>
          <p className="text-muted-foreground text-lg">เลือกหมวดหมู่ที่ต้องการ</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
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
    </Layout>
  );
};

export default Categories;
