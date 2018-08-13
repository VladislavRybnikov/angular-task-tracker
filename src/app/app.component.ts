import { Component } from '@angular/core';
import { AccountManagerService } from '../app/core/services/account-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/scss/styles.scss']
})
export class AppComponent {
  title = 'TaskTracker';

  constructor(private service: AccountManagerService)
  {

  }

  btnClasses = "menu-btn";
  navClasses = "menu-nav-link";

  toggleClasses()
  {
    if(this.btnClasses == "menu-btn")
    {
      this.btnClasses = "menu-btn-active";
      this.navClasses = "menu-nav-link-active";
    }
    else
    {
      this.btnClasses = "menu-btn";
      this.navClasses = "menu-nav-link";
    
    }
  }
}
