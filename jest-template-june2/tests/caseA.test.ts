import { validateCharacter } from "../src/CharValidation";
import { CharInfo } from '../src/CharInfo';

test("validateChar Empty Name", () => { 

    const mockCharInfo: CharInfo = {
        Name: "",
        Attack: 20,
        Defense: 5,
        Life: 100
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(false)

})

test("validateChar Empty Life", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Wilson the Healthy",
        Attack: 20,
        Defense: 5,
        Life: undefined
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(false)

})

test("validateChar Empty Attack", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Cuddy the strong",
        Attack: undefined,
        Defense: 5,
        Life: 100
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(false)

})

test("validateChar Empty Defense", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Thomas the Tank",
        Attack: 20,
        Defense: undefined,
        Life: 100
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(false)

})

test("validateChar Negative Value", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Missingno the negative",
        Attack: 20,
        Defense: -5,
        Life: 100
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(false)

})

test("validateChar Zero Value", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Zero, Megaman's Rival",
        Attack: 20,
        Defense: 0,
        Life: 100
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(true)

})

test("validateChar Perfect Values", () => { 

    const mockCharInfo: CharInfo = {
        Name: "Kanon",
        Attack: 30,
        Defense: 10,
        Life: 150
    }

    const testResult = validateCharacter(mockCharInfo)

    expect(testResult).toBe(true)

})