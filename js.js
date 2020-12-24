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
];

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

function addEntry() {
    const brand = document.getElementById('brand').value;

    const model = document.getElementById('model').value;

    const color = document.getElementById('color').value;

    const year = document.getElementById('year').value;

    const price = document.getElementById('price').value;

    const id = cars[cars.length -1].id +1;

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

    document.getElementById('form-cars').reset();
}

printCars();