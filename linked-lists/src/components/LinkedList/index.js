


export const LinkedList = () => {

    let head = null;
    let length = 0

    function LinkedNode(element) {
        this.node = element;
        this.next = null;
    }

    const add = (element) => {
        console.log("this is element", element, head)
        let newNode = new LinkedNode(element);

        if (head == null) {
            head = newNode;
        } else {
            let currentNode = head;

            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
        length++;


    }

    const getHead = () => {
        return head;
    }

    const remove = (element) => {
        console.log("this is element", element, head)
        let currentNode = head;
        let previousNode;

        if (head.node == element) {
            head = currentNode.next
            length--
        } else {
            while (currentNode.node != element) {
                console.log("this is current node", currentNode, element)
                previousNode = currentNode
                currentNode = currentNode.next
            }

            if (currentNode.node == element) {
                console.log("this is remove node", currentNode, element, previousNode)

                previousNode.next = currentNode.next;
            }
            length--
        }

    }

    const getIndex = (element) => {
        let currentNode = head;
        let index = 0;

        while (currentNode.node != element) {
            currentNode = currentNode.next;
            index++
        }

        return index;
    }


    return {
        add,
        getHead,
        remove,
        getIndex
    }
}