import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticleMetaComponent, ArticleListComponent, ArticlePreviewComponent } from './article-helpers';
import { FollowButtonComponent, FavoriteButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FollowButtonComponent
  ],
  exports: [
    ArticleListComponent,
    ArticlePreviewComponent,
    CommonModule,
    FollowButtonComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    RouterModule
  ]
})
export class SharedModule {}