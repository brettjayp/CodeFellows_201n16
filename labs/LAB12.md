# Lab 12: BusMall

Read the document, in it’s entirety, before beginning your lab. To view this lab assignment in it’s own tab, click HERE
Problem Domain

The full BusMall problem domain can be found HERE
Instructions

Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

    As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
        Update your algorithm to randomly generate three unique product images from the images directory.
        Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
    As a user, I would like to track how many times a product has appeared in a voting session, so that I can track analytics on each piece of data.
        Add an additional property to your constructor function that tracks the number of times the product has been shown.
        Update this new property every time the product is shown as one of the three options on the screen for the viewer to choose.

    As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.
        Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
        Place the bar chart in the section located beneath your three product images
        The bar charts should only appear after all voting data has been collected.

Stretch Goals

Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart
Developer Style Guide

    Do today’s work on a branch called chartjs.

This is an individual assignment today, but you are free to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.