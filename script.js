class Car {
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    };

    getCarInfo() {
        return "Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year 
    }
};

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo())