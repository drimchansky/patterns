/**
 * Bridge is a structural design pattern that lets you split a large
 * class or a set of closely related classes into two separate
 * hierarchies—abstraction and implementation—which can be
 * developed independently of each other.
 * 
 * Applicability:
 * - When you want to divide and organize a monolithic class that has several variants of some functionality
 * - When you need to extend a class in several independent dimensions
 * - If you need to be able to switch implementations at runtime
 */

/**
 *               A
 *            /     \                        A         N
 *          Aa      Ab        ===>        /     \     / \
 *         / \     /  \                 Aa(N) Ab(N)  1   2
 *       Aa1 Aa2  Ab1 Ab2
 */

 interface Implementation {
    operationImplementation(): string
}

/** */
class Abstraction {

    protected implementation: Implementation

    /** */
    constructor(implementation: Implementation) {
        this.implementation = implementation
    }

    /** */
    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `Abstraction: Base operation with:\n${result}`
    }
}

/** */
class ExtendedAbstraction extends Abstraction {

    /** */
    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `ExtendedAbstraction: Extended operation with:\n${result}`
    }
}

/** */
class ConcreteImplementationA implements Implementation {

    /** */
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.'
    }
}

/** */
class ConcreteImplementationB implements Implementation {

    /** */
    public operationImplementation(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.'
    }
}

/** */
function clientCodeBR(abstraction: Abstraction) {
    // ..
    console.log(abstraction.operation())
    // ..
}

/** */
let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientCodeBR(abstraction)

console.log('')

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)
clientCodeBR(abstraction)
