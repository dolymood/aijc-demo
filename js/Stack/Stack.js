/**
 * Class Stack
 * 栈 Stack
 */

function Stack() {
	this.top = 0;
	this._list = []; // 用于存储数据的数组
}

Stack.prototype = {

	constructor: Stack,

	/**
	 * 栈内元素个数
	 * @return {Number} 长度值
	 */
	length: function length() {
		return this.top;
	},

	/**
	 * 清空栈
	 * @return {Undefined} undefined
	 */
	clear: function clear() {
		this.top = 0;
	},

	/**
	 * 向栈中压入一个新元素
	 * @param  {Any} element 新元素
	 * @return {Undefined}   undefined
	 */
	push: function push(element) {
		this._list[this.top++] = element;
	},

	/**
	 * 取出栈顶元素
	 * @return {Any} 栈顶元素
	 */
	pop: function pop() {
		return this._list[--this.top];
	},

	/**
	 * 返回栈顶元素
	 * @return {Any} 栈顶元素
	 */
	peek: function peek() {
		return this._list[this.top - 1];
	}

};