var personObj = {
    firstName: 'Nishant',
    lastName: 'R',
    DOB: '1995-09-10',
    role: 'Trainer',
    age: '27',
    graduation: 'BE EEE',
    College: 'KCG College of Technology',
    School: 'Kendriya Vidyalaya OCF',
    Board: 'CBSE',
    location: 'chennai',
    nationality: 'india',
    skills: ['JS', 'C++'],
    projects: [{ name: 'Robotic arms', langs: 'embedded C' }]
  }

  // JSON iterate over all for loops (for, for in, for of, forEach)

   //for in using object
  
    console.log("1.for in iteration on object:"); 
    for (var key in personObj) {
      console.log(key, personObj[key]);
    }
    
    //for each using object
    
    console.log("2.for each iteration on object:");
    Object.keys(personObj).forEach((x) => console.log(x, personObj[x]));
    
    
    // For Loop condition

    console.log("3.for iteration on array:"); 
    let studentname=[{"name":"Nishant R", "blood":"B+ve"},
                      {"name":"Revathy", "blood":"AB-ve"}]

     for(let i=0;i<studentname.length;i++)
     console.log(studentname[i].name)
     
     //For of Loop condition   

     console.log("4.for of iteration on array:"); 
     let car=[{"Brand":"TATA","Model":"NEXON", "price":"110000"},{"Brand":"KIA","Model":"SELTOS", "price":"1650000"}]
     for ( const best of car){
      console.log(best)
    }
