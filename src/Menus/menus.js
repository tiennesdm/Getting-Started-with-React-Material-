// we will use i18n to localize label strings. Please see sample file in public directory and key value pair in translation.json
// this we we can easily add new menus and delete if required.
// here link should be the correct route path in route.js otherise there will be 404 erro.
const menus = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Topics",
    link: "/topics",
  },
];

export default menus;
