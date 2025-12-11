interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York',
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

function renderStudentsTable(students: Student[]): void {
	const table = document.createElement('table');

	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const thName = document.createElement('th');
	thName.textContent = 'First Name';
	const thLocation = document.createElement('th');
	thLocation.textContent = 'Location';
	headerRow.appendChild(thName);
	headerRow.appendChild(thLocation);
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement('tbody');
	students.forEach((student) => {
		const row = document.createElement('tr');
		const tdName = document.createElement('td');
		tdName.textContent = student.firstName;
		const tdLocation = document.createElement('td');
		tdLocation.textContent = student.location;
		row.appendChild(tdName);
		row.appendChild(tdLocation);
		tbody.appendChild(row);
	});

	table.appendChild(tbody);
	document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
	renderStudentsTable(studentsList);
});

