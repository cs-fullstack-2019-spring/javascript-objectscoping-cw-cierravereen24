//Create an array called ```peopleList``` objects using *Object Literal* notation.
// Dynamically add the property ```famousSong``` to the object instance for ```Jimi Hendrix``` and assign it the value ```Purple Haze```
//Dynamically add a function called ```getBandandZip()``` to the object instance for ```Jimmy Page```
// that returns a concatenated string of ```Led Zeppelin HISZIPCODE```
// (get zip code from the object instance).
// Call the function from your code and log the response.


let  peopleList = [ {firstName:"Jimmy ",lastName:"Page ", age: "62", zip_code:"00821 "},
    {firstName:"Rick ", lastName: "Nelson ", age:"57 ", zip_code: "61016 " },
    {firstName: "Jimi ",lastName: "Hendrix ", age:"58 ", zip_code: "90001 "},
    {firstName:"Lemmy ", lastName:"Kilmister ", age:"57", zip_code:"21120"}];

peopleList[2].famousSong ="Purple Haze";
console.log(peopleList[2].famousSong);

peopleList[0].getBandandZip = function()
{
    let extra = "Led Zeppelin " + this.zip_code;
    return (extra);
};

console.log(peopleList[0].getBandandZip);