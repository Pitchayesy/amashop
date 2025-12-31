import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-xl font-bold text-primary">฿{product.price}</span>
          <span className="text-sm text-muted-foreground">บาท</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
