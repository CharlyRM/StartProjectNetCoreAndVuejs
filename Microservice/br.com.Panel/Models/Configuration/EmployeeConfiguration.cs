﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel.Models.Configuration
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.HasData(
                new Employee
                {
                    Id = new Guid("e310a6cb-6677-4aa6-93c7-2763956f7a97"),
                    Name = "Mark Miens",
                    Age = 26,
                    Position = "Software Developer"
                },
                new Employee
                {
                    Id = new Guid("398d10fe-4b8d-4606-8e9c-bd2c78d4e001"),
                    Name = "Anna Simmons",
                    Age = 29,
                    Position = "Software Developer"
                }
            );
        }
    }
}
