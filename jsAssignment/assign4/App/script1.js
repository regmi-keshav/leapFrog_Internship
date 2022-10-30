let bars = [];
const def = "#fd0081", chng = "#431f91", finished = "#8ef511", selected = "yellow";

window.onload = setup();
async function setup() {
	let b = document.getElementById("bars");
	let d = document.getElementById("delay");
	document.getElementById("b").innerText = b.value;
	document.getElementById("d").innerText = d.value + "ms";

	if (bars.length != parseInt(b.value)) {
		generateBars(parseInt(b.value));
	}
}


function reset() {
	location.reload();
}


function Disable_The_Input() {
	let x = document.getElementsByTagName("input");
	for (let i = 0; i < x.length; i++)
		x[i].disabled = true;
	return parseInt(document.getElementById("delay").value);
}


function Finished_Sorting() {
	let x = document.getElementsByClassName("bar");
	for (let i = 0; i < x.length; i++)
		x[i].style.backgroundColor = finished;
	x = document.getElementsByTagName("input");
	for (let i = 0; i < x.length; i++)
		x[i].disabled = false;

}


function generateBars(n = -1) {
	bars = [];
	let container = document.getElementById("container");
	n = n < 0 ? Math.random() * 20 : n;
	for (let i = 0; i < n; i++) {
		bars.push('<div class="bar" id="' + i + '" style="height:' + Math.floor(2 + Math.random() * 98) + '%"></div>');
	}
	container.innerHTML = bars.join('');
}


function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function MapRange(value, in_min, in_max, out_min, out_max) {
	return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
//=============================== Sorting Algorithms ==================================//


// 1
// SELECTION SORT

// SelectionSort() : Implementation of selection sort algorithm. O(n^2) 
async function SelectionSortAscending() {
	let delay = Disable_The_Input();

	let container = document.getElementById("container");
	for (let i = 0; i < bars.length; i++) {
		let mn_ind = i;
		let curr_id = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		for (let j = i + 1; j < bars.length; j++) {
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			let a = parseInt(bars[mn_ind].split(/[:%]/)[1]);
			let b = parseInt(bars[j].split(/[:%]/)[1]);
			if (a > b) mn_ind = j;
			await Sleep(delay / 5.0);
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}

		let nxt_ele = bars[mn_ind].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = selected;
		await Sleep(2 * delay / 5.0);

		let tmp = bars[mn_ind];
		bars[mn_ind] = bars[i];
		bars[i] = tmp;

		container.innerHTML = bars.join('');
		await Sleep(2 * delay / 5.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}

async function SelectionSortDescending() {
	let delay = Disable_The_Input();

	let container = document.getElementById("container");
	for (let i = 0; i < bars.length; i++) {
		let mn_ind = i;
		let curr_id = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		for (let j = i + 1; j < bars.length; j++) {
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			let a = parseInt(bars[mn_ind].split(/[:%]/)[1]);
			let b = parseInt(bars[j].split(/[:%]/)[1]);
			if (a < b) mn_ind = j;
			await Sleep(delay / 5.0);
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}

		let nxt_ele = bars[mn_ind].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = selected;
		await Sleep(2 * delay / 5.0);

		let tmp = bars[mn_ind];
		bars[mn_ind] = bars[i];
		bars[i] = tmp;

		container.innerHTML = bars.join('');
		await Sleep(2 * delay / 5.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}






// 2
// BUBBLE SORT

// BubbleSort() : Implementation of bubble sort algorithm. O(n^2)
async function BubbleSortAscending() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");

	for (let i = 0; i < bars.length - 1; i++) {
		let has_swap = false;
		for (let j = 0; j < bars.length - i - 1; j++) {
			let curr_id = bars[j].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j + 1].split('id="')[1].split('"')[0];

			document.getElementById(curr_id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, delay)
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2);
			let a = parseInt(bars[j].split(/[:%]/)[1]);
			let b = parseInt(bars[j + 1].split(/[:%]/)[1]);
			if (a > b) {
				has_swap = true;

				let t = bars[j];
				bars[j] = bars[j + 1];
				bars[j + 1] = t;

				container.innerHTML = bars.join('');
			}
			document.getElementById(curr_id).style.backgroundColor = selected;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2.0);
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
		if (has_swap == false) break;
	}
	Finished_Sorting();
}

async function BubbleSortDescending() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");

	for (let i = 0; i < bars.length - 1; i++) {
		let has_swap = false;
		for (let j = 0; j < bars.length - i - 1; j++) {
			let curr_id = bars[j].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j + 1].split('id="')[1].split('"')[0];

			document.getElementById(curr_id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, delay)
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2);
			let a = parseInt(bars[j].split(/[:%]/)[1]);
			let b = parseInt(bars[j + 1].split(/[:%]/)[1]);
			if (a < b) {
				has_swap = true;

				let t = bars[j];
				bars[j] = bars[j + 1];
				bars[j + 1] = t;

				container.innerHTML = bars.join('');
			}
			document.getElementById(curr_id).style.backgroundColor = selected;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2.0);
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
		if (has_swap == false) break;
	}
	Finished_Sorting();
}





