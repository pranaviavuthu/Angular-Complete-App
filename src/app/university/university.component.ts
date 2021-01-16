import { Component, OnDestroy, OnInit, } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit, OnDestroy {
  updatedEmployees: Array<any> = [];
  studentId:number=1;
  studentName:string="test";
  studentStatus:boolean=false;
  studentData:any;
  studentFirstName:string="abc";


  

  student=[
    {
      studentId:1,studentName:"Abc",studentEmail:"abc@gmail.com",
      studentCourses:["ECE","EEE","IT"],
      studentEvents:["Fest","Traditional"],
    },
    {
      studentId:2,studentName:"Xyz",studentEmail:"xyz@gmail.com",
    studentCourses:["IT","ART","EEE"],
    studentEvents:["Art","XYZ"]



  },
  {
    studentId:3,studentName:"vfb",studentEmail:"vfb@gmail.com",
    studentCourses:["ART","EEE","ECE"],
    studentEvents:["Abc","bnh"]
  }

  ];

  studentsIds=[101,102,103,104,105,106,107,108,109];


  

  ngOnInit(){
    console.log("I am OnInIt from University component")
  };
  constructor(private univeristyService:UniversityService) { 
    console.log(this.student);
    console.log("This is constructor from University Component")
  };


  ngOnDestroy(){
    console.log("This is OnDestroy University Component");
    
  };

  studentFirstData(){
    console.log(this.studentFirstName);
    // this.studentFirstName="Tom";
    this.univeristyService.getStudentFirstName(this.studentFirstName);

  };
  studentInfo(){
    console.log(this.student);
    for (let x = 0; x < this.studentsIds.length; x++) {
      console.log(this.studentsIds[x]);

      
    };

  
  };


  studentDetails(){
    console.log("This is University Function")
    this.univeristyService.getStudentDetails().subscribe(Info=>{
      this.studentStatus=true;
      console.log(Info);
      this.studentData=Info;
      // this.studentData.data.forEach(stu=> {
      //   if(stu.age <30) {
      //     let status = "Junior";
      //     l
      //   } else {

      //   }
      // });
      //write for loop here (on studentData.data)
      //analyze this section.
    
    //   for (let x = 0; x < this.studentData.data.length; x++) {
        
    //  // console.log(this.studentData.data[x]);
    //   if(this.studentData.data[x].employee_age < 50) {
    //     let updatedEmp = {...this.studentData.data[x], status: "Junior"};
    //     this.updatedEmployees.push(updatedEmp);
    //   } else {
    //     console.log("Senior", this.studentData.data[x].employee_age);
    //     let updatedEmp = {...this.studentData.data[x], status: "Senior"};
    //     this.updatedEmployees.push(updatedEmp);
    //   }
    //   };
     
          for (let x = 0; x < this.studentData.data.length; x++) {
            let status = "";
            let age_status = "";
            if (this.studentData.data[x].employee_salary<2000) {
              // let updateEmp={...this.studentData.data[x],
              status="level-II";
              // this.updatedEmployees.push(updateEmp);
            }else{
              // console.log("level-I",this.studentData.data[x].employee_salary);
              // let updateEmp={...this.studentData.data[x],status:"level-I"};
              // this.updatedEmployees.push(updateEmp);
              status = "level -I"
            }
            if(this.studentData.data[x].employee_age < 50) {
                  // let updatedEmp = {...this.studentData.data[x], status: "Junior"};
                  // this.updatedEmployees.push(updatedEmp);
                  age_status= "Junior"
                } else {
                  // console.log("Senior", this.studentData.data[x].employee_age);
                  // let updatedEmp = {...this.studentData.data[x], status: "Senior"};
                  // this.updatedEmployees.push(updatedEmp);
                  age_status = "Senior"
                }
                let updatedEmp = {...this.studentData.data[x], status: status, age_status : age_status};
                this.updatedEmployees.push(updatedEmp);

              
            }

          })
            
          };
            
          
  
    };
    

  





