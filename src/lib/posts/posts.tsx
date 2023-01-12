import { loadPosts } from './loadPosts';
import type { IntlPost } from './Post';
import { isDevelopment } from '../env/isDevelopment';

let posts: Map<string, IntlPost> | Promise<Map<string, IntlPost>> | null = null;

export const getPosts = async () => {
  if (isDevelopment()) return loadPosts();

  if (!posts) {
    posts = loadPosts();
  }

  return posts;
};
