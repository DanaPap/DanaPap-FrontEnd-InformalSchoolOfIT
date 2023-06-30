// Highway class
class Highway {
  constructor(vignetteCost) {
    this.vehicleList = [];
    this.vignetteCost = vignetteCost;
  }

  enterHighway(vehicle) {
    this.vehicleList.push(vehicle);
    console.log(`${vehicle.driver.name} entered the highway.`);
    if (vehicle instanceof Car) {
      vehicle.payVignette(this.vignetteCost);
      vehicle.increaseSpeed();

setTimeout( function(){
  console.log(vehicle.name + 'reached destination');
},5000);
    } else if (vehicle instanceof Police) {
      console.log(`${vehicle.driver.name} (Police) entered the highway.`);
    }
  }

  verifySpeedLimits() {
    console.log('--- Speed Limit Verification ---');
    this.vehicleList.forEach((vehicle) => {
      const speedLimit = Police.speedLimitsByVehicleType[vehicle.constructor.name];
      const fineAmount = Police.fineByVehicleType[vehicle.constructor.name];
      if (vehicle.runningSpeed > speedLimit) {
        console.log(`${vehicle.driver.name} (Type: ${vehicle.constructor.name}) exceeded the speed limit. Fine: $${fineAmount}`);
        vehicle.driver.payFine(fineAmount);
      } else {
        console.log(`${vehicle.driver.name} (Type: ${vehicle.constructor.name}) is within the speed limit.`);
      }
    });
    console.log('--- End of Speed Limit Verification ---');
  }
}

// Vehicle class
class Vehicle {
  constructor(name, runningSpeed, driver) {
    this.name = name;
    this.runningSpeed = runningSpeed;
    this.driver = driver;
  }

  increaseSpeed() {
    console.log(`${this.driver.name} is increasing speed.`);
    this.runningSpeed += 10;
  }
}

// Car class (inherits Vehicle)
class Car extends Vehicle {
  constructor(name, runningSpeed, driver) {
    super(name, runningSpeed, driver);
  }

  payVignette(cost) {
    console.log(`${this.driver.name} paid the vignette fee of $${cost}.`);
  }
}

// Bus class (inherits Vehicle)
class Bus extends Vehicle {
  constructor(name, runningSpeed, driver) {
    super(name, runningSpeed, driver);
  }
}

// Truck class (inherits Vehicle)
class Truck extends Vehicle {
  constructor(name, runningSpeed, driver) {
    super(name, runningSpeed, driver);
  }
}

// Driver class
class Driver {
  constructor(name, walletMoney) {
    this.name = name;
    this.walletMoney = walletMoney;
  }

  payFine(amount) {
    console.log(`${this.name} paid a fine of $${amount}.`);
    this.walletMoney -= amount;
  }
}

// Police class (inherits Vehicle)
class Police extends Vehicle {
  constructor(name, runningSpeed, driver) {
    super(name, runningSpeed, driver);
  }

  static speedLimitsByVehicleType = {
    Car: 135,
    Bus: 95,
    Truck: 100,
  };

  static fineByVehicleType = {
    Car: 130,
    Bus: 190,
    Truck: 300,
  };

  checkVehicleSpeed(vehicle) {
    var speedLimit = Police.speedLimitsByVehicleType[vehicle.constructor.name];
    console.log(`Police checked the speed of ${vehicle.driver.name} (Type: ${vehicle.constructor.name}). Speed Limit: ${speedLimit}`);
  }
}

// Instantiate drivers
var driver1 = new Driver('Dana Pap', 500);
var driver2 = new Driver('Bianca Pop', 700);
var driver3 = new Driver('Andreea Fuleki', 1400);
var driver4 = new Driver('Oana Pap', 800);


// Instantiate vehicles
var car1 = new Car('Car 1', 100, driver1);
var bus1 = new Bus('Bus 1', 90, driver2);
var truck1 = new Truck('Truck 1', 80, driver3);

// Instantiate police car
var policeCar = new Police('Police Car', 120, driver4);

// Instantiate highway
var highway = new Highway(20);

// Enter vehicles to the highway
highway.enterHighway(car1); // Car enters (pays vignette, speed increased)
highway.enterHighway(bus1); // Bus enters (pays vignette, speed increased)
highway.enterHighway(truck1); // Truck enters (pays vignette, speed increased)
highway.enterHighway(policeCar); // Police car enters (no vignette payment)

// Verify speed limits and apply fines
setTimeout(() => {
  highway.verifySpeedLimits();
}, 2000);

function delayedFunction() {
  // Code to be executed after the delay
  console.log('Delayed function executed');
}

// Delayed execution after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);