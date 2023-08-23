import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'

const SingleCorse = () => {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [navigate, course])

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default SingleCorse
