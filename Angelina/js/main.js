let table = document.querySelector('.table__wrapper');
let seat = document.getElementById('seat');
let line = document.getElementById('line');
let cells = document.querySelectorAll('.table__cell');
let values = document.querySelectorAll('.table__value');


table.addEventListener('click', function (event) {

	if (event.target.className != 'table__value') {
		return;
	}

	let cellValue = event.target.innerHTML;
	let rowValue = event.target.closest('.table__line').id;

	line.innerHTML = rowValue;
	seat.innerHTML = cellValue;

	for (let cell of cells) {
		if (cell.style.background == 'yellow') {
			cell.style.background = '';
		} else {
			event.target.closest('.table__cell').style.background = 'yellow';
		}
	}

	for (let value of values) {
		if (value.style.color == 'black') {
			value.style.color = '';
		} else {
			event.target.style.color = 'black';
		}
	}
})
