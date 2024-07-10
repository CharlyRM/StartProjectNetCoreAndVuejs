Project Overview:

Project Name: IntegrationPlatform
Main Technologies: VueJs, .NET Core, PostgreSQL, webpack.

Component Breakdown:

br.com.API: Contains JSON API endpoints consumed by the front-end application.
br.com.Model: Houses object classes used across all solutions.
br.com.Repository: Implements business rules such as persistence logic, repository patterns, libraries, and interfaces.

Database Setup: PostgreSQL script to create user tables. After creating a PostgreSQL database user, run table creation scripts.
Configure database connection settings in br.com.Repository\br.com.Infra\Connection.cs.

Authentication:

Utilizes JWT (JSON Web Tokens) for authentication and authorization.

Front-End Project: 
1 - Single Page Application (SPA) developed in Vue.js.
2 - JavaScript files compiled via webpack.

Development Environment: Developed using Visual Studio 2022 and VS Code