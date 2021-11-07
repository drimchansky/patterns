/**
 * Chain of Responsibility is a behavioral design pattern that lets
 * you pass requests along a chain of handlers. Upon receiving a
 * request, each handler decides either to process the request or
 * to pass it to the next handler in the chain.
 * 
 * Applicability:
 * - When your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand
 * - When it’s essential to execute several handlers in a particular order
 * - When the set of handlers and their order are supposed to change at runtime
 */

 interface Handler {
    setNext(handler: Handler): Handler
    handle(request: string): string
}

/** */
abstract class AbstractHandler implements Handler {

    private nextHandler: Handler

    /** */
    public setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler
    }

    /** */
    public handle(request: string): string {

        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }

        return null
    }
}

/** */
class MonkeyHandler extends AbstractHandler {

    /** */
    public handle(request: string): string {

        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`
        }

        return super.handle(request)

    }
}

/** */
class SquirrelHandler extends AbstractHandler {

    /** */
    public handle(request: string): string {

        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`
        }

        return super.handle(request)
    }
}

/** */
class DogHandler extends AbstractHandler {

    /** */
    public handle(request: string): string {

        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`
        }

        return super.handle(request)
    }
}

/** */
function clientCode(handler: Handler) {

    const foods = ['Nut', 'Banana', 'Cup of coffee']

    for (const food of foods) {

        console.log(`Client: Who wants a ${food}?`)

        const result = handler.handle(food)
        if (result) {
            console.log(`  ${result}`)
        } else {
            console.log(`  ${food} was left untouched.`)
        }

    }
}

/** */
const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

/** */
console.log('Chain: Monkey > Squirrel > Dog\n')
clientCode(monkey)
console.log('')

console.log('Subchain: Squirrel > Dog\n')
clientCode(squirrel)
