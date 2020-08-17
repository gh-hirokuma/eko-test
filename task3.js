let sum = 0;

function ListNode(val) {
    this.val = val;
    this.next = null
}

function LinkedList () {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.isEmpty = () => {
        return this.length === 0;
    }

    this.printList = () => {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes.join(' -> ');
    }
}

function sumLinkedList(l1, l2) {

};
