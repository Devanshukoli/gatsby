First Install _gatsby_ cli using npm command.

```npm
npm install -g gatsby -cli
```

Then check the version of it by running the command.

```gatsby
gatsby -v, gatsby --version
```

If anything _goes wrong_ then just run the command.

```gatsby
gatsby --help
```

### Start with **gatsby** Project.

- After installing _gatsby cli_ in local machine.
- Run the command `gatsby new` OR If any problem arise, `npm init gatsby`.
- If you want to create fast website with you preferred lang. then use `npm init gatsby -ts` OR `npm init gatsby -js`
- Now, running your code into **Development Server** run the command `gatsby develop` OR `npm run develop`.
- If you want to stop _Development server_ then use `ctrl + c`.

### Gatsby Concepts.

- Pages created in the `src/pages`, in _gatsby_ it directly uses as route name as well. For Example, If I have file called `src/pages/about.js` Then I can access it via using `localhost:8000/about`.

- In Gatsby, `link` component provides a cool feature called **preloading**. Meaning when linked page are requested when the link scrolls into view or when the mouse hovers on it.

  - I noticed something _interesting_ while experimenting with `link` component. It's actually VERY similar to `a` tag. When I click on link component then there is no _page reloading_, And while in `a` tag there is page-reloading.

- **Plugins** ➡️ You can install a plugin using `npm install <plugin-name>`
  - Then configure it in file `gatsby-config.js` file.
  ```js
  module.exports = {
    siteMetadata: {
      title: "My First Gatsby Site",
    },
    plugins: ["plugin-name"],
  };
  ```
  - After making changes in `gatsby-config.js` file, Please **restart** **`gatsby develop`** process for updation of changes.
