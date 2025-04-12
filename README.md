



# Smart-Home

## Table of contents


  - [Link](#link)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Links
[![DEPLOYMENT](https://github.com/Miron-Silviu/Guess-my-Number/blob/main/images/Frame%201.png)](https://miron-silviu.github.io/Smart-Home/)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size


## Screenshot

![image](https://github.com/Miron-Silviu/Smart-Home/assets/119732322/cb36d24e-7e01-4892-9b7e-235e28dc2bdf)



## My process

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


## What I learned

I learned how to implement Tailwind classes in html and how to use Dom manipulation. 

```html
   <a
            role="menuitem"
            class="py-1 px-6 dark:text-neutral-900 focus-within:ring-4 focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 hover:text-neutral-600 transition-colors"
            href="/"
            >Home</a
          >
```



```js
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
  const isExpended = JSON.parse(navBtn.getAttribute('aria-expend'));
  navBtn.setAttribute('aria-expended', !isExpended);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
});
```


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Miron-Silviu)
- Twitter - [Silviu Miron](https://x.com/silviuumiron)
