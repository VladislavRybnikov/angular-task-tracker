import { Component, OnInit } from '@angular/core';
import { TokenManagerService } from '../../core/services/token-manager.service';
import { WorkTaskUserService } from '../../core/services/work-task-user.service';
import { WorkTaskUser } from '../../core/models/work-task-user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: WorkTaskUserService) { }

  loading: boolean = false;
  currentUser: WorkTaskUser = {} as WorkTaskUser;
  hasDescription;
  hasLocation;
  hasPhone;
  userRole;

  selectedTab = 'main';

  imageToShow: any = "../../../assets/images/Ajax-loader.gif";

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    console.log(image);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(x => {
      this.currentUser = x;
      this.hasLocation = x.Country;
      this.hasDescription = x.Info;
      this.hasPhone = x.PhoneNumber;
      this.userRole = x.Role;
    });

    this.userService.getCurrentImage().subscribe
    (
      x => {console.log("blob");
        this.createImageFromBlob(x);},
      err => {console.log(err);}
    )
  }

  mainTabClass = "tab-button-selected";
  managedTabClass = "tab-button";
  performedTabClass = "tab-button";
  settingsTabClass = "tab-button";
  createTabClass = "tab-button";

  changeTab(name: string)
  {
    this.mainTabClass = "tab-button";
    this.managedTabClass = "tab-button";
    this.performedTabClass = "tab-button";
    this.settingsTabClass = "tab-button";
    this.createTabClass = "tab-button";

    if(name == 'main')
    {
      this.mainTabClass = "tab-button-selected";
    }
    else if(name == 'create-task')
    {

    }
    else if(name == 'performed')
    {
      this.performedTabClass = "tab-button-selected";
    }
    else if(name == 'managed')
    {
      this.managedTabClass = "tab-button-selected";
    }
    else if(name == 'settings')
    {
      this.settingsTabClass = "tab-button-selected";
    }
    this.selectedTab = name;
  }

}
