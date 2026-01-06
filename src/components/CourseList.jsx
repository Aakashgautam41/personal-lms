import { useDispatch, useSelector } from 'react-redux'
import CourseCard from './CourseCard'
import { addCourse } from '../store/actions/courseActions'

const CourseList = () => {
    const dispatch = useDispatch()

    // Read data from Redux store
    const courses = useSelector(state => state.courses.courses)

    const handleAddCourse = () => {
        dispatch(addCourse({
            id: Date.now(),
            title: 'New Course',
            lessons: 6
        }))
    }



    return (
        <div>
            <h2>Available Courses</h2>

            <button onClick={handleAddCourse}>➕ Add Course</button>

            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    )
}

export default CourseList
