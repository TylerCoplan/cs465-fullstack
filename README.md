<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TylerCoplan/cs465-fullstack/">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Travlr Getaways</h3>

  <p align="center">
    A great introduction to full stack web development
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#architecture">Architecture</a>
    </li>
    <li><a href="#functionality">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#reflection">Reflection</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](public/images/dive-site.png)

This website is the start of a full-stack web application with a customer facing public site for booking
trips and an administrative application for managing the MongoDB backend.

Key features:
* Express front-end for fast user experience and SEO
* Angular backend for efficient server use and responsive, dynamic functionality
* MongoDB for NoSQL data handling, using mongoose schema building.

With that, let's dive in (dad joke!) and see what all this means...

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Angular][Angular.io]][Angular-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express.js]][Express.js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Architecture

The public facing website was built with express.js and handlebars templating. Express.js allows the
website to load quickly from the server for the best UX and search engine optimization. Handlebars 
allows the html structure of the webpage to be templated and built in a scalable manner for the amount
of data that each webpage gets from the backend. The administrative web application is built differently,
using an Angular single page application (SPA). This SPA is slower to load, but is more efficient on server
resources and provides a fast, dynamic UX once loaded. It is perfect for administrative purposes because
they do not need the application to load extremely fast (< 1 second) nor do they need it to be crawled
by search engines. Both ends hook up to a NoSQL MongoDB database which gives us the flexibility to define
our schema and enforce certain parts, without having to strictly adhere to the rules of a SQL relational database.


## Functionality

JSON and Javascript(or Typescript) are the primary tools that drive the functionality of the web application.
Javascript is a programming language that allows for dynamic processing of informationg whereas JSON is a
standardized text format for storing key/value data. So Javascript can take user input through button clicks
and text entries in a form, act on the input through the programmed logic, and use JSON to pack/unpack data
for transfer between the client and host (webpage to DB).

One instance of refactoring code to improve functionality was to update the application from pure client/host
to MVC routing. Using the model-view-controller architecture allows for more modular development and better
control of data formatting. The view is built with templated handlebars components, which gives the structure
some dynamic capabilities based on the data received (such as displaying a varying number of trips). This gives
developers a more efficient way to develop the application and users a more consistent experience.

## Testing

Since the backend uses an API for communicating with the SPA and customer facing website, these endpoints
need to be tested to ensure proper functionality and security. Testing with security means creating test
login capabilities, and testing API endpoints when users are logged in versus not logged in. It makes it a 
little harder, but powerful tools like Postman can allow developers to create a suite of test data that
can automate testing. This allows not only faster testing, but is also repeatable and less error prone.
Exploratory test methods can be used as well, such as having someone actually try to break the web app through
any available means. This is slower and less repeatable, but has the advantage of utilizing ways that a real
life hacker would actually use to try to attack a web application.

<!-- USAGE EXAMPLES -->
## Reflection

This course has helped me to reach my professional goals by giving me a much better understanding of what 
an API actually does. I have heard the analogies of "its like a waiter between the customers and the cooks"
or things like that, but from an implementational standpoint, I was still wondering what an API actually does.
Now, I know that an API provides public facing functions and takes parameters from other applications using the
API, runs them through security and business logic, and returns some data from the application. The API defines
what functions are available, what parameters they take, and how the data will be returned, so that other apps
can utilize the application in a predictable way. Other than that, this course was good practice for using my
development skills and working my way through the various issues faced in this course. Adding to this project
to my Github portfolio will show that I am continuing to learn, continuing to develop, and that makes me more
marketable to potential employers.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Develop customer facing front end
- [x] Include MongoDB backend
- [x] Develop administrative SPA
- [x] Incorporate login functionality for security
- [x] Complete the course!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Tyler Coplan - tyler.coplan@snhu.edu

Project Link: [https://github.com/TylerCoplan](https://github.com/TylerCoplan)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Othneil Drew for this amazing readme template](https://github.com/othneildrew/Best-README-Template)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/tyler-coplan
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/npm/v/npm
[Node-url]: https://nodejs.org/en/
[MongoDB]: https://img.shields.io/badge/MongoDB-v5.0-green
[MongoDB-url]: https://www.mongodb.com/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Express.js]: https://img.shields.io/badge/Express-v4.16.1-blue
[Express.js-url]: https://expressjs.com/