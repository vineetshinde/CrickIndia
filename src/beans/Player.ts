export class Player
{
    id:number;
    name:string ;
    position:string;
    imagepath:string;

    constructor(id:number,name:string,position:string,imagepath:string)
    {
        this.id = id;
        this.name = name;
        this.position = position;
        this.imagepath = imagepath;
    }
}