# Weather Application

This application is based on the Weather Application project outlined in the book, [React Anti-Patterns](https://www.packtpub.com/product/react-anti-patterns/9781805123972) by Juntao Qiu.

The original code for the weather application can be found on [Github](https://github.com/PacktPublishing/React-Anti-Patterns) under **code/src/ch12/weather**. It is the final project of the book and meant to bring together the main topics. As an End-to-End project, it successfully covers the key principles presented for building a React application, along with best practices, testing and code cleanliness.

For my version of the application, I have included the theme mode functionality described in Chapter 2 to better understand the **React Context API**. It also includes the ability to delete items, uses the [Bulma](https://bulma.io/) CSS Framework for styling, uses SASS for compiling stylesheets, icons provided by [React Icons](https://react-icons.github.io/react-icons/) and was built using [ViteJS](https://vitejs.dev/).

There are some improvements I still need to make in my application. I break the SRP rule in a couple places and am lacking some needed tests to fully cover the functionality. Please be patient.

## Getting Started

An [OpenWeatherMap](https://openweathermap.org/) API key will be required to retrieve any weather data. It's a free service as long as you do not make an excessive amount of requests to the platform.

With the API key ready, clone (`git clone https://github.com/michabre/weather-app-react-anti-patterns.git`) the repository to your workstation.

Initializing the application begins as most JavaScript/Typescript based projects do...

```shell
# install dependencies
npm install

# start up development app
npm run dev
```

### Environment Variables

The OpenWeatherMap API Key will be accessible by the code as an environment variable. Using Vite's method for including variables set in the files:

- `.env`
- `.env.local`

Any variable set here can be accessed using `import.meta.env`.

## Testing

To run the tests, they have been added as scripts in the package.json file.

### Cypress

```shell
npm run cypress
```

### Jest

```shell
npm run jest
```

## Resources

The following articles were beneficial in adding some of the functionality to this project and building on the information gained from the book.

- [How to Learn the Hard Parts of React](https://www.freecodecamp.org/news/hard-parts-of-react/)
- [How to Use Sass in React](https://www.makeuseof.com/react-sass-how-use/)
- [Why React Icons May Be the Only Icon Library You Need](https://www.sitepoint.com/react-icons-library/)