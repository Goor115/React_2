import Person from './Person'
import persons from '../data/persons'

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person ker={person.id} {...person} />
      })}
    </div>
  )
}

export default Persons
