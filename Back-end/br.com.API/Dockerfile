#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["br.com.API/br.com.API.csproj", "br.com.API/"]
RUN dotnet restore "br.com.API/br.com.API.csproj"
COPY . .
WORKDIR "/src/br.com.API"
RUN dotnet build "br.com.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "br.com.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "br.com.API.dll"]