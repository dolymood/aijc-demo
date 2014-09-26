/**
 * 计算斐波那契数列（递归实现）
 * @param  {Number} n 指定序号
 * @return {Number}   指定序号的值
 */
function recurFib(n) {
	if (n < 2) {
		return n;
	} else {
		return recurFib(n - 1) + recurFib(n - 2);
	}
}

/**
 * 计算斐波那契数列（动态规划实现-数组）
 * @param  {Number} n 指定序号
 * @return {Number}   指定序号的值
 */
function dynFib(n) {
	var val = [], i = 0;
	for ( ; i <= n; i++) {
		val[i] = 0;
	}
	if (n === 1 || n === 2) {
		return 1;
	} else {
		val[1] = 1;
		val[2] = 2;
		for (i = 3; i <= n; i++) {
			val[i] = val[i - 1] + val[i - 2];
		}
		return val[n - 1];
	}
}

/**
 * 计算斐波那契数列（动态规划实现-整数）
 * @param  {Number} n 指定序号
 * @return {Number}   指定序号的值
 */
function iterFib(n) {
	var last = 1, nextLast = 1,
			result = 1, i = 2;
	for ( ; i < n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
}

/**
 * 寻找最长公共子串
 * @param  {String} word1 单词1
 * @param  {String} word2 单词2
 * @return {String}       单词1和单词2中最长公共子串
 */
function lcs(word1, word2) {
	var max = 0, // 出现公共字符的最大长度
			index = 0, // 出现最大长度时在word1中位置（从1开始计）
			len1 = word1.length,
			len2 = word2.length,
			lcsarr = new Array(len1 + 1),
			i = 0, j, ret = '';

	// 初始化二维数组每一个值都为0
	for ( ; i <= len1 + 1; i++) {
		lcsarr[i] = new Array(len2 + 1);
		for (j = 0; j <= len2 + 1; j++) {
			lcsarr[i][j] = 0;
		}
	}
	// 循环遍历所有的字母
	// 如果字母相等，那么对应的长度就是
	// 单词1和单词2上一个位置上所对应的
	// 长度值加1，否则就是当前的两个单词
	// 对应位置上的值不相等，长度值为0
	for (i = 0; i <= len1; i++) {
		for (j = 0; j <= len2; j++) {
			if (i === 0 || j === 0) {
				lcsarr[i][j] = 0;
			} else {
				if (word1[i - 1] === word2[j - 1]) {
					lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			// 如果出现了新的最长长度
			// 那么就对max重新赋值
			// 将index也重新赋值
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				index = i;
			}
		}
	}

	if (max === 0) {
		ret = '';
	} else {
		// 从index - max的位置开始 取得单词2中
		// 到max长度位置的所有字母加起来就是
		// 需要的结果
		for (i = index - max; i <= max; i++) {
			ret += word2[i];
		}
	}
	return ret;
}