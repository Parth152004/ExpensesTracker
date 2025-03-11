# Use an official Maven image to build the JAR
FROM maven:3.8.5-openjdk-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy project files
COPY . .

# Build the project
RUN mvn clean package -DskipTests

# Use an official OpenJDK image to run the JAR
FROM openjdk:17-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (change if needed)
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
