# 201n16_bus-mall

- Broken down, goal of first lab (lab11) is:
  - create a page that displays three products at a time from a catalog at random
  - track the frequency each object is displayed
  - user must select which product they'd most likely purchase
  - track the frequency each object gets selected
  - display the three product lineup 25 times to the user
  - upon 25 interactions from the user, prevent further interaction
  - upon 25 interactions from the user, run some calculations, and render some results to the page
  - apply some appropriate styling

2019 11 27
- init of new repo, adding basics
- new branch: lab11

2019 11 29
- HTML: Basic setup, grey on grey etc, simple section and div to contain elements
- CSS: Styles to match basic HTML page, and for elements to be created
- JS: Added some basic helper functions, random number generator and add new element
- JS: Constructor function to take in products, push to catalog[]
- JS: Functions created to render a product to page (dependent on position), select a product at random without repeats or duplicates and render to the page (dependent on position), and render three random products without repeats or duplicates.
- JS: When new products are rendered to the page, we clear previous objects from the apge, we track the previous three images to prevent repeats, we increment the display count of products being rendered, we track the images as we make them to prevent duplicates being shown, and we update a table in the console displaying our catalog[] data.
- JS, CSS, HTML: Trimmed up some unneeded code. Removed boxes inside of container, render products to container instead of boxes inside of container.
- JS: Added event handler and round count. On click, we identify the image clicked, increment its click count, increment the current round count, and render three new products. Upon the last click event, we still record our data, we then remove the event listener, and now we no longer display any new products.
- JS: Added a function to construct and render a list of the result upon completion of the main event.
- JS: Removed outputs to the console.I learned this tonight when my inner child progressed from pushing the button several times, to holding the button down. I was caught off guard when it started 
2019 12 03
- JS: No need to implement a method to ensure no images are repeated. I already implemented a function to ensure no images are repeated between rounds, nor duplicates within a round.
- JS: No need to add feature to track image views, that was one of the first things done.
- For lab 12, I need to accomplish:
  - Add a chart.js chart that displays:
    - Vote totals for each product
    - Display totals for each product/
    - In bar chart format
  - Chart must be in the section below my three products
  - Chart must not appear until voting rounds have completed
  - STRETCH: Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart.
- npm install chart.js --save
- 
