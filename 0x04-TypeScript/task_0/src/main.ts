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
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  const thName: HTMLTableCellElement = document.createElement('th');
  thName.textContent = 'First Name';
  const thLocation: HTMLTableCellElement = document.createElement('th');
  thLocation.textContent = 'Location';

  headerRow.appendChild(thName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  for (const student of students) {
    const row: HTMLTableRowElement = document.createElement('tr');
    const tdName: HTMLTableCellElement = document.createElement('td');
    tdName.textContent = student.firstName;
    const tdLocation: HTMLTableCellElement = document.createElement('td');
    tdLocation.textContent = student.location;
    row.appendChild(tdName);
    row.appendChild(tdLocation);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});

export {};
