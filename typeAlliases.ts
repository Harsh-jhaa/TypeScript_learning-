type User = {
  readonly name: string;
  //   readonly means that the property cannot be changed after it is assigned
  age: number;
  isActive: boolean;
  email?: string;
  //   ? means optional property
};

function createUser(user: User): User {
  return { name: 'Jha', age: 25, isActive: true };
}

createUser({ name: 'Jha', age: 25, isActive: true });
