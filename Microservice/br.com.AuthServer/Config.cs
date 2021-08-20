using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Test;
using br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace AuthServer
{
    public class Config
    {
        public static List<TestUser> GetUsers()
        {
            List<User> listUser;
            List<TestUser> returnUser = new List<TestUser>();
            UserRepository userRepository = new UserRepository();
            
            listUser = userRepository.SearchUser("", "");

            foreach (User users in listUser)
            {
                TestUser user = new TestUser();
                user.SubjectId = Convert.ToString(users.idUser);
                user.Username = users.email;
                user.Password = users.password;
                returnUser.Add(user);
            }

            return returnUser;
        }

        // Clients allowed to access resources from Auth Server
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                /*
                new Client
                {
                    ClientId = "client",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = {"api1"}
                },*/
                new Client
                {
                    ClientId = "1",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    ClientSecrets =
                    {
                        new Secret("wZ8Ou5Hq".Sha256())
                    },
                    AllowedScopes = { "api.painel" }
                }
            };
        }

        // APIs allowed to access the Auth server
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("api.painel", "Api panel web")
            };
        }
    }
}
