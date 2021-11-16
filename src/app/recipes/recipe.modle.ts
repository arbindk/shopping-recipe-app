import { Ingridient } from "../shared/ingridient.model";

export class Recipe{
    public name:string="";
    public desc:string="";
    public imagePath:string="";
    public ingridients: Ingridient[];

    constructor(name:string, desc:string, imagePath:string, ingridient : Ingridient[]){
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.ingridients = ingridient;
    }
}