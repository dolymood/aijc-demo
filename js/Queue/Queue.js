/**
 * Class Queue
 * 队列 Queue
 */

function Queue() {
	this._list = []; // 用于存储数据的数组
}

Queue.prototype = {

	constructor: Queue,

	/**
	 * 向队尾添加一个新元素
	 * @param  {Any} element 新元素
	 * @return {Undefined}   undefined
	 */
	enqueue: function enqueue(element) {
		this._list.push(element);
	},

	/**
	 * 取出队首元素
	 * @return {Any} 队首元素
	 */
	dequeue: function dequeue() {
		return this._list.shift();
	},

	/**
	 * 返回队首元素
	 * @return {Any} 队首元素
	 */
	front: function front() {
		return this._list[0];
	},

	/**
	 * 返回队尾元素
	 * @return {Any} 队尾元素
	 */
	back: function back() {
		return this._list[this._list.length - 1];
	},

	/**
	 * 返回队列的所有的元素
	 * @return {String} 结果字符串
	 */
	toString: function toString() {
		var ret = '';
		for (var i = 0, len = this._list.length; i < len; i++) {
			ret += this._list[i] + '\n';
		}
		return ret;
	},

	/**
	 * 判断队列是否为空
	 * @return {Boolean} 是否为空
	 */
	empty: function empty() {
		return !this._list.length;
	}

};