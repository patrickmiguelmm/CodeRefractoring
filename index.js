async function fetchStudentProfile() {
    try {
        const student = await retrieveStudent(1);
        console.log('Student:', student);

        if (student.isEnrolled) {
            const courses = await fetchCourseList();
            console.log('Course List:', courses);

            await dispatchNotification(student.email, courses);
            console.log('Notification sent...');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function retrieveStudent(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John Doe',
                isEnrolled: true,
                email: 'john.doe@example.com',
            });
        }, 4000);
    });
}

async function fetchCourseList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['course1', 'course2']);
        }, 4000);
    });
}

async function dispatchNotification(email, courses) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}

console.log(fetchStudentProfile());
