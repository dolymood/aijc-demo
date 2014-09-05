/**
 * Class List
 * 列表类List
 */

function List() {
	this.listSize = 0;
	this.pos = 0;
	this._list = []; // 用于存储数据的数组
}

List.prototype = {

	constructor: List,

	/**
	 * 列表长度
	 * @return {Number} 长度值
	 */
	length: function length() {
		return this.listSize;
	},

	/**
	 * 清空列表
	 * @return {Undefined} undefined
	 */
	clear: function clear() {
		this.listSize = 0;
		this.pos = 0;
		this._list = [];
	},

	/**
	 * 列表字符串结果
	 * @return {String} 字符串结果
	 */
	toString: function toString() {
		return this._list.toString();
	},

	/**
	 * 得到当前位置元素
	 * @return {Any} 当前元素
	 */
	getElement: function getElement() {
		return this._list[this.pos];
	},

	/**
	 * 查找元素在列表中位置
	 * @param  {Any} element 要查找的元素
	 * @return {Number}      位置
	 */
	find: function find(element) {
		for (var i = 0, len = this._list.length; i < len; i++) {
			if (this._list[i] === element) {
				return i;
			}
		}
		return -1;
	},

	/**
	 * 判断元素是否在列表中
	 * @param  {Any} element 要判断的元素
	 * @return {Boolean}     是否在列表中
	 */
	contains: function contains(element) {
		return this.find(element) !== -1;
	},

	/**
	 * 向列表中插入一个元素
	 * @param  {Any} element 插入的元素
	 * @param  {Any} after   列表中某元素
	 * @return {Boolean}     是否插入成功
	 */
	insert: function insert(element, after) {
		var i = this.find(after);
		if (i === -1) return false;
		this._list.splice(i + 1, 0, element);
		this.listSize++;
		return true;
	},

	/**
	 * 列表末尾添加新元素
	 * @param  {Any} element 新元素
	 * @return {Undefined}   undefined
	 */
	append: function append(element) {
		this._list.push(element);
		this.listSize++;
	},

	/**
	 * 在列表中移除元素
	 * @param  {Any} element 移除元素
	 * @return {Boolean}     是否删除成功
	 */
	remove: function remove(element) {
		var i = this.find(element);
		if (i === -1) return false;
		this._list.splice(i, 1);
		this.listSize--;
		return true;
	},

	/**
	 * 将列表的当前位置移动到第一个位置
	 * @return {Undefined} undefined
	 */
	front: function front() {
		this.pos = 0;
	},

	/**
	 * 将列表的当前位置移动到最后一个位置
	 * @return {Undefined} undefined
	 */
	end: function end() {
		this.pos = this.listSize - 1;
	},

	/**
	 * 将当前位置前移一位
	 * @return {Undefined} undefined
	 */
	prev: function prev() {
		this.pos > 0 && --this.pos;
	},

	/**
	 * 将当前位置后移一位
	 * @return {Undefined} undefined
	 */
	next: function next() {
		this.pos < this.listSize - 1 && ++this.pos;
	},

	/**
	 * 返回列表当前位置
	 * @return {Number} 当前位置
	 */
	currPos: function currPos() {
		return this.pos;
	},

	/**
	 * 将当前位置移动到指定位置
	 * @param  {Number} pos 指定位置
	 * @return {Undefined}  undefined
	 */
	moveTo: function moveTo(pos) {
		this.pos = pos;
	}

};