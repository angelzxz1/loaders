# Bars

This one is pretty simple, and tecnically is just a div with an animation changing the height, however the magic of this one is that there is a value called ✨Delay✨ that can make this animations look really nice.

I used 7 bars or divs for this but you can use the amount you want, there are some ready to use, but if you want to create your own you can just copy the style.

I created this in a way that can be modified by you if you want to customize it.

For Tailwind and CSS just modify the html delay variable.

```
<div class="bar" style="--delay:X"></div>
```

Change the X by any value you need and thats it.

For Chakra-UI you need to pass the prop exactly the same

```
<Bar delay={X} />
```

You can pass either a string a number, a float even a boolean, all work, but take this into consideration:

- A float will be converted to the closest lower Int. For example, you pass 7.9, will convert it to 7.
- A boolean means that will use the 0 or 1, 0 been false and 1 been true, this is just to write less when implementing it.
