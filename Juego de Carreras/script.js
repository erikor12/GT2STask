const blu_car = document.querySelector("#blue_car");
const red_car = document.querySelector("#red_car");

let blue_car_x = 0;
let red_car_x = 0;

const track = document.querySelector("#track");

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        blue_car_x += 10;
        blu_car.style.left = `${blue_car_x}px`;
    }
    if (event.key === "ArrowLeft") {
        blue_car_x -= 10;
        blu_car.style.left = `${blue_car_x}px`;
    }
    if (event.key === "ArrowUp") {
        red_car_x -= 10;
        red_car.style.left = `${red_car_x}px`;
    }
    if (event.key === "ArrowDown") {
        red_car_x += 10;
        red_car.style.left = `${red_car_x}px`;
    }
});
