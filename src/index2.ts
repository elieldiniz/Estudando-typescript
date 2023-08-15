//interface

interface CelestialBody{
    name: string
    mass: number
}

//recursos da inteface 
//pode erdar recursos de outra inteface
//tera todas as propriedades atuais e tambem ado corpo
// e precisso utilizar extends

interface star extends CelestialBody{
    age: number
    planet: planet[]

}

interface planet extends CelestialBody {
    populacao: number
    createSatellite: (name: string) => void
}

//intefaces com classes
// inplemtacao utilizando implements no lugar de extends de inteface
//extendendo a inteface planet

class MilKyWayPlanet implements planet{
    name: string
    mass: number;
    populacao: number;

    constructor(name: string,mass: number, populacao:number ){
        this.name = name
        this.mass= mass
        this.populacao = populacao
    }

    createSatellite: (name: string) => {

    }
}