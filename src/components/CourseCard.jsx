const CourseCard = ({ course }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '6px'
            }}
        >
            <h3>{course.title}</h3>
            <p>Lessons: {course.lessons}</p>
            <button>Start Learning</button>
        </div>
    )
}

export default CourseCard
