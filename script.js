function query(selector) {
	return document.querySelector(selector);
}
function queryAll(selector) {
	return document.querySelectorAll(selector);
}

let parkingForm = query('#parking-form');
parkingForm.addEventListener('submit', function() {
	event.preventDefault();
	checkName();
	checkCarField();
	checkStartDate();
});

function checkName() {
	let name = query('#name');
	if (name.value.trim() !== '') {
		name.parentNode.classList.remove('input-invalid');
	} else {
		name.parentNode.classList.add('input-invalid');
	}
}
function checkCarField() {
	let inputGroup = query('.input-group');
	let carYearField = query('#car-year');
	let carMakeField = query('#car-make');
	let carModelField = query('#car-model');
	let year = carYearField.value.trim();
	let make = carMakeField.value.trim();
	let model = carModelField.value.trim();
	if (year !== '' && make !== '' && model !== '') {
		inputGroup.parentNode.classList.remove('input-invalid');
	} else {
		inputGroup.parentNode.classList.add('input-invalid');
	}
}
function checkStartDate() {
	let startDate = query('#start-date');
	// let startDateCheck = startDate.value.trim();
	if (startDate.value.trim() !== '') {
		startDate.parentNode.classList.add('input-valid');
		startDate.parentNode.classList.remove('input-invalid');
	} else {
		startDate.parentNode.classList.add('input-invalid');
		startDate.parentNode.classList.remove('input-valid');
		let errorMessage = document.createElement('div');
		errorMessage.innerHTML = `<div class="error-msg" style="color:red">field is required</div>`;
		let inputField = query('#start-date-field');
		inputField.appendChild(errorMessage);
	}
}	
	//trying to remove error message
// 		for (let msg of errorMessage.query('.error-msg')) {
// 		msg.remove();
// 	}
// }


// function clearErrorMsgs(inputField) {
// 	for (let errorMessage of inputField.query('#star-date-field')) {
// 		errorMessage.remove();

// 	}
// 
