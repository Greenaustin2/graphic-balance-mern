# GRAPHIC BALANCE

[graphic-balance.com](https://graphic-balance-3bf05d57cb18.herokuapp.com/)

## About

<p align="center">

:construction: :construction: :construction: STILL IN DEVELOPEMENT :construction: :construction: :construction:

:construction: not yet optimized for mobile :construction:

</p>
Graphic Balance is a streaming platform intended to provide alternative interaction with the depths of the YouTube database. Using common in-camera file naming protocol (IMG 0000), the program generates search query values and auto plays a query result at random, presenting to each user a unique and constant stream of content. The resulting content is somewhat voyeuristic in nature; family vacations, birthday parties, sporting events, karaoke nights, most of which was never intended to be viewed by the masses. As videos are played, the user is encouraged to submit any interesting artifacts to the archive where they will be stored and indexed. Users can then navigate to the Archive page and view these files in a "greatest hits" esque fashion.

![screen shot one](../assets/screen_shot_one.png?raw=true)

![screen shot two](../assets/screen_shot_two.png?raw=true)

![screen shot three](../assets/screen_shot_three.png?raw=true)

## Tech Stack

**Frontend** - ![react logo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![react router logo](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Backend** - ![node.js logo](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![express logo](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![mongodb logo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![youtube logo](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)

**Styling** - ![css3 logo](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
, CSS Modules

**Testing** - ![postman logo](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

**Deployment** - [![heroku logo](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
](https://vercel.com/greenaustin2/graphic-balance-mern)

## Process

Graphic Balance utilizes the MERN stack, which was an ideal set of frameworks for this concept. When initialized, the program generates a search query consiting of a string ("IMG") and a four digit number between 0000 and 9999 (eg. IMG 2157). IMG is a standard in camera file type, similar to MOV, AVI, DVI, MP4 etc. This query is then used to search Youtube via the Youtube Data API, and when a response is received, a video is chosed from that response at random and presented to the user.
This was a challenging project, and one that I started far too early in my developement career. However, the challenges it presented exposed me to a wide array of concepts, frameworks, and concepts that I may not have grasped had I followed common MERN stack tutorial projects.

## Key concepts learned:

### -State Management

Multiple React state management techniques (context, localized, custom hooks) were implemented before arriving at the end product. This conditioned me heavily with the React Lifecycle and how React behaves under the hood

### -API

For the program to function as I intended, multiple API calls were required due to the Youtube API's seperation of information into seperate API endpoints. The respective API call's response data was then filtered as per certain criteria, and then concatenated into one final object that is then used to communicate to the Youtube Iframe API, as well as send formatted data to the database. This gave me a healthy amount of practice with JSON, async await, and general API fetch, response protocol.

### -Database

All basic CRUD operations are utilized throughout this project. Once I was familiar with the structure of the Youtube API responses, the main task was destructuring those objects, extracting the necessary information, and assigning said infoirmation to the respective fields in the database Schema.

## Future Functionality

### -User Authentification

Save and archive videos to a personal account

Secondary database for video submission staging

When a video is submitted to the archive by a user, it will be sent to a staging database. Once approved by an admin, it will be transferred to the permanent public database

### -Styling

While all core functionality is enabled, the interface is clunky and buggy

Optimize for mobile (currently only desktop and large device viewing recommended)

### -Youtube Data API Quota

Awaiting Google Audited Developer Requests Form to be approved for unlimited API quota
