import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {ShareDataService} from "@services/share-data.service";
import {NavigationEnd, Router} from "@angular/router";
import {UserSummary} from "@models/UserSummary";
import {UsersService} from "@services/user.service";

@Component({
  selector: 'app-current-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public isEditing;
  public editableUser: UserSummary;

  public currentUser: UserSummary;
  indexOfTabToOpen = null;
  navigationSubscription;
  selectedValue = {id: 2, name: 'Female'};
  sex = [
    {id: 1, name: "Male"},
    {id: 2, name: "Female"}
  ];
  constructor(private authService: AuthService,
              private shareDataService: ShareDataService,
              private router: Router,
              private usersService: UsersService) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.setTabIndex();
      }
    });
  }

  ngOnInit() {
    // this.isEditing = true;
    this.isEditing = false;

    this.usersService.getUserSummaryById().subscribe(data => {
      this.currentUser = data;
    }, err => {
      alert(err);
    });
    this.setTabIndex();
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.shareDataService.tabIndex = null;
    this.shareDataService.ticketId = null;
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  setTabIndex() {
    this.indexOfTabToOpen = this.shareDataService.tabIndex;
  }

  get authority(): string {
    // return this.authService.getDecodedToken().authority;
    return "ROLE_USER";
  }

  cancel() {
    console.log(this.editableUser);
  }

  clicked() {
    console.log(this.currentUser)
    this.editableUser = new class implements UserSummary {
      age: number;
      email: String;
      height: number;
      sex: number;
      username: String;
      weight: number;
    }
    this.editableUser.username = this.currentUser.username;
    this.editableUser.email = this.currentUser.email;
    this.editableUser.age = this.currentUser.age;
    this.editableUser.weight = this.currentUser.weight;
    this.editableUser.height = this.currentUser.height;

    this.selectedValue.id = this.currentUser.sex;

    if (this.selectedValue.id != 1) {
      this.selectedValue.id = 2;
    }

    this.isEditing = !this.isEditing;
  }

  save() {

    // tut eto obernut v vizov becka
    this.currentUser.username = this.editableUser.username;
    this.currentUser.email = this.editableUser.email;
    this.currentUser.age = this.editableUser.age;
    this.currentUser.weight = this.editableUser.weight;
    this.currentUser.height = this.editableUser.height;
    this.currentUser.sex = this.selectedValue.id;

    this.isEditing = !this.isEditing;
    console.log('SAVED', this.currentUser);
  }
}
