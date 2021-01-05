const cars = [
    {
        id: 1,
        brand: 'Ford',
        model: 'Focus',
        color: 'Rojo pasión',
        year: '2016',
        price: '200,000'
    },
    {
        id: 2,
        brand: 'Mazda',
        model: '3 HB',
        color: 'Negro metálico',
        year: '2017',
        price: '230,000'
    },
    {
        id: 3,
        brand: 'Nissan',
        model: 'Altima',
        color: 'Blanco',
        year: '2017',
        price: '300,000'
    },
    {
        id: 4,
        brand: 'BMW',
        model: 'Serie M3',
        color: 'Azul océano',
        year: '2018',
        price: '750,000'
    },
    {
        id: 5,
        brand: 'Ford',
        model: 'Raptor 4x4',
        color: 'Negro mate',
        year: '2019',
        price: '1,975,000'
    },
] && JSON.parse(localStorage.getItem('cars')) || [];

let updating = false;
let updatingId = -1;

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((entry) => {
        html += `<tr>
                    <td>${entry.id}</td>
                    <td>${entry.brand}</td>
                    <td>${entry.model}</td>
                    <td>${entry.color}</td>
                    <td>${entry.year}</td>
                    <td>${entry.price}</td>
                    <td>
                        <button onclick="deleteCar(${entry.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                        <button onclick="enableUpdateEntry(${entry.id})" class="btn btn-warning">
                            Actualizar
                        </button>
                    </td>
                </tr>`
    });
    container.innerHTML = html;
}

function deleteCar(id) {
    alert(`Se va eliminar la entrada ${id}`);
    const index = cars.findIndex((entry) => entry.id == id);
    cars.splice(index,1);
    printCars();
}

function enableUpdateEntry(id) {
    updatingId = id;
    const entry = cars.find((entry) => entry.id === id);

    document.getElementById('brand').value = entry.brand;

    document.getElementById('model').value = entry.model;

    document.getElementById('color').value = entry.color;

    document.getElementById('year').value = entry.year;

    document.getElementById('price').value = entry.price;

    updating = true;

    const button = document.getElementById('save');
    button.textContent = 'Actualizar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    document.getElementById('cancel').classList.remove('d-none');
}

function addEntry() {
    if(updating) {
        updateEntry();
        return;
    }
    const brand = document.getElementById('brand').value;

    const model = document.getElementById('model').value;

    const color = document.getElementById('color').value;

    const year = document.getElementById('year').value;

    const price = document.getElementById('price').value;

    let id = 1;
    if(cars.length > 0) {
        id = cars[cars.length -1].id +1;
    }

    const newEntry = {
        brand,
        model,
        color,
        year,
        price,
        id
    }

    cars.push(newEntry);
    printCars();

    localStorage.setItem('cars', JSON.stringify(cars));

    document.getElementById('form-cars').reset();
}

function updateEntry() {
    const entry = cars.find((entry) => entry.id === updatingId);

    const brand = document.getElementById('brand').value;

    const model = document.getElementById('model').value;

    const color = document.getElementById('color').value;

    const year = document.getElementById('year').value;

    const price = document.getElementById('price').value;

    entry.brand = brand;
    entry.model = model;
    entry.color = color;
    entry.year = year;
    entry.price = price;

    printCars();

    document.getElementById('form-cars').reset();

    cancelEdition();
}

function cancelEdition() {
    document.getElementById('form-cars').reset();

    updating = false;
    updatingId = -1;
    const button = document.getElementById('save');
    button.textContent = 'Submit';
    button.classList.remove('btn-warning');
    button.classList.add('btn-primary');
    document.getElementById('cancel').classList.add('d-none');
}

printCars();