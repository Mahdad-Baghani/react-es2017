export function functionArgs () {

  function getEmAll(...args) {
    console.log(args)
    //when you log args, you'd actually recieve an array with each index
    //representing every single argumen that's been passed into getEmAll
  }

  //equals indicates that you want myString to default to a string if nothing
  //is passed in. Similarly with an array = []
  function setSomeDefaults(myString = "", aList = []) {
    console.log(myString, aList)
  }

  //configurationThing is expecting an object and we're automattically destructuring
  //any keys named monsterSize and boatCapacity so they will be availble to us
  //in the function under those variable names
  function configurationThing({monsterSize, boatCapacity}) {
    console.log(monsterSize, boatCapacity)
  }

}
