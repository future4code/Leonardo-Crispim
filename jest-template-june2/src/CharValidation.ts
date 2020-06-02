import { CharInfo } from './CharInfo';

export function validateCharacter(char: CharInfo) {

    if( char.Name.length <= 0 || 
        char.Attack == undefined || 
        char.Defense == undefined || 
        char.Life == undefined){
        return false
    }

    if(char.Attack < 0 || char.Defense < 0 || char.Life < 0){
        return false;
    }

    return true;

}

export function performAttack(attacker: CharInfo, defender: CharInfo, validate:(char: CharInfo) => boolean){

    if(validate(attacker) === false){
        throw new Error("Invalid Attacker Character")
    }
    if(validate(defender) === false){
        throw new Error("Invalid Defender Character")
    }

    if(defender.Defense < attacker.Attack){
        defender.Life -= (attacker.Attack - defender.Defense)
    }

}