const movie = {
    title: "Gone With Wind",
    year: 1939,
    actressLead: "Vivien Leigh",
    actorLead: "Clark Gable",
    genre: "Epic",
    academyAwards: 8,
    quote: "Frankly My Dear, I don't give a damn",

    leadingRole: function(actor) {
        return this[actor];
    },

    formatInfo: function() {
        return `${this.title} was released in ${this.year}. It tells the story of the civil war in the US`;
    }
};

// Add profits object
movie.profits = {
    yearOfRelease: 10,
    subsequentToDate: 40
};

// Logging info
console.log(movie);
console.log("Most famous quote from the movie: " + movie.quote);
console.log("Leading role: " + movie.leadingRole("actressLead"));
let role = movie.leadingRole("actorLead");
console.log(role);
let roleWithMostVotes = "actorLead";
console.log("Role with most votes is " + movie.leadingRole(roleWithMostVotes));
console.log("Profits the year of release: " + movie.profits.yearOfRelease);
