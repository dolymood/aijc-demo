/**
 * Class Set
 * 集合 Set
 */

function Set() {
	this.data = []; // 用于存储数据的数组
}

Set.prototype = {

	constructor: Set,

	/**
	 * 添加成员
	 * @param {Any} data 成员
	 * @return {Boolean} 是否添加成功
	 */
	add: function add(data) {
		if (this.data.indexOf(data) < 0) {
			this.data.push(data);
			return true;
		} else {
			return false;
		}
	},

	/**
	 * 移除成员
	 * @param {Any} data 成员
	 * @return {Boolean} 是否移除成功
	 */
	remove: function remove(data) {
		var p = this.data.indexOf(data);
		if (p > -1) {
			this.data.splice(p, 1);
			return true;
		} else {
			return false;
		}
	},

	/**
	 * 显示
	 * @return {Array} 数据
	 */
	show: function show() {
		return this.data;
	},

	/**
	 * 是否包含成员
	 * @param  {Any} data 成员
	 * @return {Boolean}  是否包含
	 */
	contains: function contains(data) {
		return this.data.indexOf(data) > -1 ? true : false;
	},

	/**
	 * 两个集合的并集
	 * @param  {Set} set 另一个集合
	 * @return {Set}     新集合
	 */
	union: function union(set) {
		var retSet = new Set();
		for (var i = 0, len = this.data.length; i < len; i++) {
			retSet.add(this.data[i]);
		}
		for (i = 0, len = set.data.length; i < len; i++) {
			if (!retSet.contains(set.data[i])) {
				retSet.data.push(set.data[i]);
			}
		}
		return retSet;
	},

	/**
	 * 两个集合的交集
	 * @param  {Set} set 另一个集合
	 * @return {Set}     新集合
	 */
	intersect: function intersect(set) {
		var retSet = new Set();
		for (var i = 0, len = this.data.length; i < len; i++) {
			if (set.contains(this.data[i])) {
				retSet.add(this.data[i]);
			}
		}
		return retSet;
	},

	/**
	 * 本集合是否是另一个集合的子集
	 * @param  {Set} set  另一个集合
	 * @return {Boolean}  是否是子集
	 */
	subset: function subset(set) {
		if (this.size() > set.size()) {
			return false;
		}
		for (var i = 0, len = this.data.length; i < len; i++) {
			if (!set.contains(this.data[i])) {
				return false;
			}
		}
		return true;
	},

	/**
	 * 两个集合的补集
	 * @param  {Set} set 另一个集合
	 * @return {Set}     属于本集合，但是不属于
	 *                   另一个集合的成员组成的集合
	 */
	difference: function difference(set) {
		var retSet = new Set();
		for (var i = 0, len = this.data.length; i < len; i++) {
			if (!set.contains(this.data[i])) {
				retSet.add(this.data[i]);
			}
		}
		return retSet;
	},

	/**
	 * 集合大小
	 * @return {Number} 集合长度
	 */
	size: function() {
		return this.data.length;
	}

};