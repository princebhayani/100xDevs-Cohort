interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const result = sumOfAge(
    { name: "qwe", age: 23 },
    { name: "dfd", age: 65 }
);
console.log(result);