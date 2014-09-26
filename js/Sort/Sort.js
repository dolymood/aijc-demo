/*********** 基本排序 ************/

/**
 * 对数组进行冒泡排序
 * @param  {Array} ary 目标数组
 * @return {Undefined} undefined
 */
function bubbleSort(ary) {
	var outer = ary.length,
			inner = 0, tmp;
	for ( ; outer >= 2; outer--) {
		for (inner = 0; inner <= outer - 1; inner++) {
			if (ary[inner] > ary[inner + 1]) {
				tmp = ary[inner];
				ary[inner] = ary[inner + 1];
				ary[inner + 1] = tmp;
			}
		}
	}
}

/**
 * 对数组进行选择排序
 * @param  {Array} ary 目标数组
 * @return {Undefined} undefined
 */
function selectionSort(ary) {
	var outer = 0,
			len = ary.length,
			tmp, inner;
	for ( ; outer <= len - 2; outer++) {
		for (inner = outer + 1; inner <= len - 1; inner++) {
			if (ary[inner] < ary[outer]) {
				tmp = ary[inner];
				ary[inner] = ary[outer];
				ary[outer] = tmp;
			}
		}
	}
}

/**
 * 对数组进行插入排序
 * @param  {Array} ary 目标数组
 * @return {Undefined} undefined
 */
function insertionSort(ary) {
	var outer = 1,
			len = ary.length,
			inner, tmp;

	for ( ; outer < len; outer++) {
		tmp = ary[outer];
		inner = outer;
		while (inner > 0 && ary[inner - 1] >= tmp) {
			ary[inner] = ary[inner - 1];
			inner--;
		}
		ary[inner] = tmp;
	}
}

/*********** 高级排序 ************/

/**
 * 对数组进行希尔排序（动态计算gap间隔）
 * @param  {Array} ary  目标数组
 * @return {Undefined}  undefined
 */
function shellSort(ary) {
	var h = 1,
			len = ary.length,
			i, j, tmp;

	// 《算法》中的计算间隔的公式
	while (h < len / 3) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (i = h; i < len; i++) {
			for (j = i; j >= h && ary[j] < ary[j - h]; j -= h) {
				tmp = ary[j];
				ary[j] = ary[j - h];
				ary[j - h] = tmp;
			}
		}
		h = (h - 1) / 3;
	}
}

var mergeSort = (function() {

	/**
	 * 对数组进行归并排序
	 * @param  {Array} ary  目标数组
	 * @return {Undefined}  undefined
	 */
	function mergeSort(ary) {
		var len = ary.length;
		if (len < 2) return;

		// 初始step是1 下次是2 再下次是4
		var step = 1, left, right;
		while (step < len) {
			left = 0;
			right = step;
			while (right + step <= len) {
				mergeArrays(ary, left, left + step, right, right + step);
				// 下次就是把left位置移至right加上step的位置
				left = right + step;
				right = left + step;
			}
			if (right < len) {
				mergeArrays(ary, left, left + step, right, len);
			}
			step *= 2;
		}
	}

	/**
	 * 对数组按照位置合并
	 * @param  {Array}    ary        数组
	 * @param  {Number}   startLeft  开始左子数组位置
	 * @param  {Number}   stopLeft   结束左子数组位置
	 * @param  {Number}   startRight 开始右子数组位置
	 * @param  {Number}   stopRight  结束右子数组位置
	 * @return {Undefined}            undefined
	 */
	function mergeArrays(ary, startLeft, stopLeft, startRight, stopRight) {
		// 创建的左右子数组
		var rightArr = new Array(stopRight - startRight + 1),
				leftArr = new Array(stopLeft - startLeft + 1),
				ral = rightArr.length - 1,
				lal = leftArr.length - 1,
				i = 0, m = 0, n = 0,
				k = startRight;

		// 对右子数组进行赋值
		for ( ; i < ral; i++) {
			rightArr[i] = ary[k];
			k++;
		}

		// 对左子数组进行赋值
		k = startLeft;
		for (i = 0 ; i < lal; i++) {
			leftArr[i] = ary[k];
			k++;
		}

		// 标记结尾 也叫 哨兵值
		rightArr[ral] = Infinity;
		leftArr[lal] = Infinity;

		// 对ary从指定开始到结束位置排序
		// 可以使得当前这段范围内的ary是排好序的
		for (k = startLeft; k < stopRight; k++) {
			if (leftArr[m] <= rightArr[n]) {
				ary[k] = leftArr[m];
				m++;
			} else {
				ary[k] = rightArr[n];
				n++;
			}
		}

	}

	return mergeSort;
}());

/**
 * 对数组进行快速排序
 * @param  {Array} ary 目标数组
 * @return {Array}     排序后的数组
 */
function quickSort(ary) {
	var left = [],
			right = [],
			base = ary[0],
			i = 1,
			len = ary.length;

	if (len < 2) return ary;

	for ( ; i < len; i++) {
		if (ary[i] < base) {
			left.push(ary[i]);
		} else {
			right.push(ary[i]);
		}
	}

	return quickSort(left).concat(base, quickSort(right));
}

/**
 * 对数组进行快速排序（更快）
 * @param  {Array}    ary   目标数组
 * @param  {Number}   start 开始位置
 * @param  {Number}   end   结束位置
 * @return {Undefined}      undefined
 */
function quickSort2(arr, start, end) {
	var base = arr[start];
	var i = start;
	var j = end;

	while (i < j) {
		// 从右边开始找，如果大于base的话，就让j减一
		// 直到遇到一个比base小的停止
		while (j > start && arr[j] >= base) {
			j--;
		}
		// 然后从左侧往右找，如果小于base的值，就让i加一
		// 直到遇到一个比base大的停止
		while (i < j && arr[i] <= base) {
			i++;
		}
		// 交换 i j位置上的数
		if (i < j) {
			arr[i] = [arr[j], arr[j] = arr[i]][0];
		}
	}
	arr[start] = [arr[i], arr[i] = arr[start]][0];

	if (i - 1 > start) {
		quickSort2(arr, start, i - 1);
	}

	if (i + 1 < end) {
		quickSort2(arr, i + 1, end);
	}
}