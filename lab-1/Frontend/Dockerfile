#STAGE 1 - BUILD
FROM node:12.7-alpine AS build
WORKDIR /src
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine as base
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80

# FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
# WORKDIR /src
# COPY ["Backend.csproj", ""]
# RUN dotnet restore "./Backend.csproj"
# COPY . .
# WORKDIR "/src/."
# RUN dotnet build "Backend.csproj" -c Release -o /app/build

# FROM build AS publish
# RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "Backend.dll"]