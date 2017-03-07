import { Component, Input } from '@angular/core';

import { Article } from '../models';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html'
})
export class ArticlePreviewComponent {
  @Input() article: Article;

  onToggleFavorite(favorited: boolean) {
    this.article['favorite'] = favorited;

    if (favorited) {
      this.article['favoriteCount']++;
    } else {
      this.article['favoriteCount']--;
    }
  }
}
