

import { Operator, JudgeObject } from './interface'

export const operation = function (obj: JudgeObject) {
    switch (obj.operator) {
        case Operator.加:
            return add(obj.A, obj.B)
            break;
        case Operator.减:
            return subtract(obj.A, obj.B)
            break;
        case Operator.乘:
            return multiply(obj.A, obj.B)
            break;
        case Operator.除:
            return divide(obj.A, obj.B)
            break;

        case Operator.大于:
            return greater(obj.A, obj.B)
            break;
        case Operator.小于:
            return less(obj.A, obj.B)
            break;
        case Operator.等于:
            return equal(obj.A, obj.B)
            break;

        case Operator.且:
            return and(obj.A, obj.B)
            break;
        case Operator.或:
            return or(obj.A, obj.B)
            break;
        case Operator.非:
            return no(obj.A, obj.B)
            break;
        case Operator.全部:
            return no(obj.A, obj.B)
            break;
        case Operator.只要:
            return no(obj.A, obj.B)
            break;

        default:
            console.error("unknown Operator")
            return true
            break;
    }
}

//add , subtract , multiply , divide
function add(A: string | number, B: number): number {
    A = Number(A)
    B = Number(B)
    return A + B
}
function subtract(A: string | number, B: number): number {
    A = Number(A)
    B = Number(B)
    return A - B
}
function multiply(A: string | number, B: number): number {
    A = Number(A)
    B = Number(B)
    return A * B
}
function divide(A: string | number, B: number): number {
    A = Number(A)
    B = Number(B)
    return A / B
}

//greater less equal 
function greater(A: string | number | boolean, B: number | boolean): boolean {
    A = Number(A)
    B = Number(B)
    return A > B
}
function less(A: string | number | boolean, B: number | boolean): boolean {
    A = Number(A)
    B = Number(B)
    return A < B
}
function equal(A: number | boolean, B: number | boolean): boolean {
    return A === B
}

//and or no
function and(A: string | number | boolean, B: nstring | umber | boolean): boolean {
    return A && B
}
function or(A: number | boolean, B: number | boolean): boolean {
    return A || B
}
function no(A: number | boolean): boolean {
    return !A
}