# 201n16_cookie-stand

init

been bad about updating the readme!

2019 11 11
- began converting to constructor function, achieved 90% of goal
- forgot to ensure what branch I was in, began my work in 'lab06', so I had to copied my new code into master, and acp'ed before battery died
- total cookies for the day is coming out as a very long number, gotta figure out why

2019 11 13
- branched to 'lab07' since I forgot to before
- reviewing code to fix long total cookies value, found that I declared the variable as an array, which is not what I wanted
- fixing total cookies variable to a num fixes the issue
- noticed the shop names are no longer present, gotta check into that
- found that I had renamed the shop name variable in the constructor where declared, but forgot to update it where it's used
- updating variable name where used fixes issue, shop names are now back as list headers
- refactoring constructor now complete, but I still need to rewrite it to produce a table instead of lists
- weeded out the old code
- commented out the lists
- begun constructing table in js
- shops now populate as part of each shop's constructor method
- row of all hours now populates as part of function to render whole table
- all shop:hour sales data now populates as table data, still need to add shop daily totals
- added totals column
- all table data populates as would be expected, table backend complete

2019 11 30
- added remaining labs in .md files, into new directory
- added all images to index.html
- images in navbar are clickables, but direct to a prompt() as there's nowhere to take you
- added locations, hours, contact info, to home page
- feel I've met the lab09b requirements, going to resubmit now
- PR into master from lab09b
