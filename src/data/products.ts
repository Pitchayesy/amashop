export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "beverages",
    name: "เครื่องดื่ม",
    icon: "🥤",
    description: "น้ำดื่ม น้ำอัดลม กาแฟ ชา และเครื่องดื่มเย็นๆ",
  },
  {
    id: "kitchenware",
    name: "เครื่องครัว",
    icon: "🍳",
    description: "อุปกรณ์ทำครัว หม้อ กระทะ และของใช้ในครัว",
  },
  {
    id: "office",
    name: "เครื่องทำงาน",
    icon: "📎",
    description: "เครื่องเขียน อุปกรณ์สำนักงาน และของใช้ในการทำงาน",
  },
  {
    id: "bathroom",
    name: "เครื่องอาบน้ำ",
    icon: "🧴",
    description: "สบู่ แชมพู ยาสีฟัน และของใช้ส่วนตัว",
  },
  {
    id: "others",
    name: "อื่นๆ",
    icon: "📦",
    description: "สินค้าทั่วไป ของใช้ในบ้าน และอื่นๆ อีกมากมาย",
  },
];

export const products: Product[] = [
  // เครื่องดื่ม
  { id: "bev-1", name: "น้ำดื่มสิงห์", price: 10, category: "beverages", image: "/placeholder.svg" },
  { id: "bev-2", name: "โค้ก กระป๋อง", price: 15, category: "beverages", image: "/placeholder.svg" },
  { id: "bev-3", name: "กาแฟกระป๋อง เบอร์ดี้", price: 18, category: "beverages", image: "/placeholder.svg" },
  { id: "bev-4", name: "ชาเขียวอิชิตัน", price: 20, category: "beverages", image: "/placeholder.svg" },
  { id: "bev-5", name: "นมโอวัลติน", price: 12, category: "beverages", image: "/placeholder.svg" },
  { id: "bev-6", name: "น้ำส้มเต็มเต็ม", price: 15, category: "beverages", image: "/placeholder.svg" },
  
  // เครื่องครัว
  { id: "kit-1", name: "ตะหลิวสแตนเลส", price: 45, category: "kitchenware", image: "/placeholder.svg" },
  { id: "kit-2", name: "ทัพพีพลาสติก", price: 25, category: "kitchenware", image: "/placeholder.svg" },
  { id: "kit-3", name: "ถ้วยเมลามีน", price: 35, category: "kitchenware", image: "/placeholder.svg" },
  { id: "kit-4", name: "จานสแตนเลส", price: 50, category: "kitchenware", image: "/placeholder.svg" },
  { id: "kit-5", name: "ช้อนส้อมชุด", price: 30, category: "kitchenware", image: "/placeholder.svg" },
  { id: "kit-6", name: "ผ้าเช็ดจาน", price: 20, category: "kitchenware", image: "/placeholder.svg" },
  
  // เครื่องทำงาน
  { id: "off-1", name: "ปากกาลูกลื่น", price: 8, category: "office", image: "/placeholder.svg" },
  { id: "off-2", name: "ดินสอ 2B", price: 5, category: "office", image: "/placeholder.svg" },
  { id: "off-3", name: "ยางลบ", price: 10, category: "office", image: "/placeholder.svg" },
  { id: "off-4", name: "สมุดบันทึก A5", price: 35, category: "office", image: "/placeholder.svg" },
  { id: "off-5", name: "กรรไกร", price: 25, category: "office", image: "/placeholder.svg" },
  { id: "off-6", name: "เทปใส", price: 18, category: "office", image: "/placeholder.svg" },
  
  // เครื่องอาบน้ำ
  { id: "bath-1", name: "สบู่ลักส์", price: 25, category: "bathroom", image: "/placeholder.svg" },
  { id: "bath-2", name: "แชมพูซันซิล", price: 45, category: "bathroom", image: "/placeholder.svg" },
  { id: "bath-3", name: "ยาสีฟันคอลเกต", price: 35, category: "bathroom", image: "/placeholder.svg" },
  { id: "bath-4", name: "แปรงสีฟัน", price: 20, category: "bathroom", image: "/placeholder.svg" },
  { id: "bath-5", name: "ครีมอาบน้ำ", price: 55, category: "bathroom", image: "/placeholder.svg" },
  { id: "bath-6", name: "โลชั่นทาตัว", price: 65, category: "bathroom", image: "/placeholder.svg" },
  
  // อื่นๆ
  { id: "oth-1", name: "ถุงขยะ", price: 25, category: "others", image: "/placeholder.svg" },
  { id: "oth-2", name: "ไม้แขวนเสื้อ", price: 15, category: "others", image: "/placeholder.svg" },
  { id: "oth-3", name: "ตะกร้าพลาสติก", price: 40, category: "others", image: "/placeholder.svg" },
  { id: "oth-4", name: "ไฟฉาย LED", price: 75, category: "others", image: "/placeholder.svg" },
  { id: "oth-5", name: "ถ่านไฟฉาย AA", price: 30, category: "others", image: "/placeholder.svg" },
  { id: "oth-6", name: "เชือกฟาง", price: 20, category: "others", image: "/placeholder.svg" },
];

export const featuredProducts = products.filter((p) => 
  ["bev-1", "kit-1", "bath-1", "off-4", "bev-4", "kit-4"].includes(p.id)
);

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((p) => p.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find((c) => c.id === categoryId);
};
