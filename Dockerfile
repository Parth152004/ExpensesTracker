# Use Maven with JDK 17 for building
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

# Use OpenJDK 17 for running the app
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
