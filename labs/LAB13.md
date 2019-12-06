Lab 13: BusMall Data Persistence

Read the document, in it’s entirety, before beginning your lab. To view this lab assignment in it’s own tab, click HERE
Problem Domain

The full BusMall problem domain can be found HERE
Instructions

Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

    As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.
        Implement local storage into your current application
        Make sure the data persists across both browser refreshes and resets

Hints:

    Store the products array into local storage as a formatted JSON string
    Retrieve the products array from local storage and then utilize the JSON.Parse() function. Remember, you will have to send each item in the array back through constructor function.

Stretch Goals

No additional stretch goals for this assignment