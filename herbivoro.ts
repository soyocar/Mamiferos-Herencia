import { Mamifero } from "./mamifero";

export class Herbivoro extends Mamifero {
    protected tamaño: string;
    protected alimentacion:string;
    constructor (_tipo:string,_peso:number,_pelo:boolean, _glandulas:number,_tamaño: string){
        super(_tipo,_peso,_pelo,_glandulas)
        this.tamaño = _tamaño;
        this.alimentacion = 'vegetales';

    }

    public comer(): void {
        console.log('Estoy comiendo ' + this.alimentacion);
    }
} 
