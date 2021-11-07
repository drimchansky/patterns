/**
 * Strategy is a behavioral design pattern that lets you define a
 * family of algorithms, put each of them into a separate class,
 * and make their objects interchangeable.
 * 
 * Applicability:
 * - When you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime
 * - When you have a lot of similar classes that only differ in the way they execute some behavior
 * - To isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic
 * - When your class has a massive conditional operator that switches between different variants of the same algorithm
 */

/** */
class Context {

    private strategy: Strategy

    /** */
    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    /** */
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    /** */
    public doSomeBusinessLogic(): void {
        // ...
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)')
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e'])
        console.log(result.join(','))
        // ...
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

/** */
class ConcreteStrategyA implements Strategy {

    /** */
    public doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

/** */
class ConcreteStrategyB implements Strategy {

    /** */
    public doAlgorithm(data: string[]): string[] {
        return data.reverse()
    }
}

const context = new Context(new ConcreteStrategyA())
console.log('Client: Strategy is set to normal sorting.')
context.doSomeBusinessLogic()

console.log('')

console.log('Client: Strategy is set to reverse sorting.')
context.setStrategy(new ConcreteStrategyB())
context.doSomeBusinessLogic()
