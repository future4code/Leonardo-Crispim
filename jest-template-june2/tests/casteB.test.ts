import { validateCharacter, performAttack } from "../src/CharValidation";
import { CharInfo } from '../src/CharInfo';

test("performAttack, defense higher than attack", () => { 

    const mockAttackerInfo: CharInfo = {
        Name: "Attacker Test",
        Attack: 20,
        Defense: 5,
        Life: 100
    }

    const mockDefenderInfo: CharInfo = {
        Name: "Defender Test",
        Attack: 20,
        Defense: 25,
        Life: 60
    }

    const mockFunction = jest.fn(() => {
        return true
    })

    const testResult = performAttack(mockAttackerInfo, mockDefenderInfo, mockFunction)

    expect(mockFunction).toBeCalled()
    expect(mockDefenderInfo.Life).toBe(60)

    //A diferenca eu nao sei

    //4) A) performAttack

})

test("performAttack, valid values", () => { 

    const mockAttackerInfo: CharInfo = {
        Name: "Attacker Test",
        Attack: 200,
        Defense: 5,
        Life: 100
    }

    const mockDefenderInfo: CharInfo = {
        Name: "Defender Test",
        Attack: 20,
        Defense: 5,
        Life: 100
    }

    const mockFunction = jest.fn(() => {
        return true
    })

    const testResult = performAttack(mockAttackerInfo, mockDefenderInfo, mockFunction)

    expect(mockFunction).toBeCalledTimes(2)
    expect(mockDefenderInfo.Life).toBe(-95)

})

test("performAttack, one char with invalid info", () => { 

    const mockAttackerInfo: CharInfo = {
        Name: "Attacker Test",
        Attack: 20,
        Defense: -5,
        Life: 100
    }

    const mockDefenderInfo: CharInfo = {
        Name: "Defender Test",
        Attack: 20,
        Defense: 5,
        Life: 100
    }

    const mockFunction = jest.fn(() => {
        return false
    })

    try{
        const testResult = performAttack(mockAttackerInfo, mockDefenderInfo, mockFunction)
    }
    catch(error){
        expect(error.message).toEqual("Invalid Attacker Character")
    }
})