import { Component } from '@angular/core';
import { LoginForm } from '../../forms/login/login'
import { UserLoginService } from '../../forms/login/login.service'

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css'],
    providers: [UserLoginService]
})

export class Header {
    logInStatus: boolean;
    constructor(){
    // this.logInStatus = LoginForm.logInStatus();
    // this.logInStatus = true;

    // }
    
    // changeLogInCondition(): boolean{ 
    //     if(this.logInStatus){ 
    //         debugger;
    //     this.logInStatus = false;
    //     }
    //     else{
    //         this.logInStatus = true;
    //     }
    //     return this.logInStatus;
    // }
}