const users = [
    {
        id: 1,
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        id: 2,
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        id: 3,
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        id: 4,
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        id: 5,
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

function printUsers() {
    const container = document.getElementById('container-users');
    let html = '';
    users.forEach((user) => {
        html += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender}</td>
                    <td>${user.id}</td>
                    <td>
                        <button onclick="deleteUser(${user.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>`
    });
    container.innerHTML = html;
}

function deleteUser(id) {
    alert(`Se va eliminar el usuario ${id}`);
    const index = users.findIndex((user) => user.id == id);
    users.splice(index,1);
    printUsers();
}

function addUser() {
    const inputName = document.getElementById('name');
    const name = inputName.value;

    const email = document.getElementById('email').value;

    const id = users[users.length -1].id +1;

    const newUser = {
        name: name,
        email,
        id
    }
    users.push(newUser);
    printUsers();

    document.getElementById('form-users').reset();
}


printUsers();