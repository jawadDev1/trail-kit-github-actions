export interface Item {
  _id: string;

  name: string;
  description: string;
  category: "Footwear" | "Apparel" | "Accessories" | "Camping";
  price: number;
  imageUrl: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type Category = "Footwear" | "Apparel" | "Accessories" | "Camping";
