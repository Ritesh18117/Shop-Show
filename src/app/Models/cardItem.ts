import { Product } from "./Product";

export class cardItem{
    product:Product;
    color:string;
    size:number;
    constructor(product:Product,color:string,size:number){
        this.product = product;
        this.color = color;
        this.size = size;
    }
}