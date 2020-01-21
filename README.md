# Takeaway
- [Installation](#installation)
- [Start project](#start-project)
- [Start tests](#start-tests)
- [Task](#task)
  

## Installation
```sh 
git clone https://github.com/eLunch/takeaway.git
cd takeaway
npm install
```

## Start project

``` sh
npm start
```

## Start tests
``` sh 
npm test -- -u
```

## Task
The goal of this test is to implement a sample project in Php/Javascript, where you
visualize a restaurant list. You are able to sort the restaurant list based on its current
openings state, you can favourite a restaurant and you can select a sort value to further
sort the list. And lastly, you are able to search for restaurants.
All necessary data to complete this assignment is included in Sample.json​. Usage of a
database is not necessary

Use the following priority of the sorting (from the highest to the lowest priority):
*  **Favorites​:** Favourite restaurants are at the top of the list.
*  **Openings state​:** Restaurant is either open (top), you can order ahead (middle) or a
restaurant is currently closed (bottom).
*  **Sorting​:** Always one sort option is chosen and this can be best match​, newest​,
rating​ ​average​, distance​, popularity​, average​ ​product​ ​price​, delivery costs​ or
the minimum costs​.
*  **Search​:** Filter restaurants list by searching for restaurant name.

*Requirements*
*  Use responsive layout
*  Please visualize the name of the restaurants, the current opening state, the
selected sort, the sort value for a restaurant and if it’s a favourite or not.
*  Remember if you have multiple favourite restaurants, they are also sorted based
on their current openings state and current selected sort.
*  We expect valid test cases.
*  Include a readme file with all the needed information, how to get the sample
project working and verify the test cases.

*Bonus*
Customers are more willing to order at restaurants near them. As we also like to promote
restaurants with high scores, we need to calculate a new sort method called top
restaurant​. Use the following formula to calculate top restaurants:
**top restaurants = ((distance * popularity) + rating average)**​.
*  Extend your object with a key topRestaurants, which should be a child of
sortingValues
*  Update your sorting options and add ‘Top restaurants’