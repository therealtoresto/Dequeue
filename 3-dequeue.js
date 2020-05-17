'use strict';

class Dequeue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    push(item) {
        const last = this.last;
        const element = { prev: last, next: null, item };
        if (last) {
            last.next = element;
            this.last = element;
        } else {
            this.first = element;
            this.last = element;
        }
    }
    pop() {
        const element = this.last;
        if (!element) return null;
        if (this.first === element) {
            this.first = null;
            this.last = null;
        } else {
            this.last = element.prev;
        }
        return element.item;
    }
    unshift(item) {
        const first = this.first;
        const element = { prev: null, next: first, item };
        if (first) {
            first.prev = element;
            this.first = element;
        } else {
            this.first = element;
            this.last = element;
        }
    }
    shift() {
        const element = this.first;
        if (!element) return null;
        if (this.last === element) {
            this.first = null;
            this.last = null;
        } else {
            this.first = element.next;
        }
        return element.item;
    }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const dequeue = new Dequeue();
dequeue.push(obj1);
dequeue.push(obj2);
dequeue.unshift(obj3);

console.dir(dequeue.pop());
console.dir(dequeue.shift());
console.dir(dequeue.shift());