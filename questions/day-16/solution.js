
const flattenObject = (obj, prefix = "")=>{
  let newObj = {}
  for (const key in obj) {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    
    if(typeof(obj[key]) === typeof({})){      
      const recursiveResult = flattenObject(obj[key], newPrefix);
      newObj = { ...newObj, ...recursiveResult };
    }
    else {
      newObj[newPrefix] =  obj[key]
    }
  }
  return newObj
}


const input = {
  user: {
    name: "Bruno",
    age: 15,
    meta: {
      dev: true,
      level: "boss"
    }
  },
  location: {
    city: "Lucknow",
    pin: 226001
  }
};

console.log(flattenObject(input));