import { Article } from './article.model';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article('coucou','coucou.com',0)).toBeTruthy();
  });
});
