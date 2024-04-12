//axios vs fetch
//https://sum-server.100xdevs.com/todos
const axios = require("axios");

function  main() {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async res =>{
        const json = await res.json();
        console.log(json.todos.length);
    })
}

async function main2(){
    const res = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(res.data.todos.length);
}

main();
main2();