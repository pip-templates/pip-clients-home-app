# Dockerfile to launch application
FROM nginx:1.13.3-alpine

# Get app name and short name using in routes
ARG app_name
ARG short_name

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Create folder for app routing
RUN mkdir -p /usr/share/nginx/html/$short_name
# Copy the artifacts in dist folder to default nginx public folder
COPY /dist/$app_name/* /usr/share/nginx/html/$short_name/
# Copy assets
COPY /dist/$app_name/assets /usr/share/nginx/html/$short_name/assets

# Set run command
CMD ["nginx", "-g", "daemon off;"]