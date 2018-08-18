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

  imageToUpload: File = null;
  imageToShow: any = "../../../assets/images/Ajax-loader.gif";

  handleFileInput(files: FileList)
  {
    this.imageToShow = "../../../assets/images/Ajax-load.png";
    this.imageToUpload = files.item(0);
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.imageToShow = event.target.result;
    }
  
    reader.readAsDataURL(this.imageToUpload);
  }

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

  fullName='';
  description='';
  country='';
  city='';
  phoneNumber='';

  currentUser: WorkTaskUser;
  loading = false;
  errorMsg = '';

  ngOnInit() {
    this.currentUser=this.user;

    this.fullName = this.currentUser.FullName;
    this.description = this.currentUser.Info;
    this.country = this.currentUser.Country;
    this.city = this.currentUser.City;
    this.phoneNumber = this.currentUser.PhoneNumber;

    this.userService.getCurrentImage().subscribe
    (
      x => {console.log("blob");
        this.createImageFromBlob(x);},
      err => {console.log(err);}
    );
    
  }

  update()
  {
    this.loading = true;

    this.currentUser.FullName = this.fullName;
    this.currentUser.Info = this.description;
    this.currentUser.Country = this.country;
    this.currentUser.City = this.city;
    this.currentUser.PhoneNumber = this.phoneNumber;

    this.userService.updateUser(this.currentUser)
    .subscribe(
      x=>{},
      err=>{
        this.errorMsg = err;
        this.loading = false;
        return;
      },
      ()=>{}
    );

    if(this.imageToShow){

      const formData = new FormData();
      formData.append(name, this.imageToUpload,
        this.imageToUpload.name);
    
      this.userService.updateCurrentImage(formData)
      .subscribe(
      x => {;
        this.loading = false;},
      err => {
        this.errorMsg = err;
        this.loading = false;
        return;},
      () => {location.reload();}
      );

    }

  }

}
