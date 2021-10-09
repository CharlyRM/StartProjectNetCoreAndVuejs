Complete initial project of user registration and login with identityserver4 | VueJs | NET Core | Postgresql | webpack

Project Service (IntegrationPlatform)

br.com.Panel: where is the project with the registration pages and JS files generated via npm from the node.js project in webpack.

br.com.PanelAPI: has the json api endpoint consumed by the front-end application.

br.com.Model: Location with object classes used in each solution.

br.com.AuthServer: Project with identityserver4 where a web token is generated and controls the access permissions of the br.com.PanelAPI project.

br.com.Repository: Project that has business rules such as persistence, repository, libraries and interface.

br.com.EmailService: Project with implementation of sending SMTP email used by the project.

Script (Postgresql)

Run the authentication_user and authentication_user_temp scripts that are in the "Service" directory

After creating a database user in postgresql and running the table scripts, configure the connection file in the path br.com.Repository \ br.com.Infra \ Connection.cs

Project front-end (https://panjiachen.github.io/vue-element-admin-site/guide/advanced/i18n.html) generated via npm and placed in br.com.Panel\wwwroot

Setting up the email server with a Gmail account: navigate to br.com.Panel \ appsettings and enter your login and password; It will be used as the sender in the app.

At the end, run the br.com.Panel, br.com.PanelAPI and br.com.AuthServer projects in Visual studio 2019 and register your user on the registration page, confirm the account in the email received and login.
