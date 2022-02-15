let obj1 = {
    prop: {
        prop1: 'Great'
    }
};

let obj2 = {
    prop: {
        prop2: 'Hello'
    }
};

function findProp(object, lookFor) {
    for (var prop in object) {
      if (prop == lookFor) return object[prop]
      if (typeof object[prop] == 'object') {
        var checkNested = findProp(object[prop], lookFor)    
        if (checkNested) return checkNested
      }
    }
    return "NOT FOUND"
  }
  
  console.log(findProp(obj1, 'prop1'))
  console.log(findProp(obj2, 'prop1'))