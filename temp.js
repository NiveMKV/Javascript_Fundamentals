const userS = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Harry: {
      email: 'harry@harry.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    }
  }

  let countS=0, pointS=0
  let check

 for(checks in userS){
     console.log(typeof checks)
  if (checks.isLoggedIn === true){
      countS = countS++
  }
  if (checks.points > 30){
    pointS = pointS++
    }
}
  console.log(countS)
  console.log(pointS)

  let firstK = userS[0]
  let fp = firstK.points;
  let sirstK =userS[1].points
  let tirstK =userS[2].points
  let fouK =userS[3].points
  let fiveK =userS[4].points

  const couArr = []
  couArr.push(firstK)
  couArr.push(sirstK)
  couArr.push(tirstK)
  couArr.push(fouK)
  couArr.push(fiveK)
let ennu=0
  for (const iterator of couArr) {
      console.log(iterator)
      if(iterator > 30)
        ennu = ennu++
  }
  console.log(ennu)

  
