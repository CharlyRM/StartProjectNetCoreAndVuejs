# My project full IntegrationPlatform 📜


## Main Technologies ☕️

VueJs, .NET Core, PostgreSQL, webpack.

## Component Breakdown: 🎉

br.com.API: Contains JSON API endpoints consumed by the front-end application.<br /> 

br.com.Model: Houses object classes used across all solutions.<br /> 

br.com.Repository: Implements business rules such as persistence logic, repository patterns, libraries, and interfaces.<br /> 

## Database Setup:

PostgreSQL script to create user tables. <br /> 

After creating a PostgreSQL database user, run table creation scripts.<br /> 

Configure database connection settings in br.com.Repository\br.com.Infra\Connection.cs.<br /> 

## Authentication: 

Utilizes JWT (JSON Web Tokens) for authentication and authorization.<br />

## Front-End Project: 
- Single Page Application (SPA) developed in Vue.js.<br />
- JavaScript files compiled via webpack.<br />

## Development Environment: 

Developed using Visual Studio 2022 and VS Code