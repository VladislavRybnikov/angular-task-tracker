import { Component, OnInit, Input } from '@angular/core';
import { WorkTaskUser } from '../../core/models/work-task-user';
import { WorkTaskUserService } from '../../core/services/work-task-user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private router: Router,
    private userService: WorkTaskUserService) { }

  @Input() user: WorkTaskUser;

  fullName='';
  description='';
  country='';
  city='';
  phoneNumber='';

  currentUser: WorkTaskUser;
  loading = false;

  ngOnInit() {
    this.currentUser=this.user;

    this.fullName = this.currentUser.FullName;
    this.description = this.currentUser.Info;
    this.country = this.currentUser.Country;
    this.city = this.currentUser.City;
    this.phoneNumber = this.currentUser.PhoneNumber;
  }

  update()
  {
    this.currentUser.FullName = this.fullName;
    this.currentUser.Info = this.description;
    this.currentUser.Country = this.country;
    this.currentUser.City = this.city;
    this.currentUser.PhoneNumber = this.phoneNumber;

    this.userService.updateUser(this.currentUser)
    .subscribe(
      x=>{},
      err=>{},
      ()=>{}
    );

  }

}
