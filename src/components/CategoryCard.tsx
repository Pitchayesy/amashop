import { Link } from "react-router-dom";
import { Category } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/50 bg-gradient-to-br from-card to-accent/30">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
