"use strict";

// Task -> find overall progress!
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    } 
}

// Iterative way
function findOverallProgress(data) {
    let total = 0,
        numOfStudents = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            numOfStudents += course.length
            course.forEach(item => {
                total += item.progress;
            })
        } else {
            for (let subCourse of Object.values(course)) {
                numOfStudents += subCourse.length;
                subCourse.forEach(item => {
                    total += item.progress;
                })
            }
        }
    }

    return total / numOfStudents;
}

console.log(Object.values(students));
console.log(findOverallProgress(students));

// Recursive way

function findOverallProgressRecursive(data) {
    if (Array.isArray(data)) {
        let total = 0;

        data.forEach(student => {
            total += student.progress;
        })

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataResults = findOverallProgressRecursive(subData);
            total[0] += subDataResults[0];
            total[1] += subDataResults[1];
        }

        return total;

    }
}
const result = findOverallProgressRecursive(students);
console.log(result[0] / result[1]);