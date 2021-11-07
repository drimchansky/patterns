/**
 * Template Method is a behavioral design pattern that defines
 * the skeleton of an algorithm in the superclass but lets
 * subclasses override specific steps of the algorithm without
 * changing its structure.
 * 
 * Applicability:
 * - When you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure
 * - When you have several classes that contain almost identical algorithms with some minor differences. As a result, you might need to modify all classes when the algorithm changes
 */

/** */
abstract class AbstractClass {

    /** */
    public templateMethod(): void {
        this.baseOperation1()
        this.requiredOperations1()
        this.baseOperation2()
        this.hook1()
        this.requiredOperation2()
        this.baseOperation3()
        this.hook2()
    }

    /** */
    protected baseOperation1(): void {
        console.log('AbstractClass says: I am doing the bulk of the work')
    }

    /** */
    protected baseOperation2(): void {
        console.log('AbstractClass says: But I let subclasses override some operations')
    }

    /** */
    protected baseOperation3(): void {
        console.log('AbstractClass says: But I am doing the bulk of the work anyway')
    }

    protected abstract requiredOperations1(): void
    protected abstract requiredOperation2(): void

    /** */
    protected hook1(): void { }
    /** */
    protected hook2(): void { }
}

/** */
class ConcreteClass1 extends AbstractClass {

    /** */
    protected requiredOperations1(): void {
        console.log('ConcreteClass1 says: Implemented Operation1')
    }

    /** */
    protected requiredOperation2(): void {
        console.log('ConcreteClass1 says: Implemented Operation2')
    }
}

/** */
class ConcreteClass2 extends AbstractClass {

    /** */
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1')
    }

    /** */
    protected requiredOperation2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2')
    }

    /** */
    protected hook1(): void {
        console.log('ConcreteClass2 says: Overridden Hook1')
    }
}

/** */
function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod()
    // ...
}

console.log('Same client code can work with different subclasses:')
clientCode(new ConcreteClass1())
console.log('')

console.log('Same client code can work with different subclasses:')
clientCode(new ConcreteClass2())
