import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../models';
import { ProfilesService, UserService } from '../services';

@Component({
  selector: 'follow-button',
  templateUrl: './follow-button.component.html'
})
export class FollowButtonComponent {
  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private profilesService: ProfilesService,
    private router: Router,
    private userService: UserService
  ) {}

  toggleFollowing() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        // Not authenticated? push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return;
        }

        // Follow this profile if we aren't already
        if (!this.profile.following) {
          this.profilesService.follow(this.profile.username)
              .subscribe(
                data => {
                  this.isSubmitting = false;
                  this.onToggle.emit(true);
                },
                err => this.isSubmitting = false
              );
        } else {
          this.profilesService.unfollow(this.profile.username)
              .subscribe(
                data => {
                  this.isSubmitting = false;
                  this.onToggle.emit(false);
                },
                err => this.isSubmitting = false
              );
        }
      }
    );
  }



}