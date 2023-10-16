    // Define the luxury car objects
    const cars = [
        {
          make: 'BMW',
          model: 'M5',
          year: 2023,
          price: 105000,
          color: 'Black'
        },
        {
          make: 'Mercedes-Benz',
          model: 'S-Class',
          year: 2023,
          price: 110000,
          color: 'Silver'
        },
        {
          make: 'Audi',
          model: 'A8',
          year: 2023,
          price: 100000,
          color: 'White'
        },
        {
          make: 'Lamborghini',
          model: 'Aventador',
          year: 2023,
          price: 400000,
          color: 'Yellow'
        },
        {
          make: 'Ferrari',
          model: '488 GTB',
          year: 2023,
          price: 300000,
          color: 'Red'
        },
        {
          make: 'Porsche',
          model: '911 Turbo',
          year: 2023,
          price: 140000,
          color: 'Blue'
        },
        {
          make: 'Rolls-Royce',
          model: 'Phantom',
          year: 2023,
          price: 450000,
          color: 'Black'
        },
        {
          make: 'Bentley',
          model: 'Continental GT',
          year: 2023,
          price: 200000,
          color: 'Green'
        },
        {
          make: 'Bugatti',
          model: 'Chiron',
          year: 2023,
          price: 3000000,
          color: 'Black and Blue'
        },
        {
          make: 'McLaren',
          model: '720S',
          year: 2023,
          price: 280000,
          color: 'Orange'
        }
      ];
  

    // Display the cars
    const displayArea = document.querySelector('#display-area');
    function displayCars() {
      displayArea.innerHTML = '<h2>Car Inventory</h2>';
      cars.forEach((car, index) => {
        displayArea.innerHTML += `
          <p>${index + 1}. ${car.make} ${car.model}, ${car.year}, $${car.price}, ${car.color}</p>
        `;
      });
    }
    displayCars();

    // Create Car
    const createButton = document.querySelector('#create-button');
    createButton.onclick = () => {
      const make = document.querySelector('#make').value;
      const model = document.querySelector('#model').value;
      const year = parseInt(document.querySelector('#year').value);
      const price = parseInt(document.querySelector('#price').value);
      const color = document.querySelector('#color').value;

      const newCar = { make, model, year, price, color };
      cars.push(newCar);
      displayCars();
      document.querySelector('#create-form').reset();
    };

    // Read Car Details
    const readButton = document.querySelector('#read-button');
    readButton.onclick = () => {
      const makeModel = document.querySelector('#make-model').value;
      const foundCar = cars.find((car) =>
        car.make.toLowerCase() === makeModel.toLowerCase() ||
        car.model.toLowerCase() === makeModel.toLowerCase()
      );
      if (foundCar) {
        displayArea.innerHTML = `<h2>${foundCar.make} ${foundCar.model} Details</h2>`;
        displayArea.innerHTML += `
          <p>Year: ${foundCar.year}</p>
          <p>Price: $${foundCar.price}</p>
          <p>Color: ${foundCar.color}</p>
        `;
      } else {
        displayArea.innerHTML = '<p>Car not found.</p>';
      }
    };

    // Update Car Details
    const updateButton = document.querySelector('#update-button');
    updateButton.onclick = () => {
      const updateMakeModel = document.querySelector('#update-make-model').value;
      const newPrice = parseInt(document.querySelector('#new-price').value);

      const foundCar = cars.find((car) =>
        car.make.toLowerCase() === updateMakeModel.toLowerCase() ||
        car.model.toLowerCase() === updateMakeModel.toLowerCase()
      );
      if (foundCar) {
        foundCar.price = newPrice;
        displayCars();
        document.querySelector('#update-form').reset();
      } else {
        displayArea.innerHTML = '<p>Car not found.</p>';
      }
    };

    // Delete Car
    const deleteButton = document.querySelector('#delete-button');
    deleteButton.onclick = () => {
      const deleteMakeModel = document.querySelector('#delete-make-model').value;
      const carIndex = cars.findIndex((car) =>
        car.make.toLowerCase() === deleteMakeModel.toLowerCase() ||
        car.model.toLowerCase() === deleteMakeModel.toLowerCase()
      );
      if (carIndex !== -1) {
        cars.splice(carIndex, 1);
        displayCars();
        document.querySelector('#delete-form').reset();
      } else {
        displayArea.innerHTML = '<p>Car not found.</p>';
      }
    };