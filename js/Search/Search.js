/**
 * 顺序查找数组中数据
 * @param  {Array} ary  数组
 * @param  {Any}   data 要查找数据
 * @return {Number}     数据在数组中位置
 */
function seqSearch(ary, data) {
	for (var i = 0, len = ary.length; i < len; i++) {
		if (ary[i] === data) {
			return i;
		}
	}
	return -1;
}

/**
 * 二分法查找数组中数据
 * @param  {Array} ary  数组
 * @param  {Any}   data 要查找数据
 * @return {Number}     数据在数组中位置
 */
function binSearch(ary, data) {
	var upperBound = ary.length - 1;
	var lowerBound = 0;
	var mid;
	while (lowerBound <= upperBound) {
		mid = Math.floor((lowerBound + upperBound) / 2);
		if (ary[mid] < data) {
			lowerBound = mid + 1;
		} else if (ary[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}