interface teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
}

const teacher3: teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);