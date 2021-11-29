// let User = function(firstName,lastName,age){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

//   this.getName = function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// let teacher = new User("Nguyễn","Nam",'30');
// let student = new User('Phạm','Sơn','20');

// User.prototype.className = 'F8';
// User.prototype.getClassName = function(){
//   return this.className;
// }




// teacher.address = "Hà Nội";
// student.address = "Hồ Chí Minh"

// console.log(teacher.getClassName());
// // console.log(student.address)



// let date = new Date();

// let year  = date.getFullYear();
// let month = date.getMonth() + 1;
// let day   = date.getDate();



// console.log(`${day}/${month}/${year}`);

// console.log('' == 0 ? 2 : 1)


// let color = {
//   name :'black',
//   age : 19,
// };
  
// for(let value of Object.keys(color)){
//   console.log(color[value]);
// }

// for(let value of Object.values(color)){
//   console.log(value)
// }


// Vòng lặp do while
// var i = 0;
// var login = false;
// do{
//   i++;
//   console.log('đăng nhập lần', i);
//     var n = prompt('nhap ten tai khoan');
//     var result = n == 'an' ? 'good account' 
//           : n != 'an' && i == 4 ? 'band':'error account';
// console.log(result);

// }while(n != 'an' && i <4);

// Vòng lặp continue , break
// for(i = 0; i < 10; i++){

//   if(i % 2 !== 0){
//     continue;
//   }

//   console.log(i);
// }


// var languages = [
//     ['PHP','aa'],
//     ['Java', 'bb'],
//     ['Dart','cc']
// ];

// for ( var i = 0 ; i < languages.length; i++){
//     for(var j = 0; j < languages[i].length; j++){
//       console.log(languages[i][j]);
//     }
// }

// for(var i of languages){
//   for(var j of i){
//     console.log(j)
//   }
// }

// Flat - làm phẳng mảng từ Depth array  - Mảng sâu

// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// var total = depthArray.reduce(function(total,item) {
//   return total.concat(item);
// },[]);

// console.log(total);


// Lấy ra các khoá học đưa vào 1 mảng mới

var topics = [
  {
    topic: 'Front-End',
    courses: [
      {
        id :1,
        title : 'HTML & CSS'
      },
      {
        id :2,
        title : 'Js'
      },
    ]
  },
  {
    topic: 'Back-End',
    courses: [
      {
        id :3,
        title : 'NodeJs'
      },
      {
        id :4,
        title : 'PhP'
      },
    ]
  }
];

var courses = topics.reduce(function(total,topic){
  return total.concat(topic.courses);
},[]);

// console.log(courses)

var htmls = courses.map(function(course){
  return `
    <div>${course.title}</div>
    <p>Id: ${course.id}</p>
  `
});



console.log(htmls)
