import { Component ,OnInit} from '@angular/core';
import { Register } from './register';
import { Router } from '@angular/router';
import { RegistrationServiceService } from './registration-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Registration Form Project';
  register:any;

  constructor(private registrationService:RegistrationServiceService,
    private router:Router) {

      this.register=new Register();
      
     }
     ngOnInit(): void { 
    }
    
saveUser()
{
this.registrationService.addUsers(this.register).subscribe(data=>{
  console.log(data);


},
error=>console.log(error)
);
}
    Submit()
    {
      this.saveUser();
    }
  
}
