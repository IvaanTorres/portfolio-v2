import skills from "~/data/Skills"
import Skill from "~/interfaces/Skill"

const find = (id: string) => Object.values(skills).flat().find(skill => skill.id === id)

const filterByType = (type: string): Skill[] => {
  const a = Object.keys(skills).findIndex(key => key === type)
  return Object.values(skills)[a]
}

const getAll = () => Object.values(skills).flat()

export {
  find,
  filterByType,
  getAll
}