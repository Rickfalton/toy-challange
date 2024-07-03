
function studentGradeGenerator(mark) {
    // const mark = parseFloat(prompt('Enter the student mark (0-100):'));

    if (!mark || mark < 0 || mark > 100) {
        return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }

    let grade = ''
    if (mark > 79) {
        grade = 'A';
    } else if (mark >= 60) {
        grade = 'B';
    } else if (mark >= 50) {
        grade = 'C';
    } else if (mark >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return `The student's grade is: ${grade}`;
    console.log
}

const result = studentGradeGenerator(80);
console.log(result);

