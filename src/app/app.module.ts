import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { EditorModule } from './editor/editor.module';
import { ArticleModule } from './article/article.module';
import {
  SharedModule,
  HeaderComponent,
  FooterComponent,
  ApiService,
  UserService,
  ArticlesService,
  JwtService,
  ProfilesService,
  AuthGuard,
  CommentsService,
  TagsService
 } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    rootRouting,
    SettingsModule,
    ProfileModule,
    EditorModule,
    ArticleModule,
    HomeModule
  ],
  providers: [ApiService, UserService, JwtService, AuthGuard, ProfilesService, ArticlesService, CommentsService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
