// Todays forcast is first in Kelvin, it will not change;
const kelvin = 0;

// Converting Kelvin to Celsius;
const celsius = (kelvin - 273);

// Converting Celsius to Fahrenheit and rounding down;
const fahrenheit = Math.floor(celsius * (9/5) + 32);

// Now lets put it all together!
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Converting Celsius to Newton
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is also ${newton} on the Newton Scale.`)
