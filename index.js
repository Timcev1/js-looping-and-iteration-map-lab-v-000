// Code your solution in this file.
function lowerCaseDrivers(driver){
  return driver.map(function (drivers){
    return drivers.toLowerCase();
  });
}

function nameToAttributes(list){
  return list.map(function (objects) {
    const objectfirst = objects.split(' ')[0];
    const objectsecond = objects.split(' ')[1];
    return {firstName: objectfirst, lastName: objectsecond}
  })
}

function attributesToPhrase(){

}
