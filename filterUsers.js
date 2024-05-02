const filterUsers = (users, condition) => users
    .filter(
        u => condition.isActive
            ? u.isActive === condition.isActive && u.age >= condition.age
            : u.age >= condition.age
    )


const users = [
    {id: 1, name: 'Alice', age: 25, isActive: true},
    {id: 2, name: 'Bob', age: 30, isActive: false},
    {id: 3, name: 'Charlie', age: 22, isActive: true},
];

console.log(filterUsers(users, {age: 23, isActive: false}));