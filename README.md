# Project Overview

Hello, it's Winn here! This document provides an overview of the second interview exercise: loading and displaying event data into a ListView from the provided API (https://www.adelphi.edu/wp-json/wp/v2/event). Understanding that there was no UI requirement, I chose to replicate the entire UI of the official Adelphi University Event Page (https://www.adelphi.edu/events/). This approach allowed me to focus my efforts on coding and closely examine the website I might work on in the future.

## Timeline

- **Friday:** I did Exercise 1 and thought a bit about Exercise 2 and how to do it properly.
- **Saturday:** Initially, I did think about designing a new UI/UX; however, after browsing the Adelphi University website and comparing the event page with the API data, I found out that the information from these two sources is the same. So, I decided to copy the UI/UX. I finished some basic filing structures, created some folders and files for future usage, and finished the website header.
- **Sunday:** I start working on the fetching API part. Before doing that, I first took a closer look into the filter and search system that the AU event page has. Because I know it has much to do with how I build the hook that I will use for fetching data. I separated the UI and the function and divided the UI into smaller components. I made sure that no type errors may occur (since sometimes we have to be extra careful when dealing with different types that an API may provide) by using typescript. I finished the basic fetching part today.
- **Monday:** I worked on perfecting the fetching data. I noticed that I can add a select range functionality to this process so the users can select how many results they want to see on a single page. I love this idea, so I started to implement it. First, I modified my hook to include range as an argument. Then, I update the pagination part so the page count is dynamically adjusted by the range selected. And, of course, I updated the UI. Also, I implemented the filter and search function and re-arranged some components and logic for this change.
- **Tuesday:** I finalized the UI today and ensured that my website's look is very similar to the AU website. I ensured that every link and clickable item on the AU website also worked on my website. I also deal with lots of animation, just trying to make the entire user experience similar.
- **Wednesday:** I further enhanced the entire UI. I constructed the footer as well, fixing bugs and further improving the project structure by making a clearer division. I am pretty satisfied with the result. I summarized the exercise and wrote some documentation.
- **Thursday:** Submitted the project, finalized the build for production, and completed documentation.

## Sections

### Header

The first component implemented was the dual-header system, replicating the AU event page's layout and interactions. The top header is more like a sub-header, and the second header feels more official. The UI and animation building process is quite smooth; it's just a little tricky regarding the select list that only shows up when the user hovers over the header title (as there are two components (title and selectList) but one hover event). Also, there are lots of links to be assigned to different titles. I decided to sort of create a database for these titles and links. I'm not sure if it's the best practice, but I think it might be easier for link/title changes and maintenance.

### Event Display

Event Display is straightforward in terms of UI and animation. I built a hook for all the fetching tasks. The trickiest part is to display the correct information: title, description, time, location, category, and image. It's very simple for title, location, and image. However, it's a little bit difficult to display the same information that the AU event page displays for description, time, and category.
For description, I can't find the same description in the API-provided data. After digging deeper into this, I found that the description is actually based on the first paragraph of the detailed event webpage (the link to this webpage is provided by the API). I further retrieved the link and tried to get the first paragraph content by fetching the HTML of that link. However, after trying a few different methods, I found it impossible because the webpage blocked suspicious people from doing so. But I still wanted the description, so I used the description embedded in the API-provided data, although not the same. I cleared all the HTML-related parts and got the first few sentences as the description. The result was not perfect, but it was better than I expected. 
For time, I noticed a small difference between the time provided by the API and the time displayed on the event page. After a close look into the API data, I found that I don't need to use the time tag in the data; I can utilize the `yoast-head`. I removed all the unwanted parts and retrieved the time and date. After further string processing, I can display the correct time.
For category, initially, I found that event-category only contains the code of categories instead of the string. So, I manually matched all the codes to all the categories and created mapping data that I could use for displaying people-understood categories.

### Filter and Search

Same thing here; the UI was straightforward. I spent some time on the toggle button part and animation. To filter and search the data effectively and efficiently, I utilized the filtering and searching functions that the AU event page provides. For filtering, after observing the pattern of the filtering links based on the category, location, and time the user selects, I built a function that constructs the desired filter link and passes that link to the Show Result button. For searching, the same thing happened. I observed the link and built a function that passes the desired link to the Submit button.

### Pagination and Range

This part is trickier because the page will be affected by range. I built the pagination part first and modified the fetching data hook. Then, I introduced the range select function. Quickly, I found that the same page number means different content when the range is different. I made some adjustments to make it work. However, I noticed that on the event page, there is the total page number. First, I tried iterating from page 1 to receive an error from API. Yet this method is super slow. I knew the total page number was 117 at that moment. I didn’t want to cheat by just using the number 117, but I also didn’t want the super-slow method. So, I implemented something in between. I started searching from page 1 to page 117. And I go up if there is no error and go down if there is an error. I know this might not be the most proper way, but once there is an API that I can use to get the total page numbers or total event numbers, I can simply modify the function. In addition, I want the page number to be loaded as soon as the user opens the website, so I used React Context for state management (also to show that I know React Context).

### Footer

Created a footer similar to the Header, encompassing titles, links, images, and animations.

## Things I Like

- **UI/UX:** I like the UI because it’s very similar to the AU event page. A funny thing is I showed my project to one of my friend, and he couldn’t tell if it’s the real website or not.
- **Range Selection:** I am very excited that I can implement this new function. Especially it’s compatible to the pagination function.
- **Event Information:** I am proud that I can display the same information (not including description tho). I feel that go deep into the API data and just trying to retrieve the same wanted data shows my commitment to perfection and my ability to try-and-error different method.

## Areas for Improvement

- **Titles and Links:** Aim for more efficient management.
- **Project Structure:** Since I know this project is relatively small, I didn’t separate different elements enough. However, I also want to show you that I understand the basics of a good modern website structure, so I divided some code into different files to show that the website is scalable and maintainable. Therefore, you see, there is a struggle to divide and not to divide. I think it requires more experience to really know what the best practice is. I hope to learn more about this in the future.
- **Responsive Design:** I didn’t do responsive design in this project because of the time constraint. However, I did try to use some tricks to make the UI not go too off when the screen size changes (for example, introducing a strict `flex` display, the usage of `vw`, and implementing space filler).
- **Styling Choice:** I know I kinda blend in-line styling and CSS together in this project. For smaller components, I used in-line styling to save file loading time. For bigger ones, I used a separate CSS for maintainability. At first, I did use Tailwind to avoid unnecessary CSS bloat. But I think this is a smaller project. With Tailwind, JSX can become cluttered with many utility classes, making it harder to read and manage, especially for more complex components. I guess I still need more learning to know what the best choice is for a project like this.

## Acknowledgements

Hi, I am Winn! I really want to thank you for taking the time to go over this exercise. I truly hope you like it. Look forward to any comments, feedback, or just any thoughts! Please feel free to contact me at ch4374@nyu.edu or +1 929 544 9273.

## Additional Information

This project was prepared for the Adelphi University Web and Mobile Developer position interview process and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Development and Deployment

- **npm install:** Installs necessary dependencies from the package.json file.
- **npm start:** Launches the app in development mode at http://localhost:3000. Features hot reload and console lint errors.
- **npm run build:** Compiles the app for production, optimizing performance. See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more details.