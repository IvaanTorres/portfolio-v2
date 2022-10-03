import projects from "~/data/Projects"

/* Find by ID: The id will be passed as URL param */
const find = (id: number) => projects.find(project => project.id === id)

/* Filter projects by type: If they are Web 2 or Web 3 */
const filterByType = (type: string) => projects.filter(project => project.type === type) 

const getAll = () => projects

const getFeatured = () => projects.filter(project => project.isFeatured)

export {
  find,
  filterByType,
  getAll,
  getFeatured,
}