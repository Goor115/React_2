function PetInfo({ animal, age, hasPet }) {
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have an animale"
  return <h1>{text}</h1>
}

export default PetInfo
