import { Sum } from "../Sum"

test ("Sum function should calculate sum of two numbers",()=>{
    const result=Sum(3,4);
    expect (result).toBe(7);
})