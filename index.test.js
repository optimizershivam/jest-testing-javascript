const sum = require("./index")

describe ( "Testing sum function", () => {

    test("add 2 Positive numbers",()=> {

        expect(sum(1,2)).toBe(3)
    })


    test("add 2 negative numbers",()=> {

        expect(sum(-1,-2)).toBe(-3)
    })


    test("add 2 floating numbers",()=> {

        expect(sum(1.3,2.3)).toBe(3.6)
    })

    test("add 2 floating numbers, where o/p is integer",()=> {

        expect(sum(1.5,1.5)).toBe(3)
    })

    test("add 2  numbers as strings , where o/p is integer",()=> {

        expect(sum("1.5","1.5")).toBe(3)
    })

    test("call sum with no arguments",()=> {

        expect(sum()).toBe("sum invoked without arguments")
    })

    test("call sum with one arguments",()=> {

        expect(sum(1)).toBe("sum function needs atleast two arguments")
    })

    test("Add three numbers",()=> {

        expect(sum(1,2,3)).toBe(6)
    })


    test("Add Four numbers",()=> {

        expect(sum(1,2,3,4)).toBe(10)
    })

})