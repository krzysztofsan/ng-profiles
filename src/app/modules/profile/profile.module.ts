import { NgModule } from '@angular/core';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [ProfileRoutingModule],
  declarations: [ProfileListComponent, ProfileDetailsComponent]
})
export class ProfilesModule {}
