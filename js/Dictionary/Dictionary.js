/**
 * Class Dictionary
 * 字典 Dictionary
 */

function Dictionary() {
	this._data = []; // 用于存储数据的数组
}

Dictionary.prototype = {

	constructor: Dictionary,

	/**
	 * 添加项
	 * @param  {String} key   添加项的键
	 * @param  {Any}    value 添加项的值
	 * @return {Undefined}   undefined
	 */
	add: function add(key, value) {
		this._data[key] = value;
	},

	/**
	 * 查找键的值
	 * @param  {String} key 键
	 * @return {Any}        值
	 */
	find: function find(key) {
		return this._data[key];
	},

	/**
	 * 删除给定键的项
	 * @param  {String} key 键
	 * @return {Boolean}    是否删除成功
	 */
	remove: function remove(key) {
		return delete this._data[key];
	},

	/**
	 * 得到所有键值
	 * @return {Array} 结果数组
	 */
	showAll: function showAll(sorted) {
		var ret = [], key, keys = [];
		if (sorted) {
			for (key in this._data) {
				if (this._data.hasOwnProperty(key)) {
					keys.push(key);
				}
			}
			keys = keys.sort();
			for (var i = 0, len = keys.length; i < len; i++) {
				ret.push(keys[i] + ' -> ' + this._data[keys[i]]);
			}
			return ret;
		}
		for (key in this._data) {
			if (this._data.hasOwnProperty(key)) {
				ret.push(key + ' -> ' + this._data[key]);
			}
		}
		return ret;
	},

	/**
	 * 所有项个数
	 * @return {Number} 个数值
	 */
	count: function count() {
		if (Object.keys) return Object.keys(this._data).length;
		var n = 0;
		for (var key in this._data) {
			if (this._data.hasOwnProperty(key)) {
				n++;
			}
		}
		return n;
	},

	/**
	 * 清空字典
	 * @return {Undefined} undefined
	 */
	clear: function clear() {
		for (var key in this._data) {
			if (this._data.hasOwnProperty(key)) {
				delete this._data[key];
			}
		}
	}

};