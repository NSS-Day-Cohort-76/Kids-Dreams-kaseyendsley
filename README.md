# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module contains the code that executes on this click event.  The module first imports a structured clone of the "children" array from the database (getChildren).  We then set that structured clone equal to the variable "Kids" so that we can attribute state to each child.  Then, the click event function first determines if the dataset type clicked on (the target) matches the state stored in the html on the page, so that it can be sure only to execute when the clicked element is a child.   The function then loops through each child retrieved from the children array and checks if the id of each child matches the childId from the element we clicked.  Once the match is made, the child's name and wish are displayed in a browser window alert.   
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?  
   >Because the function needs to loop through every individual kids in the kids array, one by one, to find their matching celebrity. Without calling it inside the loop, we could not achieve this - it would run only once and populate only one pairing.   
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > We attributed state to each celebrity to store the data of which sport they play in "data-sport="${celebrity.sport}"".  Then, in the on click function, I can reference that state to populate in my window alert using the celebrity.sport value that each individual's sport's data is stored in.  
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Our main module is going to be dynamically rendering our HTML. We begin by importing functions from three other modules which will generate separate parts of our HTML. Then, the document.querySelector method selects the HTML element with the id "container" on our index.html file, selecting this element in the DOM; this will be where our generated HTML is inserted using the innerHTML property.  
   
   The applicationHTML variable is a template literal; this will help define how our webpage is structured. It uses two article classes: the first article holds a section for kids (callingKids()) and a section for celebrities (calling Celebrities()) where each function generates the content to be displayed.  The second article class sits beneath the first, and calls Pairings() to render and display the HTML for our kids/celebrities pairings.  
