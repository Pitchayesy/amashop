import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getCategoryById, categories } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || "");
  const products = getProductsByCategory(categoryId || "");

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">ไม่พบหมวดหมู่นี้</h1>
          <Link to="/categories">
            <Button>กลับไปหน้าสินค้าทั้งหมด</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Back Button */}
        <Link to="/categories" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>กลับไปหน้าสินค้าทั้งหมด</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">{category.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{category.name}</h1>
          <p className="text-muted-foreground text-lg">{category.description}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/categories/${cat.id}`}>
              <Button
                variant={cat.id === categoryId ? "default" : "outline"}
                size="sm"
                className={cat.id === categoryId ? "" : "border-primary/30 hover:border-primary"}
              >
                {cat.icon} {cat.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProducts;
