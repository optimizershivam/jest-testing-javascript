describe("toBe or not.toBe",()=>{

    test("3 is 3", () => {
        expect(3).toBe(3)
    })

    test("Boolean Values", () =>{

        expect(true).toBe(true)
        expect(false).toBe(false)
        expect(true).not.toBe(false)
    })

    
})

describe("Test for refernce data types",()=>{
    test("{} !== {}",() => {
        expect({}).not.toBe({})
    })

    test("[] !== []",() => {
        expect([]).not.toBe([])
    })

    test("object a === object a",() => {
        let a = {}
        expect(a).toBe(a)
    })
})
// shallowequal = 1 level deep in objects,array
// deepeEqual => it goes all the way down to the root node,
describe("toEqual",()=>{
 
    test("[] is equal to []", () => {
        expect([]).toEqual([])
    })


    test("[1,2,3] is not equal to []", () => {
        expect([1,2,3]).not.toEqual([])
    })



    test("[1,2,3] is equal to [1,2,3]", () => {
        expect([1,2,3]).toEqual([1,2,3])
    })
    
    test("[1,2,[3,4]] is equal to [1,2,[3,4]]", () => {

        expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
    })
    
    test("nested arrays",() => {
     let a = [1,2,3]
     let b = [a,a]
     let c = [[1,2,3],a]
     expect(b).toEqual(c)
        
    })

})

describe("relational operators", () => {
   
    test("100 + 100 <= 200", () => {

        expect(100 + 100).toBeLessThanOrEqual(200)
    })

    test("100 + 100 < 201", () => {

        expect(100 + 100).toBeLessThan(201)
    })
 
     
    test("100 + 100 >= 200", () => {

        expect(100 + 100).toBeGreaterThanOrEqual(200)
    })


})