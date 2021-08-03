export class Product {

    id!: string;
    name!: string;
    img!: string;
    price!: string;
    category!: string;

    constructor(id: string, name: string, img: string, price: string, category: string) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.category = category;
    }

}