# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./public/screen1.png)
-------------------------
![](./public//Screenshot%20from%202023-05-23%2021-28-53.png)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [CSS modules]() - For styles


### What I learned


```js
useEffect(() => {
    if (state.bill && state.numberOfPeaple && state.selectedTip) {
      setState((prev) => ({
        ...prev,
        tipAmount: prev.bill * prev.selectedTip / 100 / prev.numberOfPeaple,
        total: ((prev.bill * prev.selectedTip / 100) + prev.bill) / prev.numberOfPeaple
      }));
    } else {
      setState((prev) => ({
        ...prev,
        tipAmount: 0,
        total: 0,
      }));
    }
}, [state.bill, state.numberOfPeaple, state.selectedTip]);
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

- I will improve the custom tip functionality more
- I will add tests using Jest and testing Library


### Useful resources

- [React docs](https://react.dev/) - This helped me for understanding the core of the React.js library.
- [Next.js docs](https://nextjs.org/) - I gain so much knowloadge about Next.js here


## Author

- Website - [Abdessittir harkati](https://abdessittirharkati.vercel.app/)
- Frontend Mentor - [@Abdessittir](https://www.frontendmentor.io/profile/Abdessittir)
- Twitter - [@AbdessittirHar1](https://www.twitter.com/AbdessittirHar1)


## Acknowledgments

- I would like to thank [datarockets](https://datarockets.com/) for giving me this opportunity to showcase my skills, and hopefully, I will be a part of this amazing team
- Also I would like to thank [frontendmentor](https://www.frontendmentor.io/home) for providing this great challenge
