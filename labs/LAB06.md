Lab 06: Salmon Cookies

Read this lab assignment, in it’s entirety, before beginning your lab. You may want to open it in a new tab.
Problem Domain

Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

    The minimum number of customers per hour.
    The maximum number of customers per hour.
    The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

A salmon

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that is colorful, eye-catching, readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.
Instructions

Before you begin, create a new repository within GitHub callled “cookie-stand”. Make sure that this repository is propertly set up with a license and a readme. Clone this repo down to your local machine

Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html).
Sales Data

Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

    Stores the min/max hourly customers, and the average cookies per customer, in object properties
    Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
    Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    Store the results for each location in a separate array… perhaps as a property of the object representing that location
    Display the values of each array as unordered lists in the browser

    Calculating the sum of these hourly totals; your output for each location should look like this:

    Seattle
        6am: 16 cookies
        7am: 20 cookies
        8am: 35 cookies
        9am: 48 cookies
        10am: 56 cookies
        11am: 77 cookies
        12pm: 93 cookies
        1pm: 144 cookies
        2pm: 119 cookies
        3pm: 84 cookies
        4pm: 61 cookies
        5pm: 23 cookies
        6pm: 42 cookies
        7pm: 57 cookies
        Total: 875 cookies

Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.

Here are the starting numbers that you’ll need to build these objects:
Location 	Min / Cust 	Max / Cust 	Avg Cookie / Sale
Seattle 	23 	65 	6.3
Tokyo 	3 	24 	1.2
Dubai 	11 	38 	3.7
Paris 	20 	38 	2.3
Lima 	2 	16 	4.6

These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.
Home Page

Read below for the requirements of your index.html page.

Note: Everything listed below is a stretch goal for lab 06. All of these requirements will be required for the final submission of the project, so start implementing these early.

In addition to the provided picture of the fish, your index.html file should contain:

    A custom Google font for highlights
    A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
    A specified standard serif web font for text (such as Georgia, Times, etc.)
    Specified different font colors for all three font usages
    A background color for the default page background (make sure font colors have good contrast and are readable on this background)
    A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
    Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
    Be thoughtful about layout and overall organization of the page.
    Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

Developer Style Guide

In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

    For every lab within this project, you will be creating a new branch for every day. Create a new branch name that follows the following format class##-feature (example: class06-Objects).

    Within your local version of your repo, add your .gitignore and .eslintrc.json.

    While working within your non-master branch, conduct regular commits within git.

    All properties/values and methods should be correctly constructed and given meaningful names.

    Functions and methods should follow the single-responsibility principle.

    Use template literals in your JS logic to render the stores as lists on the sales page

Stretch Goals

    Read this article, this article, and this article on the differences between low-fidelity and high-fidelity wireframes. Based on these readings, draw conclusions about what you would want in your own low-fidelity and high-fidelity wireframes.*

    Create a low-fidelity wireframe of what you want the page to look like.

    Create a high-fidelity wirefromae of what you want your page to look like.
