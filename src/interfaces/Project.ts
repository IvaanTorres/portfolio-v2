export default interface Project {
  id: number,
  name: string,
  description: string,
  image: string,
  video: string,
  url: string,
  github: string,
  isFeatured: boolean,
  createdAt: string, /* TODO */
  type: string,
  order: number,
  skills: Array<any> /* TODO */
}