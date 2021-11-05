/**
 * Adapter is a structural design pattern that allows objects with
 * incompatible interfaces to collaborate.
 * 
 * Applicability:
 * - When you want to use some existing class, but its interface isn’t compatible with the rest of your code
 * - When you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass
 */

/** */
class Target {

    /** */
    public request(): string {
        return 'Target: The default target\'s behavior.'
    }
}

/** */
class Adaptee {

    /** */
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS'
    }
}

/** */
class Adapter extends Target {

    private adaptee: Adaptee

    /** */
    constructor(adaptee: Adaptee) {
        super()
        this.adaptee = adaptee
    }

    /** */
    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('')
        return `Adapter: (TRANSLATED) ${result}`
    }
}

/** */
function clientCodeA(target: Target) {
    console.log(target.request())
}

console.log('Client: I can work just fine with the Target objects:')
const target = new Target()
clientCodeA(target)

console.log('')

const adaptee = new Adaptee()
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:')
console.log(`Adaptee: ${adaptee.specificRequest()}`)

console.log('')

console.log('Client: But I can work with it via the Adapter:')
const adapter = new Adapter(adaptee)
clientCodeA(adapter)
