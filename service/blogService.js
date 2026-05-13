import { blogs } from '../data/blogs.js';

export const getAllBlogPosts = () => blogs;

export const getBlogPostsSorted = (order = 'desc') => {
  return [...blogs].sort((a, b) => {
    return order === 'desc' 
      ? new Date(b.date) - new Date(a.date) 
      : new Date(a.date) - new Date(b.date);
  });
};

export const getBlogPostsTag = (tag) => {
  return blogs.filter(blog => blog.tags.includes(tag));
};

export const getRecentBlogPosts = (count = 3) => {
  return getBlogsSorted('desc').slice(0, count);
};