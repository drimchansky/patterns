/**
 * Singleton is a creational design pattern that lets you ensure
 * that a class has only one instance, while providing a global
 * access point to this instance.
 * 
 * Applicability:
 * - When a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program
 * - When you need stricter control over global variables
 */

/** */
class Singleton {

    private static instance: Singleton

    /** */
    private constructor() {
        console.log('Initialize...')
    }

    /** */
    public static getInstance(): Singleton {
        if (! Singleton.instance) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }

    /** */
    public someBusinessLogic() {
        // ...
    }
}

/** */
function clientCodeS() {

    const s1 = Singleton.getInstance()
    const s2 = Singleton.getInstance()

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.')
    } else {
        console.log('Singleton failed, variables contain different instances.')
    }
}

clientCodeS()