// 3
// INSERTION SORT

// InsertionSort() : Implementation of inserion sort algorithm. O(n^2) 
async function InsertionSortAscending() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");
	for (let i = 1; i < bars.length; i++) {
		let j = i - 1;
		let key = bars[i];
		let curr_id = key.split('id="')[1].split('"')[0];
		let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		while (j >= 0 && parseInt(bars[j].split(/[:%]/)[1]) > parseInt(key.split(/[:%]/)[1])) {
			document.getElementById(nxt_ele).style.backgroundColor = def;
			nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay);
			bars[j + 1] = bars[j];
			j--;
		}

		bars[j + 1] = key;
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(delay * 3.0 / 5);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}

async function InsertionSortDescending() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");
	for (let i = 1; i < bars.length; i++) {
		let j = i - 1;
		let key = bars[i];
		let curr_id = key.split('id="')[1].split('"')[0];
		let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		while (j >= 0 && parseInt(bars[j].split(/[:%]/)[1]) < parseInt(key.split(/[:%]/)[1])) {
			document.getElementById(nxt_ele).style.backgroundColor = def;
			nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay);
			bars[j + 1] = bars[j];
			j--;
		}

		bars[j + 1] = key;
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(delay * 3.0 / 5);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}


// 4
// MERGE SORT
// Slide_down() : Places bars[r] at lth position by sliding other bars to the right. 
function Slide_down(l, r) {
	let temp = bars[r];
	for (let i = r - 1; i >= l; i--) {
		bars[i + 1] = bars[i];
	}
	bars[l] = temp;
}


async function mergeA(l, m, r, d) {
	let y = l;
	let i = l;
	let j = m + 1;

	while (i < j && j <= r) {
		let curr_id = bars[j].split('id="')[1].split('"')[0];
		let nxt_ele = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[i].split(/[:%]/)[1]);

		if (a > b) i++;
		else {
			Slide_down(i, j);
			i++; j++;
		}
		await Sleep(d / 2.0);
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		await Sleep(d / 2.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
		sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
	}
}

async function mergeD(l, m, r, d) {
	let y = l;
	let i = l;
	let j = m + 1;

	while (i < j && j <= r) {
		let curr_id = bars[j].split('id="')[1].split('"')[0];
		let nxt_ele = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[i].split(/[:%]/)[1]);

		if (a < b) i++;
		else {
			Slide_down(i, j);
			i++; j++;
		}
		await Sleep(d / 2.0);
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		await Sleep(d / 2.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
		sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
	}
}

async function mergeSortA(l, r, d) {
	if (l < r) {
		let m = parseInt(l + (r - l) / 2);
		await mergeSortA(l, m, d);
		await mergeSortA(m + 1, r, d);
		await mergeA(l, m, r, d);
	}
}


async function MergeSortAscending() {
	let delay = Disable_The_Input();
	await mergeSortA(0, bars.length - 1, delay);
	Finished_Sorting();
}


async function mergeSortD(l, r, d) {
	if (l < r) {
		let m = parseInt(l + (r - l) / 2);
		await mergeSortD(l, m, d);
		await mergeSortD(m + 1, r, d);
		await mergeD(l, m, r, d);
	}
}


async function MergeSortDescending() {
	let delay = Disable_The_Input();
	await mergeSortD(0, bars.length - 1, delay);
	Finished_Sorting();
}




// 5
// QUICK SORT
// Partition(): Places the (r)th bar at the correct position 
async function PartitionA(l, r, d) {
	let i = l - 1;
	let j = l;
	let id = bars[r].split('id="')[1].split('"')[0];
	document.getElementById(id).style.backgroundColor = selected;
	for (j = l; j < r; j++) {
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[r].split(/[:%]/)[1]);
		if (a < b) {
			i++;
			let curr_id = bars[i].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;

			let temp = bars[i];
			bars[i] = bars[j];
			bars[j] = temp;

			await Sleep(d / 3.0);
			container.innerHTML = bars.join('');
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			document.getElementById(id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, d)
			await Sleep(d / 3.0)
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
	}

	let temp = bars[i + 1];
	bars[i + 1] = bars[r];
	bars[r] = temp;

	container.innerHTML = bars.join(' ');
	document.getElementById(id).style.backgroundColor = selected;
	await Sleep(d / 3.0);
	document.getElementById(id).style.backgroundColor = def;
	return i + 1;
}


async function quickSortA(l, r, d) {
	if (l < r) {
		let p = await PartitionA(l, r, d);
		await quickSortA(l, p - 1, d);
		await quickSortA(p + 1, r, d);
	}
}


async function QuickSortAscending() {
	let delay = Disable_The_Input();
	await quickSortA(0, bars.length - 1, delay);
	Finished_Sorting();
}

