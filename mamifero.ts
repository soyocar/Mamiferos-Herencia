export class Mamifero {
    protected tipo: string;
    protected peso: number;
    protected pelo: boolean;
    protected glandulas: number;
    
    constructor (_tipo:string, _peso:number, _pelo:boolean, _glandulas:number){
        this.tipo = _tipo;
        this.peso = _peso;
        this.pelo = _pelo;
        this.glandulas = _glandulas;
    }

    public getTipo():string{
        return this.tipo;
    }

    public setTipo(_tipo:string):void{
        this.tipo = _tipo;
    }

    public getPeso():number{
        return this.peso;
    }

    public setPeso(_peso:number):void{
        this.peso = _peso;
    }

    public getPelo():boolean{
        return this.pelo;
    }

    public setPelo(_pelo: boolean):void{
        this.pelo = _pelo;
    }

    public getGlandulas():number{
        return this.glandulas;
    }

    public setGlandulas(_glandulas: number):void{
        this.glandulas = _glandulas;
    }

    public comer():void{
        console.log("Estoy comiendo: ");
    }
}