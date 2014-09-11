/**
 * Class Node
 * 节点 Node
 */

function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

Node.prototype = {

	constructor: Node,

	/**
	 * 显示保存节点中的数据
	 * @return {Any} 数据
	 */
	show: function show() {
		return this.data;
	}

};


/**
 * Class BST
 * 二叉查找树 BST
 */

function BST() {
	this.root = null;
}

BST.prototype = {

	constructor: BST,

	/**
	 * 加入新节点
	 * @param {Any} data 节点数据
	 * @return {Undefined} undefined
	 */
	insert: function insert(data) {
		var n = new Node(data, null, null);
		if (this.root == null) {
			this.root = n;
		} else {
			var current = this.root, parent, k;
			while (true) {
				parent = current;
				if (data < current.data) {
					// 进入左节点
					k = 'left';
				} else {
					// 进入左节点
					k = 'right';
				}
				current = current[k];
				if (current == null) {
					// 没有k节点
					parent[k] = n;
					break;
				}
			}
		}
	},

	/**
	 * 中序遍历
	 * @param  {Node}  node 节点
	 * @param  {Array} ret  结果
	 * @return {Array}      结果数组
	 */
	inOrder: function inOrder(node, ret) {
		if (!ret) ret = [];
		if (node != null) {
			inOrder(node.left, ret);
			ret.push(node.show());
			inOrder(node.right, ret);
		}
		return ret;
	},

	/**
	 * 先序遍历
	 * @param  {Node}  node 节点
	 * @param  {Array} ret  结果
	 * @return {Array}      结果数组
	 */
	preOrder: function preOrder(node, ret) {
		if (!ret) ret = [];
		if (node != null) {
			ret.push(node.show());
			preOrder(node.left, ret);
			preOrder(node.right, ret);
		}
		return ret;
	},

	/**
	 * 后序遍历
	 * @param  {Node}  node 节点
	 * @param  {Array} ret  结果
	 * @return {Array}      结果数组
	 */
	postOrder: function postOrder(node, ret) {
		if (!ret) ret = [];
		if (node != null) {
			postOrder(node.left, ret);
			postOrder(node.right, ret);
			ret.push(node.show());
		}
		return ret;
	},

	/**
	 * 得到最小值
	 * @return {Any} 最小值
	 */
	getMin: function getMin() {
		var current = this.root;
		while (current.left != null) {
			current = current.left;
		}
		return current.data;
	},

	/**
	 * 得到最大值
	 * @return {Any} 最大值
	 */
	getMax: function getMax() {
		var current = this.root;
		while (current.right != null) {
			current = current.right;
		}
		return current.data;
	},

	/**
	 * 查找指定值
	 * @param  {Any} data  指定值
	 * @return {Node|Null} 保存该值的节点或null
	 */
	find: function find(data) {
		var current = this.root;
		while (current != null) {
			if (current.data === data) {
				return current;
			} else if (current.data > data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return null;
	},

	/**
	 * 删除指定数据
	 * @param  {Any} data  指定数据
	 * @return {Node|Null} 移除后节点或者null
	 */
	remove: function remove(data) {
		return this.removeNode(this.root, data);
	},

	/**
	 * 从节点上删除指定数据
	 * @param  {Node|Null} node 节点
	 * @param  {Any}       data 待删除数据
	 * @return {Node|Null}      移除后节点或者null
	 */
	removeNode: function removeNode(node, data) {
		if (node == null) return null;

		if (data === node.data) {
			// 没有子节点
			if (node.left == null && node.right == null) {
				return null;
			}
			// 没有左节点
			if (node.left == null) {
				return node.right;
			}
			// 没有右节点
			if (node.right == null) {
				return node.left;
			}
			// 有两个子节点
			// 这里采用查找其右子树上的最小值
			var tmpNode = this.getSmallest(node.right);
			node.data = tmpNode.data;
			node.right = removeNode(node.right, tmpNode.data);
			return node;
		} else if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	},

	/**
	 * 得到节点上有最小值的子节点
	 * @param  {Node} node 节点
	 * @return {Node}      有最小值的节点
	 */
	getSmallest: function getSmallest(node) {
		// 没有左节点，意味着当前节点是最小
		if (node.left == null) return node;

		return getSmallest(node.left);
	}

};