function leaderboard(obj) {
    let names = obj.names; // Extract names
    let marks = obj.marks; // Extract marks

    // Sort names and marks based on marks in descending order
    for (let i = 0; i < marks.length; i++) {
        for (let j = 0; j < marks.length - 1; j++) {
            if (marks[j] < marks[j + 1]) {
                // Swap marks
                let tempMark = marks[j];
                marks[j] = marks[j + 1];
                marks[j + 1] = tempMark;

                // Swap names to keep alignment with marks
                let tempName = names[j];
                names[j] = names[j + 1];
                names[j + 1] = tempName;
            }
        }
    }

    // Display the leaderboard
    for (let i = 0; i < names.length; i++) {
        console.log((i + 1) + ". " + names[i] + " - " + marks[i]);
    }
}

// Input object
let obj = {
    names: ["rancho", "chatur", "raju", "farhan", "virus", "joy"],
    marks: [45, 32, 30, 28, 32, 45]
};

// Call the function
leaderboard(obj);