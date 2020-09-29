import { StandardEntity } from "./base/sys$StandardEntity";
import { FileDescriptor } from "./base/sys$FileDescriptor";
export class Product extends StandardEntity {
  static NAME = "cuba7_Product";
  name?: string | null;
  price?: any | null;
  image?: FileDescriptor | null;
}
export type ProductViewName = "_base" | "_local" | "_minimal" | "product-view";
export type ProductView<V extends ProductViewName> = V extends "_base"
  ? Pick<Product, "id" | "name" | "price">
  : V extends "_local"
  ? Pick<Product, "id" | "name" | "price">
  : V extends "_minimal"
  ? Pick<Product, "id" | "name">
  : V extends "product-view"
  ? Pick<Product, "id" | "name" | "price">
  : never;
