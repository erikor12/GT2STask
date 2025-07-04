const blu_car = document.querySelector("#blue_car");
const red_car = document.querySelector("#red_car");
const track = document.querySelector("#track");

let blue_car_x = 0;
let red_car_x = 0;

const jump = 20;
const finish = track.offsetWidth - blu_car.offsetWidth - 20;

window.addEventListener ("keyup", (e) => {
    console.log(e);
    if (e.key === 'd') {
        red_car_x += jump;
        if (red_car_x > finish) {
            red_car_x = finish
        }
        red_car.style.marginLeft = red_car_x + "px";
        if (red_car_x >= finish) {
            this.alert("Red Car Wins");
            reset();
        }
    }
    if (e.key === 'a') {
        blue_car_x += jump;
        if (blue_car_x > finish) {
            blue_car_x = finish
        }
        blu_car.style.marginLeft = blue_car_x + "px";
        if (blue_car_x >= finish) {
            this.alert("Blue Car Wins");
            reset();
        }
    }
})

function reset() {
    blue_car_x = 0;
    red_car_x = 0;
    red_car.style.marginLeft = "0px";
    blu_car.style.marginLeft = "0px";
}