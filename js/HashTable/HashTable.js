/**
 * Class HashTable
 * 散列 HashTable
 */

function HashTable() {
	this.table = new Array(137); // 用于存储数据的数组
}

HashTable.prototype = {

	constructor: HashTable,

	/**
	 * 简单散列函数
	 * @param  {String} data 键
	 * @return {Number}      键值
	 */
	simpleHash: function simpleHash(data) {
		var total = 0;
		for (var i = 0, len = data.length; i < len; i++) {
			total += data.charCodeAt(i);
		}
		return total % this.table.length;
	},

	/**
	 * 更好的散列函数（霍纳算法）
	 * @param  {String} str  键
	 * @return {Number}      键值
	 */
	betterHash: function betterHash(str) {
		var H = 37, total = 0, i = 0, len = str.length;
		for ( ; i < len; i++) {
			total += H * total + str.charCodeAt(i);
		}
		total = total % this.table.length;
		if (total < 0) total += this.table.length - 1;
		return parseInt(total);
	},

	/**
	 * 得到显示散列表中数据
	 * @return {Array} 结果数组
	 */
	showDistro: function showDistro() {
		var ret = [], i = 0, len = this.table.length,
				chained = this._chained, tmp;
		for ( ; i < len; i++) {
			if (chained) tmp = this.table[i][0];
			else tmp = this.table[i];
			if (tmp != undefined) {
				ret.push(i + ': ' + tmp);
			}
		}
		return ret;
	},

	/**
	 * 将数据存入散列表
	 * @param  {String} key  键
	 * @param  {String} data 数据
	 * @return {Undefined}  undefined
	 */
	put: function put(key, data) {
		// 简单哈希 可能产生碰撞
		// this.table[this.simpleHash(data)] = data;
		var pos = this.betterHash(key);
		if (this._chained) {
			var index = 0;
			while (this.table[pos][index] != undefined) {
				++index;
			}
			this.table[pos][index] = key;
			this.table[pos][index + 1] = data;
			return;
		}
		if (this.values) {
			while (this.table[pos] != undefined) {
				pos++;
			}
			this.table[pos] = key;
			this.values[pos] = data;
			return;
		}
		this.table[pos] = data;
	},

	/**
	 * 从散列表中取出数据
	 * @param  {[type]} key 键
	 * @return {[type]}     对应的键值
	 */
	get: function get(key) {
		var pos = this.betterHash(key);
		if (this._chained) {
			var index = 0;
			while (this.table[pos][index] != undefined && this.table[pos][index] != key) {
				index += 2;
			}
			return this.table[pos][index + 1];
		}
		if (this.values) {
			if (pos > -1) {
				for (var i = pos; this.table[i] != undefined; i++) {
					if (this.table[i] == key) {
						return this.values[i];
					}
				}
			}
			return undefined;
		}
		return this.table[pos];
	},

	/**
	 * 构建链-新数组（开链法）
	 * @return {Undefined}  undefined
	 */
	buildChains: function buildChains() {
		for (var i = 0, len = this.table.length; i < len; i++) {
			this.table[i] = [];
		}
		this._chained = true;
		this.values = undefined;
	},

	/**
	 * 创建values数组（线性探测法法）
	 * @return {Undefined}  undefined
	 */
	createValues: function createValues() {
		this.values = [];
		this._chained = false;
	}

};