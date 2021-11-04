/**
 * Prototype is a creational design pattern that lets you copy
 * existing objects without making your code dependent on
 * their classes.
 * 
 * Applicability:
 * - When your code shouldn’t depend on the concrete classes of objects that you need to copy
 * - When you want to reduce the number of subclasses that only differ in the way they initialize their respective objects
 */

/** */
class ComponentWithBackReference {

    public prototype

    /** */
    constructor(prototype: Prototype) {
        this.prototype = prototype
    }
}

/** */
class Prototype {

    public primitive: any
    public component: object
    public circularReference: ComponentWithBackReference

    /** */
    public clone(): this {

        const clone = Object.create(this)

        clone.component = Object.create(this.component)

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this }
        }

        return clone
    }
}

/**
 * Клиентский код.
 */
function clientCodePR() {

    const p1 = new Prototype()
    p1.primitive = 245
    p1.component = new Date()
    p1.circularReference = new ComponentWithBackReference(p1)

    const p2 = p1.clone()
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!')
    } else {
        console.log('Primitive field values have not been copied. Booo!')
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!')
    } else {
        console.log('Simple component has been cloned. Yay!')
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!')
    } else {
        console.log('Component with back reference has been cloned. Yay!')
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!')
    } else {
        console.log('Component with back reference is linked to the clone. Yay!')
    }
}

clientCodePR()
