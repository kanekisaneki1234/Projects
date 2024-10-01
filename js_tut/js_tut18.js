function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp-32);
        }
        get temperature() {
            return this._temp;
        } //without this, if we try to access temp, it returns undefined.
        set temperature(updatedTemp) {
            this._temp=updatedTemp;
        } //without this, the values wont be updated
    }
    return Thermostat;
}

const Thermostat = makeClass()
const thermos = new Thermostat(68)

let temp = thermos.temperature

console.log(temp)

thermos.temperature = 26

temp = thermos.temperature

console.log(temp)