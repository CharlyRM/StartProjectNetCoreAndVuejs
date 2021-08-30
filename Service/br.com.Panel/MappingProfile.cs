using AutoMapper;
using br.com.Painel.Models;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserRegistrationModel, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
