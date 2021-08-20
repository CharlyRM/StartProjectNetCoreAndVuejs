# StartProjectNetCoreAndVuejs
Complete initial project of user registration and login with identityserver4 | VueJs | NET Core | Postgresql | webpack

- Project Service (IntegrationPlatform) 

br.com.Panel : where it has the project with the registration pages and JS files generated via npm of the node.js project in webpack.

br.com.PanelAPI : Has the json api endpoint consumed by the front-end application.

br.com.Model : Location with object classes used in every solution.

br.com.AuthServer : Project with identityserver4 where a web token is generated and controls the access permissions of the br.com.PanelAPI project.

br.com.Repository : Project that has business rules such as persistence, repository, libraries and interface.

br.com.EmailService : Project with implementation of sending SMTP email used by the project.

- Script (Postgresql)

Run the authentication_user and authentication_user_temp scripts which is in the directory "Microservice"

After creating a database user in postgresql and running the table scripts configure the connection file in the path br.com.Repository\br.com.Infra\Connection.cs

- Project Front-End (vue-element-admin-i18n)

When making a change to this front-end project, I need to generate the files that go to the br.com.Panel\wwwroot directory using node with the command "npm run build:prod". Running the build will generate the files in the vue-element-admin-i18n\dist.

Copy the contents of the vue-element-admin-i18n\dist\index.html file and paste it on page br.com.Panel\Views\Account\Login keeping the header
@{
    Layout = null;
}

- Configuring email server with Gmail account: navigate to br.com.Panel\appsettings and enter your login and password data; It will be used as sender in the application.

- At the end, run the br.com.Panel, br.com.PanelAPI and br.com.AuthServer projects in Visual studio 2019 and register your user on the registration page, confirm the account in the email received and then login.


