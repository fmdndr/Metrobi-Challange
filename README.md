# Metrobi Challange  App

>I didn't add screen shots purposely cause some of screen need actions

## Questions

1) Write a javascript function that finds the duplicate items in any given array.

2) Write an async javascript function that writes every item in any given array with 1, 2,
4, 8, ... seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
seconds, “c” is printed in 4 seconds, ...

3) Write the necessary html-css code for generating the below figure (using flex).

4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false

5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
from without breaking. If an egg is dropped from above that floor, it will break. If it is
dropped from that floor or below, it will be completely undamaged and you can drop the
egg again. Given two eggs, find the highest floor an egg can be dropped from without
breaking, with as few drops as possible on the worst-case scenario.

6) Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
interface(we would like to see the paradox demonstrated).

7) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold.
Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)

***Answer for question 5***
 In this question we have 3 different level answer. I would like to explain most efficient answer.
 Formula =  n(n+1) / 2 >= 100
            n^2 + n >=200
            n(n+1) >=200
if we give n to 14 then we get right of equation 210. It means  in any best  worst case scenario
we will get the result after 14 drops.

Some source for about understanding the mathematich behind of question:
[I'm math link](https://www.cymath.com/answer?latex&q=x%5E2%2Bx%3E%3D100)

