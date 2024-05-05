// var  studentobj ={
//     name: "Mizna",
//     age: 17,
//     gender : "Female",
//     course : "Web development",
//     Education: {
//         CGPA:"3.6",
//         qualification: "bachleors in Arts",
//     },

//     status: true,
//     getName: function (mm) {
//        console.log (mm + " " + studentobj.age)
//     }
// }

// studentobj.getName("mizna")


// console.log(studentobj.getName("mus"));

// studentobj.course = ["reactjs", "css", "js"]

// studentobj.course.push("Web development")

// delete studentobj.course.pop()


// console.log(studentobj);

// var arr = ["Mizna", 17, {city: "Karachi"}]

// console.log(arr[2].city)

// Functions

// function abc(){
//     alert("Hello Ai..")
// }
// abc();


// var func = function(){
//    alert("Anonymous function call..")
// }

// func();

var studentobj2 = {
    stdName: "abc",
    stdAge: 20,
    gender: "Female",
    stdCity: {
      address: "gulshan",
      longitude: 24.19,
      latitude: 12.34,
    },
    status: true,
    courses: ["html", "php", "reactjs"],
    getName: function (name) {
      console.log(name + " " + obj.stdAge);
    },
  };

// console.log(studentobj2["gender"])

// for(var i in studentobj2){
//   console.log(studentobj2[i])
// }


for (outerkey in studentobj2){
for(innerkey in studentobj2[outerkey]){
 for(innerkey2x in studentobj2[outerkey][innerkey]){
  console.log(innerkey2x)
 }
}
}




// function Student(name,age,city,status,courses){

// this.stdName = name;
//  this . stdAge = age;
//      this . stdCity = city;
//      this . status = status;
//      this . courses = courses;
// }
// Student()

// Student.prototype.getName = function(){
//     console.log(this.stdName + " " +this. stdCity)
// }

// var studentObj2 = new Student("Mizna", 17, "Karachi", true, ["html", "css"])

// console.log(studentObj2.hasOwnProperty("constructor"));

// console.log(studentObj2);