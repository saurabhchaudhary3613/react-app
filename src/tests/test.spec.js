let mockFn = jest.fn();

mockFn(1, 2);
mockFn([1,2,3])

console.log(mockFn.mock.calls);

const f = new mockFn();


const a = new mockFn();
const b = {};
const bound = mockFn.bind(b);
bound();

console.log(mockFn.mock.instances);
console.log(mockFn.mock.calls.length);
console.log(mockFn.mock.calls[0]);

console.log("Instances ", mockFn.mock.instances.length);

const add2 = jest.fn();

add2.mockReturnValueOnce(10)
    .mockReturnValueOnce(true)
    .mockReturnValue("hello");

console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());

jest.mock("./math");

//import add from "./math";
var math = require("./math");

math.add.mockImplementation ( ()=> 100);

console.log(math.add(100, 300))
console.log(math.add.mock.calls.length);

console.log(math.sub(100, 20));

describe ( "test mock", () => {
    it("test", () => {
        expect(true).toBe(true);
    })
})