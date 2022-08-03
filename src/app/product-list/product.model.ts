export class ProductModel{
    constructor(
    public productId :number|null,
    public productName : string,
    public productCode : string,
    public releaseDate : string,
    public description : string,
    public price : number|null,
    public starRating :number|null,
    public imageUrl : string){}
}
