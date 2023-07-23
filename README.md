# VanVentures
VanVentures is a React-based web application, similar to Airbnb, but for renting vans. Using React Router, it incorporates features such as relative and absolute paths, nested routes, search params, and more. The application provides a robust user experience with smooth transitions between views, thorough error handling, and an engaging interface.
Table of Contents

    Installation
    Features
    Running Tests
    Contact
    Contributing
    License

Installation

    Clone the repository:

bash

git clone https://github.com/antonaorlov/VanVentures.git

    Install the dependencies using npm:

bash

cd vanbnb
npm install

    Start the project:

bash

npm start

The application will start running on http://localhost:3000.
Features

    Routing: The application uses react-router-dom to manage the different views and navigate between them.
        Routes and Links: Routes and Links are used to create an application with multiple views and smooth navigation.
        NavLink: This project uses NavLink to provide a special styling for the "active" navigation link.
        Route Params & useParams(): These are used to pass and retrieve parameters from the route.
        Nested Routes and Outlet Context: To create more complex views with child routes, Outlet and useOutlet are used.
        Search Params & Merging Search Params: This project uses search params to filter the list of available vans. This is merged with the current location's search params using useLocation.
        Relative and Absolute Paths: Both are used appropriately throughout the application to provide robust navigation.
    Forms & Authentication: There is a login form, and protected routes that require authentication. The authentication is implemented using Firebase's authentication system.
    Firestore: Firestore is used as the backend database to store van and user data.
    Error Handling & Loading State: The application features both "happy" and "sad" paths, incorporating loading states and thorough error handling to provide feedback to the user.

Running Tests

To execute the unit tests:

bash

npm test

Contributing

    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request

License

Distributed under the MIT License. See LICENSE for more information.
