

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    getAll() {
        return this.head;
    }

    remove(data) {
        //write how to remove a certain node
        let currentNode = this.head
        let prev = this.head
        if (currentNode.data == data) {
            this.head = this.head.next
            this.size--;
            return;
        } else {
            // let current = currentNode;
            while (currentNode) {
                if (currentNode.data == data) {
                    prev.next = currentNode.next
                    this.size--
                    break
                }
                prev = currentNode;
                currentNode = currentNode.next;

            }
        }
    }

    getSize() {
        return this.size;
    }

    print() {
        var currentNode = this.head;
        while (currentNode) {
            console.log("this is added node", currentNode.data)
            currentNode = currentNode.next
        }
    }
}

export default LinkedList