//Descending

async function PartitionD(l, r, d) {
	let i = l - 1;
	let j = l;
	let id = bars[r].split('id="')[1].split('"')[0];
	document.getElementById(id).style.backgroundColor = selected;
	for (j = l; j < r; j++) {
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[r].split(/[:%]/)[1]);
		if (a > b) {
			i++;
			let curr_id = bars[i].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;

			let temp = bars[i];
			bars[i] = bars[j];
			bars[j] = temp;

			await Sleep(d / 3.0);
			container.innerHTML = bars.join('');
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			document.getElementById(id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, d)
			await Sleep(d / 3.0)
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
	}

	let temp = bars[i + 1];
	bars[i + 1] = bars[r];
	bars[r] = temp;

	container.innerHTML = bars.join(' ');
	document.getElementById(id).style.backgroundColor = selected;
	await Sleep(d / 3.0);
	document.getElementById(id).style.backgroundColor = def;
	return i + 1;
}


async function quickSortD(l, r, d) {
	if (l < r) {
		let p = await PartitionD(l, r, d);
		await quickSortD(l, p - 1, d);
		await quickSortD(p + 1, r, d);
	}
}


async function QuickSortDescending() {
	let delay = Disable_The_Input();
	await quickSortD(0, bars.length - 1, delay);
	Finished_Sorting();
}





// 6
// HEAP SORT
// Heapfiy(): Creates a max heap.
async function HeapfiyA(n, i, d) {
	let largest = i;
	let l = 2 * i + 1; // lft
	let r = 2 * i + 2; // rgt
	let curr_id = bars[i].split('id="')[1].split('"')[0];
	let nxt_ele;
	let id3;

	document.getElementById(curr_id).style.backgroundColor = selected;
	if (r < n) {
		id3 = bars[r].split('id="')[1].split('"')[0];
		document.getElementById(id3).style.backgroundColor = chng;
	}
	if (l < n) {
		nxt_ele = bars[l].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = chng;
	}
	await Sleep(d / 3.0)
	if (l < n && parseInt(bars[l].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = l;
	if (r < n && parseInt(bars[r].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = r;

	if (largest != i) {
		let t = bars[i]; bars[i] = bars[largest]; bars[largest] = t;
		container.innerHTML = bars.join(' ');
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		if (r < n) document.getElementById(id3).style.backgroundColor = chng;
		if (l < n) document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(d / 3.0)
		container.innerHTML = bars.join(' ');
		await HeapfiyA(n, largest, d);
	}
	container.innerHTML = bars.join(' ');
}


async function HeapSortAscending() {
	let delay = Disable_The_Input();
	let n = bars.length;
	for (let i = n / 2 - 1; i >= 0; i--) // Build the heap
		await HeapfiyA(n, i, delay);

	for (let i = n - 1; i >= 0; i--) {
		let t = bars[0]; // Swaping
		bars[0] = bars[i];
		bars[i] = t;

		container.innerHTML = bars.join(' ');
		await HeapfiyA(i, 0, delay);
	}
	Finished_Sorting();
} 

//Descending

async function HeapfiyD(n, i, d) {
	let smallest = i;
	let l = 2 * i + 1; // lft
	let r = 2 * i + 2; // rgt
	let curr_id = bars[i].split('id="')[1].split('"')[0];
	let nxt_ele;
	let id3;

	document.getElementById(curr_id).style.backgroundColor = selected;
	if (r < n) {
		id3 = bars[r].split('id="')[1].split('"')[0];
		document.getElementById(id3).style.backgroundColor = chng;
	}
	if (l < n) {
		nxt_ele = bars[l].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = chng;
	}
	await Sleep(d / 3.0)
	if (l < n && parseInt(bars[l].split(/[:%]/)[1]) < parseInt(bars[smallest].split(/[:%]/)[1]))
		smallest = l;
	if (r < n && parseInt(bars[r].split(/[:%]/)[1]) < parseInt(bars[smallest].split(/[:%]/)[1]))
		smallest = r;

	if (smallest != i) {
		let t = bars[i]; bars[i] = bars[smallest]; bars[smallest] = t;
		container.innerHTML = bars.join(' ');
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		if (r < n) document.getElementById(id3).style.backgroundColor = chng;
		if (l < n) document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(d / 3.0)
		container.innerHTML = bars.join(' ');
		await HeapfiyD(n, smallest, d);
	}
	container.innerHTML = bars.join(' ');
}


async function HeapSortDescending() {
	let delay = Disable_The_Input();
	let n = bars.length;
	for (let i = n/2-1; i >= 0; i--) // Build the heap
		await HeapfiyD(n, i, delay);

	for (let i = n-1; i >= 0; i--) {
        let t = bars[0]; // Swaping
		bars[0] = bars[i];
		bars[i] = t;

		container.innerHTML = bars.join(' ');
		await HeapfiyD(i, 0, delay);
	}
	Finished_Sorting();
}