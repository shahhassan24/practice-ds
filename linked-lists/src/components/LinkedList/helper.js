

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

    addAtStart(data) {
        const newNode = new Node(data)
        var currentNode = this.head
        newNode.next = currentNode
        this.head = newNode
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

    insertAt(index, data) {
        if (index < 0) return
        var newNode = new Node(data);
        var currentNode = this.head
        let currentIndex = 0;
        console.log("this is test", this.size, index, this.size == (index - 1))
        if (index == 0) {
            this.addAtStart(data)
        } else if (this.size == (index - 1)) {
            this.add(data)
        } else {
            let prev = null;
            while (currentNode) {
                if (currentIndex == index) {
                    prev.next = newNode;
                    newNode.next = currentNode
                    this.size++
                    break;
                }
                currentIndex++
                prev = currentNode
                currentNode = currentNode.next
            }
        }

        console.log("this size", this.size)
    }

}

export default LinkedList




