/**
 * Class BidNode
 * 双向节点类
 */

function BidNode(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}


/**
 * Class BidLinkedList
 * 双向链表 BidLinkedList
 */

function BidLinkedList() {
	this.head = new BidNode('head');
}

BidLinkedList.prototype = {

	constructor: BidLinkedList,

	/**
	 * 查找链表项
	 * @param  {Any} item  某项
	 * @return {BidNode|Null} 节点或者null
	 */
	find: function find(item) {
		var currNode = this.head;
		while (currNode && currNode.element !== item) {
			currNode = currNode.next;
		}
		return currNode;
	},

	/**
	 * 查找链表中最后的节点
	 * @return {BidNode|Null} 节点或者null
	 */
	findLast: function findLast() {
		var currNode = this.head;
		while (currNode.next != null) {
			currNode = currNode.next;
		}
		return currNode;
	},

	/**
	 * 在某项后插入新项
	 * @param  {Any} newElement 插入新项
	 * @param  {Any} item       某项
	 * @return {Undefined} undefined
	 */
	insert: function insert(newElement, item) {
		var current = this.find(item);
		if (!current) return;
		var newNode = new BidNode(newElement);
		newNode.next = current.next;
		newNode.previous = current;
		current.next = newNode;
	},

	/**
	 * 得到所有项
	 * @return {Array} 所有项
	 */
	display: function display() {
		var ret = [];
		var currNode = this.head;
		while (currNode.next != null) {
			ret.push(currNode.next.element);
			currNode = currNode.next;
		}
		return ret;
	},

	/**
	 * 反向得到所有项
	 * @return {Array} 所有项
	 */
	disReverse: function disReverse() {
		var ret = [];
		var currNode = this.findLast();
		while (currNode.previous != null) {
			ret.push(currNode.element);
			currNode = currNode.previous;
		}
		return ret;
	},

	/**
	 * 移除链表中某项
	 * @param  {Any} item  某项
	 * @return {Undefined} undefined
	 */
	remove: function remove(item) {
		var currNode = this.find(item);
		if (currNode && currNode.next != null) {
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}
	}

};