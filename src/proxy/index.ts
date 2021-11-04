/**
 * Proxy is a structural design pattern that lets you provide a
 * substitute or placeholder for another object. A proxy controls
 * access to the original object, allowing you to perform
 * something either before or after the request gets through to
 * the original object.
 * 
 * Applicability:
 * - Lazy initialization (virtual proxy)
 * - Access control (protection proxy)
 * - Local execution of a remote service (remote proxy)
 * - Logging requests (logging proxy
 * - Caching request results (caching proxy)
 * - Smart reference (dismiss a heavyweight object once there are no clients that use it)
 */

interface Subject {
    request(): void
}

/** */
class RealSubject implements Subject {

    /** */
    public request(): void {
        console.log('RealSubject: Handling request.')
    }
}

/** */
class ProxySubject implements Subject {

    private realSubject: RealSubject

    /** */
    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject
    }

    /** */
    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request()
            this.logAccess()
        }
    }

    /** */
    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.')
        return true
    }

    /** */
    private logAccess(): void {
        console.log('Proxy: Logging the time of request.')
    }
}

/** */
function clientCodeP(subject: Subject) {
    // ...

    subject.request()

    // ...
}

console.log('Client: Executing the client code with a real subject:')
const realSubject = new RealSubject()
clientCodeP(realSubject)

console.log('')

console.log('Client: Executing the same client code with a proxy:')
const proxy = new ProxySubject(realSubject)
clientCodeP(proxy)
