import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Person }  from './app.component';
@Component({
    moduleId: module.id,
    templateUrl: 'assements.component.html'
})

export class AssementsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    persons:Person[] = [];
    model;
    todaydate = new Date().toJSON().split('T')[0];
today: number = Date.now();
show = false;
  person:Person;
  booking = false;
  validationdate = false;
  table= false;
validation=false;
 // payment=false;
  editable = false;
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
    }

constructor(private router: Router){ }
  
  onClickAdd(fromdest,todest,fromdate,todate,name,gender,mobilenumber,email):void{
    console.log("todest"+todate+"hiii");
    if(((todate == null) || (todate == '')) && (fromdest == todest))
    {
       this.booking=false;
  this.table=false;
  this.validation=true;
  this.validationdate=false;
    }
    else if((fromdest == todest) && ((fromdate>todate) || (todate == null)||(todate == ''))){
      this.booking=false;
  this.table=false;
  this.validation=true;
  this.validationdate=true;
    }
   else if(fromdest == todest)
    {
       this.booking=false;
  this.table=false;
  this.validation=true;
  this.validationdate=false;
    }
    else if(fromdate>todate){
      if((todate == null)||(todate == '')){
       this.persons.push({fromdest:fromdest,todest:todest,fromdate:fromdate,todate:todate,name:name,gender:gender,mobilenumber:mobilenumber,email:email});
  this.booking=true;
  this.table=true;
  this.validationdate=false;
   this.validation=false; 
      }
      else{
      this.booking=false;
  this.table=false;
  this.validationdate=true;
   this.validation=false;
      }
    }
   
    else
    {
  this.persons.push({fromdest:fromdest,todest:todest,fromdate:fromdate,todate:todate,name:name,gender:gender,mobilenumber:mobilenumber,email:email});
  this.booking=true;
  this.table=true;
  this.validation=false;
    this.validationdate=false;

/*  this.payment=true;

*/  }
}

    ngOnInit() {
        this.loadAllUsers();
    }
 


    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
   
    onDelete(mobilenumber):void{
	  let allPersons = this.persons;
	  let length = allPersons.length;
	  for(let i=0;i<allPersons.length;i++){
		  if(allPersons[i].mobilenumber==mobilenumber){
			allPersons.splice(i,1);
			this.show = false;
				if(length == 1 ){
					this.table = false;
/*					this.payment = false;
*/
this.booking = false;
				}
		  } 
	  }
  }
  
  onView(person):void{
	  this.show =true;
	  this.person = person;
  }
  
 
 
}