/**
 * Class Node
 * 节点类
 */

function Node(element) {
	this.element = element;
	this.next = null;
}


/**
 * Class LinkedList
 * 链表 LinkedList
 */

function LinkedList() {
	this.head = new Node('head');
}

LinkedList.prototype = {

	constructor: LinkedList,

	/**
	 * 查找链表项
	 * @param  {Any} item  某项
	 * @return {Node|Null} 节点或者null
	 */
	find: function find(item) {
		var currNode = this.head;
		while (currNode && currNode.element !== item) {
			currNode = currNode.next;
		}
		return currNode;
	},

	/**
	 * 查找链表中哪个节点的下一个节点中的元素是查找项
	 * @param  {Any} item  查找项
	 * @return {Node|Null} 节点或者null
	 */
	findPrevious: function findPrevious(item) {
		var currNode = this.head;
		while (currNode.next != null && currNode.next.element !== item) {
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
		var newNode = new Node(newElement);
		newNode.next = current.next;
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
	 * 移除链表中某项
	 * @param  {Any} item  某项
	 * @return {Undefined} undefined
	 */
	remove: function remove(item) {
		var preNode = this.findPrevious(item);
		if (preNode && preNode.next != null) {
			preNode.next = preNode.next.next;
		}
	}

};