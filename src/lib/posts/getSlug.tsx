export const getSlug = (filename: string) => {
  return filename.replace(/\.md$/, '');
};