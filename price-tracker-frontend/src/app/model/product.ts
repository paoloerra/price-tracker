export class Product {

    storeId!: string;
    name!: string;
    image!: string;
    priceCurrent!: string;
    storeLink!: string;

    constructor(storeId: string, name: string, image: string, priceCurrent: string, storeLink: string) {
        this.storeId = storeId;
        this.name = name;
        this.image = image;
        this.priceCurrent = priceCurrent;
        this.storeLink = storeLink;
    }

}